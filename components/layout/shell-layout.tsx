"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Menu,
  X,
  ChevronRight,
  User,
  Settings,
  Share2,
  Smartphone,
  Home,
  Cog,
  Building2,
  BookOpen,
  Briefcase,
  Users,
  Phone,
  Cpu,
  Brain,
  Cloud,
  Database,
  Wifi,
  Blocks,
  Bot,
  Code,
  TestTube,
  Heart,
  ShoppingCart,
  Banknote,
  Factory,
  Wheat,
  Gamepad2,
  FileText,
  Search,
  Video,
  Trophy,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { SocialDock } from "@/components/layout/social-dock"
import { MainHeader } from "@/components/layout/main-header"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  {
    name: "Services",
    href: "/services",
    icon: Cog,
    submenu: [
      { name: "AI Development & Generative AI Solutions", href: "/services/ai-development", icon: Brain },
      { name: "Machine Learning & Predictive Analytics", href: "/services/machine-learning", icon: Cpu },
      { name: "Cloud Services & DevOps", href: "/services/cloud-devops", icon: Cloud },
      { name: "Enterprise Data Engineering", href: "/services/data-engineering", icon: Database },
      { name: "IoT Solutions & Smart Device Integration", href: "/services/iot-solutions", icon: Wifi },
      { name: "Blockchain Development Services", href: "/services/blockchain", icon: Blocks },
      { name: "Agentic AI & Intelligent Automation", href: "/services/agentic-ai", icon: Bot },
      { name: "Software Product Engineering", href: "/services/software-engineering", icon: Code },
      { name: "QA Testing & Continuous Delivery", href: "/services/qa-testing", icon: TestTube },
    ],
  },
  {
    name: "Industries",
    href: "/industries",
    icon: Building2,
    submenu: [
      { name: "AI Solutions for Healthcare", href: "/industries/healthcare", icon: Heart },
      { name: "AI Solutions for Retail & E-Commerce", href: "/industries/retail", icon: ShoppingCart },
      { name: "AI for BFSI", href: "/industries/bfsi", icon: Banknote },
      { name: "AI for Manufacturing & Supply Chain", href: "/industries/manufacturing", icon: Factory },
      { name: "AI in Agriculture & Smart Farming", href: "/industries/agriculture", icon: Wheat },
      { name: "AI for Gaming & Entertainment", href: "/industries/gaming", icon: Gamepad2 },
    ],
  },
  {
    name: "Resources",
    href: "/resources",
    icon: BookOpen,
    submenu: [
      { name: "Case Studies", href: "/resources/case-studies", icon: FileText },
      { name: "Research & Industry Reports", href: "/resources/research", icon: Search },
      { name: "Blog: AI Trends & Innovation", href: "/blog", icon: BookOpen },
      { name: "Webinars & Thought Leadership", href: "/resources/webinars", icon: Video },
    ],
  },
  { name: "Portfolio", href: "/portfolio", icon: Trophy },
  { name: "Leadership Team", href: "/about", icon: Users },
  { name: "Careers", href: "/careers", icon: Briefcase },
  { name: "Contact Us", href: "/contact", icon: Phone },
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

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      // You could add a toast notification here
    } catch (err) {
      console.error("Failed to copy link:", err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <MainHeader user={user} />

      {/* Left Sticky Panel */}
      <aside
        className={cn(
          "fixed left-0 top-24 bottom-16 z-40 bg-gradient-to-b from-slate-800/95 to-blue-900/95 backdrop-blur-sm border-r border-blue-500/20 transition-all duration-300 overflow-y-auto",
          isCollapsed ? "w-16" : "w-64",
        )}
      >
        <div className="p-4">
          {/* Logo */}
          <div className="flex items-center justify-between mb-6">
            {!isCollapsed && (
              <Link href="/" className="flex items-center">
                <Image src="/images/gslogo.png" alt="GSGROUPS" width={140} height={32} className="h-8 w-auto" />
              </Link>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 text-white hover:bg-white/10"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>

          {/* User Profile Section (when logged in) */}
          {user && (
            <div className="mb-6 pb-6 border-b border-blue-500/20">
              <div className={cn("flex items-center", isCollapsed ? "justify-center" : "space-x-3")}>
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
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
                    <p className="text-sm font-medium text-white truncate">{user.full_name || "User"}</p>
                    <p className="text-xs text-blue-200 truncate">{user.email}</p>
                  </div>
                )}
              </div>

              {!isCollapsed && (
                <div className="mt-4 space-y-2">
                  <Link
                    href="/profile"
                    className="flex items-center space-x-2 text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                  <Link
                    href="/settings"
                    className="flex items-center space-x-2 text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                  <Link
                    href="/refer"
                    className="flex items-center space-x-2 text-sm text-blue-200 hover:text-white transition-colors"
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
            {navigation.map((item) => {
              const IconComponent = item.icon
              return (
                <div key={item.name}>
                  <div
                    className={cn(
                      "flex items-center justify-between p-3 rounded-lg text-sm font-medium transition-all cursor-pointer group",
                      "text-blue-100 hover:bg-gradient-to-r hover:from-blue-600/50 hover:to-purple-600/50 hover:text-white",
                      isCollapsed && "justify-center",
                    )}
                    onClick={() => {
                      if (item.submenu) {
                        setActiveSubmenu(activeSubmenu === item.name ? null : item.name)
                      }
                    }}
                  >
                    <Link href={item.href} className="flex items-center space-x-3 flex-1">
                      <IconComponent className="h-5 w-5 flex-shrink-0" />
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
                      {item.submenu.map((subItem) => {
                        const SubIconComponent = subItem.icon
                        return (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-center space-x-3 p-2 text-sm text-blue-200 hover:text-white hover:bg-blue-600/30 rounded-md transition-colors"
                          >
                            <SubIconComponent className="h-4 w-4 flex-shrink-0" />
                            <span>{subItem.name}</span>
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* Bottom Actions */}
          <div className="absolute bottom-4 left-4 right-4 space-y-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleShare}
              className={cn(
                "w-full justify-start text-blue-100 hover:bg-blue-600/30 hover:text-white",
                isCollapsed && "justify-center",
              )}
            >
              <Share2 className="h-4 w-4" />
              {!isCollapsed && <span className="ml-2">Share Site</span>}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowMobilePreview(!showMobilePreview)}
              className={cn(
                "w-full justify-start text-blue-100 hover:bg-blue-600/30 hover:text-white",
                isCollapsed && "justify-center",
              )}
            >
              <Smartphone className="h-4 w-4" />
              {!isCollapsed && <span className="ml-2">View Mobile</span>}
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={cn("transition-all duration-300 pt-24 pb-16", isCollapsed ? "ml-16" : "ml-64")}>
        <div className="min-h-[calc(100vh-10rem)]">{children}</div>
      </main>

      {/* Fixed Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 h-16 bg-gradient-to-r from-slate-800/95 to-blue-900/95 backdrop-blur-sm border-t border-blue-500/20">
        <div className="flex items-center justify-between h-full px-4">
          {/* Social Dock */}
          <SocialDock />

          <div className="flex items-center space-x-4 text-sm text-blue-200">
            <Link href="mailto:sales@gsgroups.net" className="hover:text-white transition-colors">
              sales@gsgroups.net
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
