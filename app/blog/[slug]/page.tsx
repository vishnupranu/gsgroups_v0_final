import { notFound } from "next/navigation"
import { createServerClient } from "@/lib/supabase/server"
import { SEOHead } from "@/components/seo/seo-head"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import { NewsletterSignup } from "@/components/marketing/newsletter-signup"

interface BlogPostPageProps {
  params: { slug: string }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const supabase = createServerClient()

  const { data: post } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", params.slug)
    .eq("status", "published")
    .single()

  if (!post) {
    notFound()
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Organization",
      name: "GSGROUPS",
    },
    publisher: {
      "@type": "Organization",
      name: "GSGROUPS",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/gsgroups-logo.png`,
      },
    },
    datePublished: post.created_at,
    dateModified: post.updated_at,
  }

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        ogImage={post.featured_image}
      />
      <SchemaMarkup data={schemaData} />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <article className="max-w-4xl mx-auto">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-4">{post.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <time dateTime={post.created_at}>{new Date(post.created_at).toLocaleDateString()}</time>
                <span>•</span>
                <span>{post.read_time} min read</span>
              </div>
            </header>

            {post.featured_image && (
              <div className="mb-8">
                <img
                  src={post.featured_image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            )}

            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          <div className="max-w-4xl mx-auto mt-16">
            <NewsletterSignup />
          </div>
        </div>
      </div>
    </>
  )
}
