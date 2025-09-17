"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { UserMenu } from "@/components/auth/user-menu"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "AI Development & Generative AI Solutions", href: "/services/ai-development" },
      { name: "Machine Learning & Predictive Analytics", href: "/services/machine-learning" },
      { name: "Cloud Services & DevOps", href: "/services/cloud-devops" },
      { name: "Enterprise Data Engineering", href: "/services/data-engineering" },
      { name: "IoT Solutions & Smart Device Integration", href: "/services/iot-solutions" },
      { name: "Blockchain Development Services", href: "/services/blockchain" },
      { name: "Agentic AI & Intelligent Automation", href: "/services/agentic-ai" },
      { name: "Software Product Engineering", href: "/services/software-engineering" },
      { name: "QA Testing & Continuous Delivery", href: "/services/qa-testing" },
    ],
  },
  {
    name: "Industries",
    href: "/industries",
    submenu: [
      { name: "AI Solutions for Healthcare", href: "/industries/healthcare" },
      { name: "AI Solutions for Retail & E-Commerce", href: "/industries/retail" },
      { name: "AI for BFSI", href: "/industries/bfsi" },
      { name: "AI for Manufacturing & Supply Chain", href: "/industries/manufacturing" },
      { name: "AI in Agriculture & Smart Farming", href: "/industries/agriculture" },
      { name: "AI for Gaming & Entertainment", href: "/industries/gaming" },
    ],
  },
  {
    name: "Resources",
    href: "/resources",
    submenu: [
      { name: "Case Studies", href: "/resources/case-studies" },
      { name: "Research & Industry Reports", href: "/resources/research" },
      { name: "Blog: AI Trends & Innovation", href: "/blog" },
      { name: "Webinars & Thought Leadership", href: "/resources/webinars" },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Leadership Team", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
]

interface HeaderProps {
  user?: {
    id: string
    email: string
    full_name?: string
    avatar_url?: string
    role: string
  } | null
}

export function Header({ user }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/gslogo.png"
              alt="GSGROUPS"
              width={180}
              height={40}
              className="h-8 w-auto lg:h-10"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-1 text-sm font-medium transition-colors duration-200",
                    "text-foreground hover:text-accent",
                  )}
                >
                  <span>{item.name}</span>
                  {item.submenu && <ChevronDown className="h-4 w-4 transition-transform duration-200" />}
                </Link>

                {/* Submenu */}
                {item.submenu && activeSubmenu === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg py-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-muted transition-colors duration-200"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button & User Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <UserMenu user={user} />
            ) : (
              <>
                <Button asChild variant="ghost">
                  <Link href="/auth/login">Sign In</Link>
                </Button>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact">Get Free AI Consultation</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <nav className="py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-sm font-medium text-foreground hover:text-accent hover:bg-muted rounded-md transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-muted rounded-md transition-colors duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4 space-y-2">
                {user ? (
                  <div className="flex items-center space-x-3 p-2 bg-muted rounded-md">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                      {user.full_name?.[0] || user.email[0].toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{user.full_name || "User"}</p>
                      <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href="/auth/login" onClick={() => setIsMobileMenuOpen(false)}>
                        Sign In
                      </Link>
                    </Button>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                        Get Free AI Consultation
                      </Link>
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
