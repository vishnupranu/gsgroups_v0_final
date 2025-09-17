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
  title: "GSGROUPS - AI Development & Digital Transformation Company",
  description:
    "Leading AI development company specializing in Generative AI, Machine Learning, Cloud Services, and Digital Transformation. 500+ AI solutions delivered for Fortune 500 clients.",
  keywords: [
    "AI Development",
    "Generative AI",
    "Machine Learning Solutions",
    "Digital Transformation",
    "Enterprise Data Engineering",
    "Cloud Services",
    "DevOps",
    "IoT Development",
    "Blockchain Services",
    "AI in Healthcare",
    "AI in Retail",
    "AI in Manufacturing",
    "Predictive Analytics",
    "Intelligent Automation",
    "AI Consulting",
  ],
  authors: [{ name: "GSGROUPS" }],
  creator: "GSGROUPS",
  publisher: "GSGROUPS",
  openGraph: {
    title: "GSGROUPS - AI Development & Digital Transformation Company",
    description:
      "Build your AI-native enterprise with our cutting-edge AI solutions. 500+ AI-powered solutions delivered for Fortune 500 clients.",
    type: "website",
    locale: "en_US",
    siteName: "GSGROUPS",
    images: [
      {
        url: "/images/og-ai-transformation.jpg",
        width: 1200,
        height: 630,
        alt: "GSGROUPS AI Development & Digital Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GSGROUPS - AI Development & Digital Transformation Company",
    description:
      "Build your AI-native enterprise with our cutting-edge AI solutions. 500+ AI-powered solutions delivered.",
    images: ["/images/twitter-ai-card.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://gsgroups.net",
  },
  category: "Technology",
  classification: "AI Development, Digital Transformation, Machine Learning",
  generator: "v0.app",
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
        <link rel="icon" href="/images/gslogo.png" sizes="any" />
        <link rel="icon" href="/images/gslogo.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/images/gslogo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
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
