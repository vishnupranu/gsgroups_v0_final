"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronRight, User, Settings, Share2, Smartphone, Bell, MessageCircle, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import { UserMenu } from "@/components/auth/user-menu"
import { SocialDock } from "@/components/layout/social-dock"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Web Design", href: "/services/web-design" },
      { name: "Branding", href: "/services/branding" },
      { name: "Mobile Apps", href: "/services/mobile-apps" },
      { name: "E-commerce", href: "/services/e-commerce" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

interface ShellLayoutProps {
  children: React.ReactNode
  user?: {
    id: string
    email: string
    full_name?: string
    avatar_url?: string
    role: string
  } | null
}

export function ShellLayout({ children, user }: ShellLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [showMobilePreview, setShowMobilePreview] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState<string | null>(null)

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      // You could add a toast notification here
    } catch (err) {
      console.error("Failed to copy link:", err)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-background border-b border-border">
        <div className="flex items-center justify-end h-full px-4 space-x-4">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Book Appointment
          </Button>
          <Button variant="outline" size="sm">
            <MessageCircle className="h-4 w-4 mr-2" />
            Chat AI
          </Button>
          <Button variant="ghost" size="sm">
            <Bell className="h-4 w-4" />
          </Button>
          {user ? (
            <UserMenu user={user} />
          ) : (
            <>
              <Button variant="ghost" size="sm" onClick={() => setShowAuthModal("login")}>
                Login
              </Button>
              <Button size="sm" onClick={() => setShowAuthModal("register")}>
                Register
              </Button>
            </>
          )}
        </div>
      </header>

      {/* Left Sticky Panel */}
      <aside
        className={cn(
          "fixed left-0 top-16 bottom-16 z-40 bg-card border-r border-border transition-all duration-300 overflow-y-auto",
          isCollapsed ? "w-16" : "w-64",
        )}
      >
        <div className="p-4">
          {/* Logo */}
          <div className="flex items-center justify-between mb-6">
            {!isCollapsed && (
              <Link href="/" className="flex items-center">
                <Image src="/images/gsgroups-logo.png" alt="GSGROUPS" width={140} height={32} className="h-8 w-auto" />
              </Link>
            )}
            <Button variant="ghost" size="sm" onClick={() => setIsCollapsed(!isCollapsed)} className="p-2">
              <Menu className="h-4 w-4" />
            </Button>
          </div>

          {/* User Profile Section (when logged in) */}
          {user && (
            <div className="mb-6 pb-6 border-b border-border">
              <div className={cn("flex items-center", isCollapsed ? "justify-center" : "space-x-3")}>
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                  {user.avatar_url ? (
                    <Image
                      src={user.avatar_url || "/placeholder.svg"}
                      alt="Avatar"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  ) : (
                    user.full_name?.[0] || user.email[0].toUpperCase()
                  )}
                </div>
                {!isCollapsed && (
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{user.full_name || "User"}</p>
                    <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                  </div>
                )}
              </div>

              {!isCollapsed && (
                <div className="mt-4 space-y-2">
                  <Link
                    href="/profile"
                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                  <Link
                    href="/settings"
                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                  <Link
                    href="/refer"
                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Share2 className="h-4 w-4" />
                    <span>Refer</span>
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Navigation */}
          <nav className="space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <div
                  className={cn(
                    "flex items-center justify-between p-2 rounded-md text-sm font-medium transition-colors cursor-pointer",
                    "text-foreground hover:bg-muted hover:text-accent",
                  )}
                  onClick={() => {
                    if (item.submenu) {
                      setActiveSubmenu(activeSubmenu === item.name ? null : item.name)
                    }
                  }}
                >
                  <Link href={item.href} className="flex items-center space-x-2 flex-1">
                    <span className={cn(isCollapsed && "sr-only")}>{item.name}</span>
                  </Link>
                  {item.submenu && !isCollapsed && (
                    <ChevronRight
                      className={cn("h-4 w-4 transition-transform", activeSubmenu === item.name && "rotate-90")}
                    />
                  )}
                </div>

                {/* Submenu */}
                {item.submenu && activeSubmenu === item.name && !isCollapsed && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block p-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Bottom Actions */}
          <div className="absolute bottom-4 left-4 right-4 space-y-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleShare}
              className={cn("w-full justify-start", isCollapsed && "justify-center")}
            >
              <Share2 className="h-4 w-4" />
              {!isCollapsed && <span className="ml-2">Share Site</span>}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowMobilePreview(!showMobilePreview)}
              className={cn("w-full justify-start", isCollapsed && "justify-center")}
            >
              <Smartphone className="h-4 w-4" />
              {!isCollapsed && <span className="ml-2">View Mobile</span>}
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={cn("transition-all duration-300 pt-16 pb-16", isCollapsed ? "ml-16" : "ml-64")}>
        <div className="min-h-[calc(100vh-8rem)]">{children}</div>
      </main>

      {/* Fixed Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 h-16 bg-card border-t border-border">
        <div className="flex items-center justify-between h-full px-4">
          {/* Social Dock */}
          <SocialDock />

          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <Link href="mailto:info@gsgroups.net" className="hover:text-foreground transition-colors">
              info@gsgroups.net
            </Link>
            <span>© 2025 All rights reserved gsgroups.net | Design and Developed by Guidesoft IT Solutions</span>
          </div>
        </div>
      </footer>

      {/* Mobile Preview Modal */}
      {showMobilePreview && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg p-4 max-w-sm w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Mobile Preview</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowMobilePreview(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="aspect-[9/16] bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Mobile preview would show here</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
