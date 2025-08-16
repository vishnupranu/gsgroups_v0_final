import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, FileText, FolderOpen, MessageSquare, TrendingUp, Eye, Activity } from "lucide-react"
import Link from "next/link"

export default async function AdminDashboard() {
  const supabase = createClient()

  // Fetch dashboard statistics
  const [
    { count: projectsCount },
    { count: blogPostsCount },
    { count: usersCount },
    { count: contactsCount },
    { data: recentProjects },
    { data: recentPosts },
    { data: recentContacts },
  ] = await Promise.all([
    supabase.from("projects").select("*", { count: "exact", head: true }),
    supabase.from("blog_posts").select("*", { count: "exact", head: true }),
    supabase.from("users").select("*", { count: "exact", head: true }),
    supabase.from("contact_submissions").select("*", { count: "exact", head: true }),
    supabase
      .from("projects")
      .select("id, title, status, created_at")
      .order("created_at", { ascending: false })
      .limit(5),
    supabase
      .from("blog_posts")
      .select("id, title, status, published_at, view_count")
      .order("created_at", { ascending: false })
      .limit(5),
    supabase
      .from("contact_submissions")
      .select("id, name, email, subject, status, created_at")
      .order("created_at", { ascending: false })
      .limit(5),
  ])

  const stats = [
    {
      title: "Total Projects",
      value: projectsCount || 0,
      icon: FolderOpen,
      description: "Active portfolio projects",
      href: "/admin/projects",
    },
    {
      title: "Blog Posts",
      value: blogPostsCount || 0,
      icon: FileText,
      description: "Published articles",
      href: "/admin/blog",
    },
    {
      title: "Users",
      value: usersCount || 0,
      icon: Users,
      description: "Registered users",
      href: "/admin/users",
    },
    {
      title: "Contact Forms",
      value: contactsCount || 0,
      icon: MessageSquare,
      description: "New inquiries",
      href: "/admin/contacts",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening with your site.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href={stat.href}>View all →</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Projects */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FolderOpen className="h-5 w-5" />
              <span>Recent Projects</span>
            </CardTitle>
            <CardDescription>Latest portfolio projects</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentProjects && recentProjects.length > 0 ? (
              recentProjects.map((project) => (
                <div key={project.id} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{project.title}</p>
                    <p className="text-xs text-muted-foreground">{new Date(project.created_at).toLocaleDateString()}</p>
                  </div>
                  <Badge variant={project.status === "published" ? "default" : "secondary"}>{project.status}</Badge>
                </div>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">No projects yet</p>
            )}
            <Button asChild variant="outline" className="w-full bg-transparent">
              <Link href="/admin/projects">View All Projects</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Recent Blog Posts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>Recent Blog Posts</span>
            </CardTitle>
            <CardDescription>Latest blog articles</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentPosts && recentPosts.length > 0 ? (
              recentPosts.map((post) => (
                <div key={post.id} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{post.title}</p>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <span>
                        {post.published_at ? new Date(post.published_at).toLocaleDateString() : "Not published"}
                      </span>
                      {post.view_count > 0 && (
                        <>
                          <span>•</span>
                          <span className="flex items-center space-x-1">
                            <Eye className="h-3 w-3" />
                            <span>{post.view_count}</span>
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  <Badge variant={post.status === "published" ? "default" : "secondary"}>{post.status}</Badge>
                </div>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">No blog posts yet</p>
            )}
            <Button asChild variant="outline" className="w-full bg-transparent">
              <Link href="/admin/blog">View All Posts</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Contact Forms */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageSquare className="h-5 w-5" />
            <span>Recent Contact Forms</span>
          </CardTitle>
          <CardDescription>Latest customer inquiries</CardDescription>
        </CardHeader>
        <CardContent>
          {recentContacts && recentContacts.length > 0 ? (
            <div className="space-y-4">
              {recentContacts.map((contact) => (
                <div key={contact.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <p className="font-medium text-sm">{contact.name}</p>
                      <Badge variant={contact.status === "new" ? "destructive" : "secondary"} className="text-xs">
                        {contact.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{contact.email}</p>
                    <p className="text-sm font-medium">{contact.subject}</p>
                    <p className="text-xs text-muted-foreground">{new Date(contact.created_at).toLocaleDateString()}</p>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/admin/contacts/${contact.id}`}>View</Link>
                  </Button>
                </div>
              ))}
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/admin/contacts">View All Contacts</Link>
              </Button>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">No contact forms yet</p>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button asChild variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <Link href="/admin/projects/new">
                <FolderOpen className="h-6 w-6" />
                <span>New Project</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <Link href="/admin/blog/new">
                <FileText className="h-6 w-6" />
                <span>New Post</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <Link href="/admin/media">
                <Activity className="h-6 w-6" />
                <span>Media Library</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <Link href="/admin/settings">
                <TrendingUp className="h-6 w-6" />
                <span>Settings</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
