import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import "./globals.css"
import { ShellLayout } from "@/components/layout/shell-layout"
import { createServerClient } from "@/lib/supabase/server"
import { ThemeProvider } from "@/components/theme-provider"
import { SocialDock } from "@/components/layout/social-dock"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "GSGROUPS - Creative Digital Agency",
  description:
    "We create stunning digital experiences that drive results. Professional web design, branding, and digital marketing services.",
  keywords: ["web design", "digital agency", "branding", "digital marketing", "creative agency"],
  authors: [{ name: "GSGROUPS" }],
  creator: "GSGROUPS",
  publisher: "GSGROUPS",
  openGraph: {
    title: "GSGROUPS - Creative Digital Agency",
    description: "We create stunning digital experiences that drive results",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GSGROUPS - Creative Digital Agency",
    description: "We create stunning digital experiences that drive results",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const supabase = createServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/android-chrome-192x192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/android-chrome-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#10b981" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ShellLayout user={user}>{children}</ShellLayout>
          <SocialDock />
        </ThemeProvider>
      </body>
    </html>
  )
}
