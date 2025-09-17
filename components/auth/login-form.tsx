"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Loader2, Mail, Github } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { signIn, signInWithOAuth } from "@/lib/actions/auth"
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
          Signing in...
        </>
      ) : (
        "Sign In"
      )}
    </Button>
  )
}

export function LoginForm() {
  const router = useRouter()
  const [state, formAction] = useActionState(signIn, null)

  // Handle successful login by redirecting
  useEffect(() => {
    if (state?.success) {
      router.push("/admin")
    }
  }, [state, router])

  return (
    <Card className="w-full max-w-md bg-gradient-to-br from-white to-blue-50 border-blue-200">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <Image src="/images/gslogo.png" alt="GSGROUPS" width={160} height={36} className="h-8 w-auto" />
        </div>
        <CardTitle className="text-2xl font-bold text-gray-800">Welcome back</CardTitle>
        <CardDescription className="text-gray-600">Sign in to your GSGROUPS account</CardDescription>
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
              required
              className="w-full border-blue-200 focus:border-blue-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <Link href="/auth/forgot-password" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
              Forgot password?
            </Link>
          </div>

          <SubmitButton />
        </form>

        <div className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/auth/sign-up" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
