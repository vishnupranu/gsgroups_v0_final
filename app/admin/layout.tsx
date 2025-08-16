import type React from "react"
import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  // Get user data with role
  const { data: userData } = await supabase
    .from("users")
    .select("id, email, full_name, avatar_url, role")
    .eq("id", user.id)
    .single()

  if (!userData || !["super_admin", "admin", "editor"].includes(userData.role)) {
    redirect("/")
  }

  return (
    <div className="flex h-screen bg-background">
      <AdminSidebar user={userData} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader user={userData} />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
