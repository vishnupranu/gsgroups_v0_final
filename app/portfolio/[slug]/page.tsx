"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Lightbox } from "@/components/portfolio/lightbox"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ExternalLink, Calendar, User, Eye, Share2, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock project data - in real app this would come from Supabase
const mockProject = {
  id: "1",
  title: "E-commerce Platform Redesign",
  slug: "ecommerce-platform-redesign",
  description: `
    <p>This comprehensive e-commerce platform redesign project focused on creating a modern, user-friendly shopping experience that drives conversions and enhances customer satisfaction.</p>
    
    <h3>Project Overview</h3>
    <p>Our client, TechStore Inc., approached us with the challenge of modernizing their outdated e-commerce platform. The existing site had poor user experience, low conversion rates, and was not mobile-optimized.</p>
    
    <h3>Our Approach</h3>
    <ul>
      <li>Conducted comprehensive user research and competitor analysis</li>
      <li>Redesigned the entire user interface with focus on conversion optimization</li>
      <li>Implemented responsive design for seamless mobile experience</li>
      <li>Optimized checkout process to reduce cart abandonment</li>
      <li>Integrated advanced search and filtering capabilities</li>
    </ul>
    
    <h3>Results</h3>
    <p>The redesigned platform resulted in a 150% increase in conversion rates, 40% reduction in bounce rate, and 200% increase in mobile sales within the first three months of launch.</p>
  `,
  content: "Full project content here...",
  featured_image: "/modern-ecommerce-website.png",
  gallery: [
    "/ecommerce-homepage.png",
    "/ecommerce-product-page.png",
    "/ecommerce-checkout-flow.png",
    "/placeholder.svg?height=800&width=1200",
    "/placeholder.svg?height=800&width=1200",
  ],
  client_name: "TechStore Inc.",
  completion_date: "2024-01-15",
  project_url: "https://example.com",
  categories: {
    name: "E-commerce",
    color: "#F59E0B",
  },
  tags: ["E-commerce", "UI/UX Design", "Responsive Design", "Conversion Optimization"],
  view_count: 245,
  technologies: ["React", "Next.js", "Tailwind CSS", "Stripe", "Shopify"],
  duration: "3 months",
  team_size: "4 people",
}

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // In real app, fetch project by slug from Supabase
  const project = mockProject

  if (!project) {
    notFound()
  }

  const lightboxImages = [
    {
      src: project.featured_image,
      alt: project.title,
      caption: `${project.title} - Featured Image`,
    },
    ...project.gallery.map((image, index) => ({
      src: image,
      alt: `${project.title} - Gallery Image ${index + 1}`,
      caption: `${project.title} - Gallery Image ${index + 1}`,
    })),
  ]

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setIsLightboxOpen(true)
  }

  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-20 lg:pt-24">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/portfolio">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Project Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Badge
                    variant="secondary"
                    style={{ backgroundColor: project.categories.color + "20", color: project.categories.color }}
                  >
                    {project.categories.name}
                  </Badge>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Eye className="h-4 w-4" />
                    <span>{project.view_count} views</span>
                  </div>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">{project.title}</h1>
                <div className="flex items-center space-x-6 text-muted-foreground">
                  {project.client_name && (
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{project.client_name}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(project.completion_date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              {/* Project Actions */}
              <div className="flex items-center space-x-4">
                {project.project_url && (
                  <Button asChild>
                    <a href={project.project_url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live Site
                    </a>
                  </Button>
                )}
                <Button variant="outline" className="bg-transparent">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Project
                </Button>
                <Button variant="outline" className="bg-transparent">
                  <Heart className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </div>

              {/* Project Details */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Project Details</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Duration</p>
                      <p className="font-medium">{project.duration}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Team Size</p>
                      <p className="font-medium">{project.team_size}</p>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div>
                    <p className="text-muted-foreground mb-2">Technologies Used</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div>
                    <p className="text-muted-foreground mb-2">Tags</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Featured Image */}
            <div className="space-y-6">
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => openLightbox(0)}
              >
                <Image
                  src={project.featured_image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 text-black px-4 py-2 rounded-lg font-medium">Click to view full size</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Description */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: project.description }} />
        </section>

        {/* Gallery */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => openLightbox(index + 1)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Gallery Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 text-black px-3 py-1 rounded text-sm font-medium">View Image</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related Projects */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-border">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">More Projects</h2>
            <p className="text-muted-foreground">Explore other projects in our portfolio</p>
          </div>
          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/portfolio">
                View All Projects
                <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
              </Link>
            </Button>
          </div>
        </section>
      </div>

      <Footer />

      <Lightbox
        images={lightboxImages}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        initialIndex={lightboxIndex}
      />
    </div>
  )
}
