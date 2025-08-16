"use server"

import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

export async function signIn(prevState: any, formData: FormData) {
  if (!formData) {
    return { error: "Form data is missing" }
  }

  const email = formData.get("email")
  const password = formData.get("password")

  if (!email || !password) {
    return { error: "Email and password are required" }
  }

  const supabase = createClient()

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.toString(),
      password: password.toString(),
    })

    if (error) {
      return { error: error.message }
    }

    // Check if user exists in our users table, create if not
    const { data: user } = await supabase.auth.getUser()
    if (user.user) {
      const { data: existingUser } = await supabase.from("users").select("id").eq("id", user.user.id).single()

      if (!existingUser) {
        await supabase.from("users").insert({
          id: user.user.id,
          email: user.user.email!,
          full_name: user.user.user_metadata?.full_name || "",
          avatar_url: user.user.user_metadata?.avatar_url || "",
        })
      }
    }

    return { success: true }
  } catch (error) {
    console.error("Login error:", error)
    return { error: "An unexpected error occurred. Please try again." }
  }
}

export async function signUp(prevState: any, formData: FormData) {
  if (!formData) {
    return { error: "Form data is missing" }
  }

  const email = formData.get("email")
  const password = formData.get("password")
  const fullName = formData.get("fullName")

  if (!email || !password) {
    return { error: "Email and password are required" }
  }

  const supabase = createClient()

  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.toString(),
      password: password.toString(),
      options: {
        emailRedirectTo:
          process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL ||
          `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/auth/callback`,
        data: {
          full_name: fullName?.toString() || "",
        },
      },
    })

    if (error) {
      return { error: error.message }
    }

    // Create user record in our users table
    if (data.user) {
      await supabase.from("users").insert({
        id: data.user.id,
        email: data.user.email!,
        full_name: fullName?.toString() || "",
        role: "client", // Default role
      })
    }

    return { success: "Check your email to confirm your account." }
  } catch (error) {
    console.error("Sign up error:", error)
    return { error: "An unexpected error occurred. Please try again." }
  }
}

export async function signOut() {
  const supabase = createClient()
  await supabase.auth.signOut()
  revalidatePath("/")
  redirect("/")
}

export async function updateProfile(prevState: any, formData: FormData) {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return { error: "Not authenticated" }
  }

  const fullName = formData.get("fullName")
  const bio = formData.get("bio")
  const website = formData.get("website")
  const phone = formData.get("phone")
  const companyName = formData.get("companyName")

  try {
    const { error } = await supabase
      .from("users")
      .update({
        full_name: fullName?.toString() || "",
        bio: bio?.toString() || "",
        website: website?.toString() || "",
        phone: phone?.toString() || "",
        company_name: companyName?.toString() || "",
        updated_at: new Date().toISOString(),
      })
      .eq("id", user.id)

    if (error) {
      return { error: error.message }
    }

    revalidatePath("/profile")
    return { success: "Profile updated successfully!" }
  } catch (error) {
    console.error("Profile update error:", error)
    return { error: "An unexpected error occurred. Please try again." }
  }
}

export async function signInWithOAuth(provider: "google" | "github" | "facebook") {
  const supabase = createClient()

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo:
        process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL ||
        `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/auth/callback`,
    },
  })

  if (error) {
    console.error("OAuth error:", error)
    return
  }

  if (data.url) {
    redirect(data.url)
  }
}
