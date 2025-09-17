"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  Users,
  ImageIcon,
  Settings,
  BarChart3,
  MessageSquare,
  Mail,
  Tag,
  Globe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const navigation = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Content",
    icon: FileText,
    children: [
      { name: "Projects", href: "/admin/projects", icon: FolderOpen },
      { name: "Blog Posts", href: "/admin/blog", icon: FileText },
      { name: "Pages", href: "/admin/pages", icon: Globe },
      { name: "Categories", href: "/admin/categories", icon: Tag },
    ],
  },
  {
    name: "Media Library",
    href: "/admin/media",
    icon: ImageIcon,
  },
  {
    name: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    name: "Communications",
    icon: MessageSquare,
    children: [
      { name: "Contact Forms", href: "/admin/contacts", icon: Mail },
      { name: "Comments", href: "/admin/comments", icon: MessageSquare },
      { name: "Newsletter", href: "/admin/newsletter", icon: Mail },
    ],
  },
  {
    name: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
]

interface AdminSidebarProps {
  user: {
    id: string
    email: string
    full_name?: string
    avatar_url?: string
    role: string
  }
}

export function AdminSidebar({ user }: AdminSidebarProps) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>(["Content", "Communications"])

  const toggleExpanded = (itemName: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemName) ? prev.filter((item) => item !== itemName) : [...prev, itemName],
    )
  }

  return (
    <div
      className={cn(
        "flex flex-col h-full bg-gradient-to-b from-slate-800/95 to-blue-900/95 backdrop-blur-sm border-r border-blue-500/20 transition-all duration-300",
        collapsed ? "w-16" : "w-64",
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-blue-500/20">
        {!collapsed && (
          <Link href="/admin" className="flex items-center space-x-2">
            <Image src="/images/gslogo.png" alt="GSGROUPS" width={120} height={27} className="h-6 w-auto" />
          </Link>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8 p-0 text-white hover:bg-white/10"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="space-y-2">
          {navigation.map((item) => {
            if (item.children) {
              const isExpanded = expandedItems.includes(item.name)
              return (
                <div key={item.name}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start h-9 px-3 text-blue-100 hover:bg-blue-600/30 hover:text-white",
                      collapsed && "justify-center px-0",
                    )}
                    onClick={() => !collapsed && toggleExpanded(item.name)}
                  >
                    <item.icon className="h-4 w-4 flex-shrink-0" />
                    {!collapsed && (
                      <>
                        <span className="ml-3 flex-1 text-left">{item.name}</span>
                        <ChevronRight className={cn("h-4 w-4 transition-transform", isExpanded && "rotate-90")} />
                      </>
                    )}
                  </Button>
                  {!collapsed && isExpanded && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Button
                          key={child.href}
                          variant="ghost"
                          size="sm"
                          asChild
                          className={cn(
                            "w-full justify-start h-8 px-3 text-blue-200 hover:text-white hover:bg-blue-600/30",
                            pathname === child.href && "bg-blue-600/50 text-white",
                          )}
                        >
                          <Link href={child.href}>
                            <child.icon className="h-3 w-3 mr-2" />
                            {child.name}
                          </Link>
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <Button
                key={item.name}
                variant="ghost"
                asChild
                className={cn(
                  "w-full justify-start h-9 px-3 text-blue-100 hover:bg-blue-600/30 hover:text-white",
                  pathname === item.href && "bg-blue-600/50 text-white",
                  collapsed && "justify-center px-0",
                )}
              >
                <Link href={item.href}>
                  <item.icon className="h-4 w-4 flex-shrink-0" />
                  {!collapsed && <span className="ml-3">{item.name}</span>}
                </Link>
              </Button>
            )
          })}
        </nav>
      </ScrollArea>

      {/* User Info */}
      {!collapsed && (
        <>
          <Separator className="border-blue-500/20" />
          <div className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                {user.full_name?.[0] || user.email[0].toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{user.full_name || "Admin User"}</p>
                <p className="text-xs text-blue-200 truncate capitalize">{user.role.replace("_", " ")}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
