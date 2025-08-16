"use client"

import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock"
import { Facebook, Instagram, Linkedin, Twitter, MessageCircle, Share2, Smartphone, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

const socialData = [
  {
    title: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/gsgroups",
    color: "text-blue-600",
  },
  {
    title: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/gsgroups",
    color: "text-pink-600",
  },
  {
    title: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/company/gsgroups",
    color: "text-blue-700",
  },
  {
    title: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/gsgroups",
    color: "text-blue-400",
  },
  {
    title: "Chat",
    icon: MessageCircle,
    href: "#",
    color: "text-green-600",
  },
]

const utilityData = [
  {
    title: "Share Site",
    icon: Share2,
    action: "share",
    color: "text-purple-600",
  },
  {
    title: "Mobile View",
    icon: Smartphone,
    action: "mobile",
    color: "text-orange-600",
  },
]

export function SocialDock() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleAction = (action: string) => {
    switch (action) {
      case "share":
        if (navigator.share) {
          navigator.share({
            title: "GSGROUPS - Creative Digital Agency",
            text: "Check out GSGROUPS for amazing digital solutions!",
            url: window.location.href,
          })
        } else {
          navigator.clipboard.writeText(window.location.href)
        }
        break
      case "mobile":
        // Toggle mobile view simulation
        document.body.classList.toggle("mobile-view")
        break
      case "theme":
        setTheme(theme === "dark" ? "light" : "dark")
        break
    }
  }

  if (!mounted) return null

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <Dock className="items-end pb-3">
        {/* Social Media Icons */}
        {socialData.map((item, idx) => (
          <DockItem
            key={idx}
            className="aspect-square rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-gray-200 dark:border-neutral-700"
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex items-center justify-center"
              >
                <item.icon className={`h-full w-full ${item.color} dark:text-neutral-300`} />
              </a>
            </DockIcon>
          </DockItem>
        ))}

        {/* Utility Icons */}
        {utilityData.map((item, idx) => (
          <DockItem
            key={`utility-${idx}`}
            className="aspect-square rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-gray-200 dark:border-neutral-700"
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>
              <button
                onClick={() => handleAction(item.action)}
                className="w-full h-full flex items-center justify-center"
              >
                <item.icon className={`h-full w-full ${item.color} dark:text-neutral-300`} />
              </button>
            </DockIcon>
          </DockItem>
        ))}

        {/* Theme Toggle */}
        <DockItem className="aspect-square rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-gray-200 dark:border-neutral-700">
          <DockLabel>{theme === "dark" ? "Light Mode" : "Dark Mode"}</DockLabel>
          <DockIcon>
            <button onClick={() => handleAction("theme")} className="w-full h-full flex items-center justify-center">
              {theme === "dark" ? (
                <Sun className="h-full w-full text-yellow-500" />
              ) : (
                <Moon className="h-full w-full text-blue-600" />
              )}
            </button>
          </DockIcon>
        </DockItem>
      </Dock>
    </div>
  )
}
