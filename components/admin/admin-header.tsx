"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { UserMenu } from "@/components/auth/user-menu"
import { MobileAdminNav } from "@/components/mobile/mobile-admin-nav"
import { Search, Bell, ExternalLink } from "lucide-react"
import Link from "next/link"

interface AdminHeaderProps {
  user: {
    id: string
    email: string
    full_name?: string
    avatar_url?: string
    role: string
  }
}

export function AdminHeader({ user }: AdminHeaderProps) {
  return (
    <header className="h-16 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between px-6 h-full">
        <div className="flex items-center space-x-4">
          <MobileAdminNav />

          {/* Search - hidden on mobile, shown on desktop */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search content, users, settings..."
                className="pl-10 bg-muted/50 border-0 focus-visible:ring-1"
              />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
            <Link href="/" target="_blank" className="flex items-center space-x-2">
              <ExternalLink className="h-4 w-4" />
              <span className="hidden lg:inline">View Site</span>
            </Link>
          </Button>

          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-destructive rounded-full"></span>
          </Button>

          <UserMenu user={user} />
        </div>
      </div>
    </header>
  )
}
