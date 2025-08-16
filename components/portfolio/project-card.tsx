"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, ExternalLink, Calendar, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { Lightbox } from "./lightbox"

interface ProjectCardProps {
  project: {
    id: string
    title: string
    slug: string
    excerpt?: string
    featured_image?: string
    client_name?: string
    completion_date?: string
    project_url?: string
    gallery?: string[]
    categories?: {
      name: string
      color: string
    }
    view_count?: number
  }
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxImages, setLightboxImages] = useState<Array<{ src: string; alt: string; caption?: string }>>([])

  const handleImageClick = () => {
    const images = []

    if (project.featured_image) {
      images.push({
        src: project.featured_image,
        alt: project.title,
        caption: `${project.title} - Featured Image`,
      })
    }

    if (project.gallery && project.gallery.length > 0) {
      project.gallery.forEach((image, index) => {
        images.push({
          src: image,
          alt: `${project.title} - Gallery Image ${index + 1}`,
          caption: `${project.title} - Gallery Image ${index + 1}`,
        })
      })
    }

    setLightboxImages(images)
    setIsLightboxOpen(true)
  }

  return (
    <>
      <Card className={cn("group overflow-hidden hover:shadow-lg transition-all duration-300", className)}>
        <div className="relative aspect-[4/3] overflow-hidden">
          {project.featured_image ? (
            <Image
              src={project.featured_image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="w-16 h-16 mx-auto mb-2 bg-muted-foreground/20 rounded-lg flex items-center justify-center">
                  <Eye className="h-8 w-8" />
                </div>
                <p className="text-sm">No Image</p>
              </div>
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={handleImageClick}
                className="bg-white/90 text-black hover:bg-white"
              >
                <Eye className="h-4 w-4 mr-2" />
                View Gallery
              </Button>
              {project.project_url && (
                <Button variant="secondary" size="sm" asChild className="bg-white/90 text-black hover:bg-white">
                  <a href={project.project_url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Site
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Category Badge */}
          {project.categories && (
            <div className="absolute top-3 left-3">
              <Badge
                variant="secondary"
                style={{ backgroundColor: project.categories.color + "20", color: project.categories.color }}
              >
                {project.categories.name}
              </Badge>
            </div>
          )}
        </div>

        <CardContent className="p-6">
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                <Link href={`/portfolio/${project.slug}`}>{project.title}</Link>
              </h3>
              {project.excerpt && <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{project.excerpt}</p>}
            </div>

            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center space-x-4">
                {project.client_name && (
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{project.client_name}</span>
                  </div>
                )}
                {project.completion_date && (
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(project.completion_date).getFullYear()}</span>
                  </div>
                )}
              </div>
              {project.view_count && project.view_count > 0 && (
                <div className="flex items-center space-x-1">
                  <Eye className="h-3 w-3" />
                  <span>{project.view_count}</span>
                </div>
              )}
            </div>

            <div className="pt-2">
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href={`/portfolio/${project.slug}`}>View Details</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Lightbox images={lightboxImages} isOpen={isLightboxOpen} onClose={() => setIsLightboxOpen(false)} />
    </>
  )
}
