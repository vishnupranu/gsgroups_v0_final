"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Bell, Calendar, MessageCircle, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"
import { LoginForm } from "@/components/auth/login-form"
import { SignUpForm } from "@/components/auth/signup-form"
import { NotificationCenter } from "@/components/notifications/notification-center"

interface MainHeaderProps {
  user?: {
    id: string
    email: string
    full_name?: string
    avatar_url?: string
    role: string
  } | null
}

export function MainHeader({ user }: MainHeaderProps) {
  const [showAuthModal, setShowAuthModal] = useState<"login" | "register" | null>(null)
  const [showNotifications, setShowNotifications] = useState(false)

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Top Contact Bar */}
        <div className="w-full bg-gradient-to-r from-blue-900 via-blue-800 to-purple-800 dark:from-blue-950 dark:via-purple-900 dark:to-indigo-950 text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <Link
                href="mailto:sales@gsgroups.net"
                className="flex items-center space-x-2 hover:text-blue-200 dark:hover:text-purple-200 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>sales@gsgroups.net</span>
              </Link>
              <div className="hidden md:block text-blue-200 dark:text-purple-200">
                Transforming Businesses with AI & Digital Innovation
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href="https://www.facebook.com/pranu21m"
                target="_blank"
                className="hover:text-blue-200 dark:hover:text-purple-200 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="https://x.com/GSGROUPS12144"
                target="_blank"
                className="hover:text-blue-200 dark:hover:text-purple-200 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="https://linkedin.com/company/gsgroups"
                target="_blank"
                className="hover:text-blue-200 dark:hover:text-purple-200 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="https://instagram.com/gsgroups"
                target="_blank"
                className="hover:text-blue-200 dark:hover:text-purple-200 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="https://youtube.com/@gsgroups"
                target="_blank"
                className="hover:text-blue-200 dark:hover:text-purple-200 transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <header className="w-full bg-gradient-to-r from-white to-blue-50 dark:from-gray-900 dark:to-blue-950 border-b border-blue-200 dark:border-blue-800 shadow-sm backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-6">
                <Link href="/" className="flex items-center">
                  <Image src="/images/gslogo.png" alt="GSGROUPS" width={120} height={28} className="h-7 w-auto" />
                </Link>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 text-white border-none hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-800 dark:hover:to-purple-800 shadow-lg"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Book AI Consultation
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-700 dark:to-pink-700 text-white border-none hover:from-purple-700 hover:to-pink-700 dark:hover:from-purple-800 dark:hover:to-pink-800 shadow-lg"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat AI Expert
                  </Button>
                </div>
              </div>

              {/* Auth & Notifications */}
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowNotifications(true)}
                  className="relative hover:bg-blue-100 dark:hover:bg-blue-900"
                >
                  <Bell className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-xs animate-pulse"></span>
                </Button>

                {user ? (
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Welcome, {user.full_name || user.email}
                    </span>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-blue-300 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900 bg-transparent"
                    >
                      <Link href="/admin">Dashboard</Link>
                    </Button>
                  </div>
                ) : (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowAuthModal("login")}
                      className="text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900"
                    >
                      Login
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => setShowAuthModal("register")}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-800 dark:hover:to-purple-800 shadow-lg"
                    >
                      Register
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </header>
      </div>

      <div className="h-[104px]" />

      {/* Auth Modals */}
      <Dialog open={showAuthModal === "login"} onOpenChange={() => setShowAuthModal(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Sign In to GSGROUPS</DialogTitle>
          </DialogHeader>
          <LoginForm />
        </DialogContent>
      </Dialog>

      <Dialog open={showAuthModal === "register"} onOpenChange={() => setShowAuthModal(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create Your Account</DialogTitle>
          </DialogHeader>
          <SignUpForm />
        </DialogContent>
      </Dialog>

      {/* Notifications Modal */}
      <Dialog open={showNotifications} onOpenChange={setShowNotifications}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Notifications</DialogTitle>
          </DialogHeader>
          <NotificationCenter />
        </DialogContent>
      </Dialog>
    </>
  )
}
