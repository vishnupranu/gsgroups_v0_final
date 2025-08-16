"use server"

import { createClient } from "@/lib/supabase/server"

export async function submitContactForm(prevState: any, formData: FormData) {
  if (!formData) {
    return { error: "Form data is missing" }
  }

  const name = formData.get("name")
  const email = formData.get("email")
  const phone = formData.get("phone")
  const company = formData.get("company")
  const subject = formData.get("subject")
  const message = formData.get("message")
  const projectType = formData.get("projectType")
  const budget = formData.get("budget")
  const timeline = formData.get("timeline")

  if (!name || !email || !subject || !message) {
    return { error: "Please fill in all required fields" }
  }

  const supabase = createClient()

  try {
    const { error } = await supabase.from("contact_submissions").insert({
      name: name.toString(),
      email: email.toString(),
      phone: phone?.toString() || null,
      company: company?.toString() || null,
      subject: subject.toString(),
      message: message.toString(),
      project_type: projectType?.toString() || null,
      budget_range: budget?.toString() || null,
      timeline: timeline?.toString() || null,
      status: "new",
    })

    if (error) {
      console.error("Contact form error:", error)
      return { error: "Failed to submit form. Please try again." }
    }

    // TODO: Send email notification to admin
    // TODO: Send auto-reply email to user

    return { success: "Thank you for your message! We'll get back to you within 24 hours." }
  } catch (error) {
    console.error("Contact form error:", error)
    return { error: "An unexpected error occurred. Please try again." }
  }
}

export async function subscribeToNewsletter(prevState: any, formData: FormData) {
  if (!formData) {
    return { error: "Form data is missing" }
  }

  const email = formData.get("email")
  const name = formData.get("name")

  if (!email) {
    return { error: "Email address is required" }
  }

  const supabase = createClient()

  try {
    // Check if email already exists
    const { data: existing } = await supabase
      .from("newsletter_subscriptions")
      .select("id, status")
      .eq("email", email.toString())
      .single()

    if (existing) {
      if (existing.status === "active") {
        return { error: "This email is already subscribed to our newsletter" }
      } else {
        // Reactivate subscription
        const { error } = await supabase
          .from("newsletter_subscriptions")
          .update({
            status: "active",
            name: name?.toString() || null,
            subscribed_at: new Date().toISOString(),
            unsubscribed_at: null,
          })
          .eq("id", existing.id)

        if (error) {
          console.error("Newsletter reactivation error:", error)
          return { error: "Failed to subscribe. Please try again." }
        }
      }
    } else {
      // Create new subscription
      const { error } = await supabase.from("newsletter_subscriptions").insert({
        email: email.toString(),
        name: name?.toString() || null,
        status: "active",
        source: "website",
      })

      if (error) {
        console.error("Newsletter subscription error:", error)
        return { error: "Failed to subscribe. Please try again." }
      }
    }

    // TODO: Send welcome email
    // TODO: Add to email marketing platform (Mailchimp, ConvertKit, etc.)

    return { success: "Successfully subscribed to our newsletter!" }
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return { error: "An unexpected error occurred. Please try again." }
  }
}
