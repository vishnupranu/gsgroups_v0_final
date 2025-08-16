import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Mail, Eye, Archive } from "lucide-react"
import Link from "next/link"

export default async function ContactsPage() {
  const supabase = createClient()

  const { data: contacts } = await supabase
    .from("contact_submissions")
    .select("id, name, email, subject, message, status, created_at, company, phone")
    .order("created_at", { ascending: false })

  const statusColors = {
    new: "destructive",
    read: "default",
    replied: "secondary",
    archived: "outline",
  } as const

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Contact Forms</h1>
          <p className="text-muted-foreground">Manage customer inquiries and messages</p>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search contacts..." className="pl-10" />
            </div>
            <Button variant="outline">All Status</Button>
            <Button variant="outline">This Week</Button>
          </div>
        </CardContent>
      </Card>

      {/* Contacts Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Contacts ({contacts?.length || 0})</CardTitle>
          <CardDescription>Customer inquiries and contact form submissions</CardDescription>
        </CardHeader>
        <CardContent>
          {contacts && contacts.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Contact</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contacts.map((contact) => (
                  <TableRow key={contact.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{contact.name}</p>
                        <p className="text-sm text-muted-foreground">{contact.email}</p>
                        {contact.phone && <p className="text-sm text-muted-foreground">{contact.phone}</p>}
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className="font-medium">{contact.subject}</p>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {contact.message.substring(0, 100)}
                        {contact.message.length > 100 && "..."}
                      </p>
                    </TableCell>
                    <TableCell>{contact.company || "—"}</TableCell>
                    <TableCell>
                      <Badge variant={statusColors[contact.status as keyof typeof statusColors]}>
                        {contact.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{new Date(contact.created_at).toLocaleDateString()}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Button asChild variant="ghost" size="sm">
                          <Link href={`mailto:${contact.email}?subject=Re: ${contact.subject}`}>
                            <Mail className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button asChild variant="ghost" size="sm">
                          <Link href={`/admin/contacts/${contact.id}`}>
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Archive className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-12">
              <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No contact forms yet</h3>
              <p className="text-muted-foreground">
                Contact form submissions will appear here when customers reach out.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
