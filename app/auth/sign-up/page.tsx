import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { SignUpForm } from "@/components/auth/signup-form"

export default async function SignUpPage() {
  const supabase = createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // If user is already logged in, redirect to admin dashboard
  if (session) {
    redirect("/admin")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
      <SignUpForm />
    </div>
  )
}
