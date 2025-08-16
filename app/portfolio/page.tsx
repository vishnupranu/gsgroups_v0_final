"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProjectCard } from "@/components/portfolio/project-card"
import { PortfolioFilter } from "@/components/portfolio/portfolio-filter"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { FolderOpen, Grid, List } from "lucide-react"
import { cn } from "@/lib/utils"

// Mock data - in real app this would come from Supabase
const mockProjects = [
  {
    id: "1",
    title: "E-commerce Platform Redesign",
    slug: "ecommerce-platform-redesign",
    excerpt: "Complete redesign of a modern e-commerce platform with improved UX and conversion optimization.",
    featured_image: "/modern-ecommerce-website.png",
    client_name: "TechStore Inc.",
    completion_date: "2024-01-15",
    project_url: "https://example.com",
    gallery: ["/ecommerce-homepage.png", "/ecommerce-product-page.png", "/ecommerce-checkout-flow.png"],
    categories: {
      name: "E-commerce",
      color: "#F59E0B",
    },
    view_count: 245,
  },
  {
    id: "2",
    title: "Corporate Brand Identity",
    slug: "corporate-brand-identity",
    excerpt: "Complete brand identity design including logo, color palette, and brand guidelines.",
    featured_image: "/corporate-brand-identity.png",
    client_name: "Business Corp",
    completion_date: "2024-02-20",
    gallery: ["/logo-variations.png", "/placeholder-328ml.png", "/modern-business-card.png"],
    categories: {
      name: "Branding",
      color: "#EF4444",
    },
    view_count: 189,
  },
  {
    id: "3",
    title: "Mobile Banking App",
    slug: "mobile-banking-app",
    excerpt: "User-friendly mobile banking application with advanced security features and intuitive design.",
    featured_image: "/mobile-banking-app.png",
    client_name: "SecureBank",
    completion_date: "2024-03-10",
    gallery: ["/mobile-app-login.png", "/placeholder-hlswy.png", "/placeholder-gc1gt.png"],
    categories: {
      name: "Mobile Apps",
      color: "#10B981",
    },
    view_count: 312,
  },
  {
    id: "4",
    title: "Restaurant Website Design",
    slug: "restaurant-website-design",
    excerpt: "Modern restaurant website with online ordering system and reservation management.",
    featured_image: "/restaurant-website-design.png",
    client_name: "Gourmet Bistro",
    completion_date: "2024-01-30",
    project_url: "https://example-restaurant.com",
    gallery: ["/restaurant-homepage.png", "/restaurant-menu.png", "/placeholder-brg9s.png"],
    categories: {
      name: "Web Design",
      color: "#3B82F6",
    },
    view_count: 156,
  },
  {
    id: "5",
    title: "Digital Marketing Campaign",
    slug: "digital-marketing-campaign",
    excerpt: "Comprehensive digital marketing campaign with social media strategy and content creation.",
    featured_image: "/digital-marketing-campaign.png",
    client_name: "StartupXYZ",
    completion_date: "2024-02-15",
    gallery: ["/social-media-campaign.png", "/placeholder-puetn.png", "/email-marketing-templates.png"],
    categories: {
      name: "Digital Marketing",
      color: "#8B5CF6",
    },
    view_count: 203,
  },
  {
    id: "6",
    title: "SaaS Dashboard Interface",
    slug: "saas-dashboard-interface",
    excerpt: "Clean and intuitive dashboard interface for a SaaS analytics platform.",
    featured_image: "/saas-dashboard-interface-design.png",
    client_name: "DataFlow Analytics",
    completion_date: "2024-03-25",
    project_url: "https://example-saas.com",
    gallery: ["/saas-dashboard-overview.png", "/analytics-charts-interface.png", "/placeholder.svg?height=800&width=1200"],
    categories: {
      name: "Web Design",
      color: "#3B82F6",
    },
    view_count: 278,
  },
]

const mockCategories = [
  { id: "1", name: "Web Design", slug: "web-design", color: "#3B82F6" },
  { id: "2", name: "Branding", slug: "branding", color: "#EF4444" },
  { id: "3", name: "Mobile Apps", slug: "mobile-apps", color: "#10B981" },
  { id: "4", name: "E-commerce", slug: "e-commerce", color: "#F59E0B" },
  { id: "5", name: "Digital Marketing", slug: "digital-marketing", color: "#8B5CF6" },
]

export default function PortfolioPage() {
  const [projects, setProjects] = useState(mockProjects)
  const [filteredProjects, setFilteredProjects] = useState(mockProjects)
  const [isLoading, setIsLoading] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const handleFilterChange = ({ search, category }: { search: string; category: string | null }) => {
    let filtered = projects

    if (search) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(search.toLowerCase()) ||
          project.excerpt?.toLowerCase().includes(search.toLowerCase()) ||
          project.client_name?.toLowerCase().includes(search.toLowerCase()),
      )
    }

    if (category) {
      filtered = filtered.filter(
        (project) => project.categories?.name === mockCategories.find((c) => c.id === category)?.name,
      )
    }

    setFilteredProjects(filtered)
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-24 pb-16 lg:pb-20 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Explore our latest projects and see how we've helped businesses transform their digital presence with
              creative solutions and innovative design.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters and View Toggle */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
            <div className="flex-1">
              <PortfolioFilter categories={mockCategories} onFilterChange={handleFilterChange} />
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="bg-transparent"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="bg-transparent"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Projects Grid */}
          {isLoading ? (
            <div
              className={cn(
                "grid gap-8",
                viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1",
              )}
            >
              {[...Array(6)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="aspect-[4/3] w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          ) : filteredProjects.length > 0 ? (
            <div
              className={cn(
                "grid gap-8",
                viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1",
              )}
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <FolderOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters or search terms to find what you're looking for.
              </p>
              <Button
                onClick={() => handleFilterChange({ search: "", category: null })}
                variant="outline"
                className="bg-transparent"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
