"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Loader2, Mail, Github } from "lucide-react"
import Link from "next/link"
import { signUp, signInWithOAuth } from "@/lib/actions/auth"
import Image from "next/image"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
      size="lg"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Creating account...
        </>
      ) : (
        "Create Account"
      )}
    </Button>
  )
}

export function SignUpForm() {
  const [state, formAction] = useActionState(signUp, null)

  return (
    <Card className="w-full max-w-md bg-gradient-to-br from-white to-blue-50 border-blue-200">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <Image src="/images/gslogo.png" alt="GSGROUPS" width={160} height={36} className="h-8 w-auto" />
        </div>
        <CardTitle className="text-2xl font-bold text-gray-800">Create an account</CardTitle>
        <CardDescription className="text-gray-600">Join GSGROUPS and start your digital journey</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* OAuth Buttons */}
        <div className="space-y-3">
          <form action={() => signInWithOAuth("google")}>
            <Button
              type="submit"
              variant="outline"
              className="w-full bg-white border-blue-200 hover:bg-blue-50"
              size="lg"
            >
              <Mail className="mr-2 h-4 w-4" />
              Continue with Google
            </Button>
          </form>
          <form action={() => signInWithOAuth("github")}>
            <Button
              type="submit"
              variant="outline"
              className="w-full bg-white border-blue-200 hover:bg-blue-50"
              size="lg"
            >
              <Github className="mr-2 h-4 w-4" />
              Continue with GitHub
            </Button>
          </form>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with email</span>
          </div>
        </div>

        {/* Email/Password Form */}
        <form action={formAction} className="space-y-4">
          {state?.error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
              {state.error}
            </div>
          )}

          {state?.success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md text-sm">
              {state.success}
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="John Doe"
              required
              className="w-full border-blue-200 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full border-blue-200 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="At least 8 characters"
              required
              minLength={8}
              className="w-full border-blue-200 focus:border-blue-500"
            />
          </div>

          <div className="text-xs text-gray-600">
            By creating an account, you agree to our{" "}
            <Link href="/terms" className="text-blue-600 hover:text-blue-800 transition-colors">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-blue-600 hover:text-blue-800 transition-colors">
              Privacy Policy
            </Link>
            .
          </div>

          <SubmitButton />
        </form>

        <div className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
