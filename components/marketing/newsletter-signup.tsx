"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Mail, CheckCircle } from "lucide-react"
import { subscribeToNewsletter } from "@/lib/actions/marketing"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending} className="bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Subscribing...
        </>
      ) : (
        <>
          <Mail className="mr-2 h-4 w-4" />
          Subscribe
        </>
      )}
    </Button>
  )
}

interface NewsletterSignupProps {
  variant?: "default" | "inline" | "minimal"
  title?: string
  description?: string
  className?: string
}

export function NewsletterSignup({
  variant = "default",
  title = "Stay Updated",
  description = "Get the latest insights on web design, digital marketing, and business growth delivered to your inbox.",
  className = "",
}: NewsletterSignupProps) {
  const [state, formAction] = useActionState(subscribeToNewsletter, null)

  if (variant === "minimal") {
    return (
      <div className={`space-y-4 ${className}`}>
        {state?.success ? (
          <div className="text-center py-4">
            <CheckCircle className="h-8 w-8 text-accent mx-auto mb-2" />
            <p className="text-sm font-medium">Thanks for subscribing!</p>
          </div>
        ) : (
          <>
            <div className="text-center">
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            <form action={formAction} className="flex space-x-2">
              {state?.error && <div className="text-xs text-destructive mb-2">{state.error}</div>}
              <Input name="email" type="email" placeholder="Enter your email" required className="flex-1" />
              <SubmitButton />
            </form>
          </>
        )}
      </div>
    )
  }

  if (variant === "inline") {
    return (
      <div className={`bg-muted/50 p-6 rounded-lg ${className}`}>
        {state?.success ? (
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Successfully Subscribed!</h3>
            <p className="text-muted-foreground">Thank you for subscribing to our newsletter.</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <form action={formAction} className="space-y-4">
              {state?.error && (
                <div className="bg-destructive/10 border border-destructive/50 text-destructive px-4 py-3 rounded-md text-sm">
                  {state.error}
                </div>
              )}
              <div className="flex space-x-2">
                <Input name="email" type="email" placeholder="Enter your email address" required className="flex-1" />
                <SubmitButton />
              </div>
              <p className="text-xs text-muted-foreground text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </>
        )}
      </div>
    )
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Mail className="h-5 w-5" />
          <span>{title}</span>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {state?.success ? (
          <div className="text-center py-4">
            <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Successfully Subscribed!</h3>
            <p className="text-muted-foreground">Thank you for subscribing to our newsletter.</p>
          </div>
        ) : (
          <form action={formAction} className="space-y-4">
            {state?.error && (
              <div className="bg-destructive/10 border border-destructive/50 text-destructive px-4 py-3 rounded-md text-sm">
                {state.error}
              </div>
            )}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email Address
              </label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" required className="w-full" />
            </div>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Name (Optional)
              </label>
              <Input id="name" name="name" type="text" placeholder="Your name" className="w-full" />
            </div>
            <SubmitButton />
            <p className="text-xs text-muted-foreground text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
