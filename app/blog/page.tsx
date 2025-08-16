import { createClient } from "@/lib/supabase/server"
import { SEOHead } from "@/components/seo/seo-head"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, User, Search, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default async function BlogPage() {
  const supabase = createClient()

  const { data: posts } = await supabase
    .from("blog_posts")
    .select(`
      id,
      title,
      slug,
      excerpt,
      featured_image,
      published_at,
      view_count,
      reading_time,
      categories (
        name,
        color
      ),
      users (
        full_name,
        avatar_url
      )
    `)
    .eq("status", "published")
    .not("published_at", "is", null)
    .lte("published_at", new Date().toISOString())
    .order("published_at", { ascending: false })

  const { data: categories } = await supabase
    .from("categories")
    .select("id, name, slug, color")
    .eq("is_active", true)
    .order("name")

  const featuredPost = posts?.[0]
  const regularPosts = posts?.slice(1) || []

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Blog - Digital Marketing & Web Design Insights"
        description="Stay updated with the latest trends in web design, digital marketing, and business growth. Expert insights and actionable tips from the GSGROUPS team."
        keywords={["blog", "web design", "digital marketing", "business tips", "design trends"]}
        url="/blog"
      />

      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-24 pb-16 lg:pb-20 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Insights & <span className="text-primary">Inspiration</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Stay ahead of the curve with expert insights on web design, digital marketing, and business growth
              strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search articles..." className="pl-10" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-foreground">Categories:</span>
              <Button variant="outline" size="sm" className="bg-transparent">
                All
              </Button>
              {categories?.slice(0, 4).map((category) => (
                <Button
                  key={category.id}
                  variant="outline"
                  size="sm"
                  className="bg-transparent"
                  style={{ borderColor: category.color, color: category.color }}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Featured Article</h2>
              <p className="text-muted-foreground">Our latest insights and recommendations</p>
            </div>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-[16/10] lg:aspect-auto">
                  <Image
                    src={featuredPost.featured_image || "/placeholder.svg?height=400&width=600"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  {featuredPost.categories && (
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="secondary"
                        style={{
                          backgroundColor: featuredPost.categories.color + "20",
                          color: featuredPost.categories.color,
                        }}
                      >
                        {featuredPost.categories.name}
                      </Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.published_at).toLocaleDateString()}</span>
                      </div>
                      {featuredPost.users && (
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{featuredPost.users.full_name || "GSGROUPS Team"}</span>
                        </div>
                      )}
                      {featuredPost.reading_time && <span>{featuredPost.reading_time} min read</span>}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground leading-tight">
                      <Link href={`/blog/${featuredPost.slug}`} className="hover:text-primary transition-colors">
                        {featuredPost.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{featuredPost.excerpt}</p>
                    <Button asChild className="w-fit">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Latest Articles</h2>
            <p className="text-muted-foreground">Discover insights, tips, and trends</p>
          </div>

          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={post.featured_image || "/placeholder.svg?height=240&width=400"}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    {post.categories && (
                      <div className="absolute top-3 left-3">
                        <Badge
                          variant="secondary"
                          style={{
                            backgroundColor: post.categories.color + "20",
                            color: post.categories.color,
                          }}
                        >
                          {post.categories.name}
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.published_at).toLocaleDateString()}</span>
                        </div>
                        {post.reading_time && <span>{post.reading_time} min read</span>}
                      </div>
                      <h3 className="text-xl font-bold text-foreground leading-tight">
                        <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                      <Button variant="ghost" size="sm" asChild className="p-0 h-auto font-medium">
                        <Link href={`/blog/${post.slug}`}>
                          Read More
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <h3 className="text-xl font-semibold text-foreground mb-2">No articles yet</h3>
                <p className="text-muted-foreground mb-6">
                  We're working on creating amazing content for you. Check back soon!
                </p>
                <Button asChild>
                  <Link href="/contact">Get Notified</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Stay Updated</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get the latest insights and tips delivered straight to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input placeholder="Enter your email" className="flex-1" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
