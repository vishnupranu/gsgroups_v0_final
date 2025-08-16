import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: "website" | "article" | "product"
  publishedTime?: string
  modifiedTime?: string
  author?: string
  siteName?: string
  twitterHandle?: string
  noIndex?: boolean
  canonicalUrl?: string
  schemaMarkup?: object
}

export function SEOHead({
  title = "GSGROUPS - Creative Digital Agency",
  description = "We create stunning digital experiences that drive results. Professional web design, branding, and digital marketing services.",
  keywords = ["web design", "digital agency", "branding", "digital marketing", "creative agency"],
  image = "/images/gsgroups-og-image.png",
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  siteName = "GSGROUPS",
  twitterHandle = "@gsgroups",
  noIndex = false,
  canonicalUrl,
  schemaMarkup,
}: SEOHeadProps) {
  const fullTitle = title.includes("GSGROUPS") ? title : `${title} | GSGROUPS`
  const fullUrl = url ? `${process.env.NEXT_PUBLIC_SITE_URL || "https://gsgroups.com"}${url}` : undefined
  const fullImageUrl = image.startsWith("http")
    ? image
    : `${process.env.NEXT_PUBLIC_SITE_URL || "https://gsgroups.com"}${image}`

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      {author && <meta name="author" content={author} />}

      {/* Robots */}
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {fullUrl && !canonicalUrl && <link rel="canonical" href={fullUrl} />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content={siteName} />
      {fullUrl && <meta property="og:url" content={fullUrl} />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#059669" />
      <meta name="msapplication-TileColor" content="#059669" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Schema Markup */}
      {schemaMarkup && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      )}
    </Head>
  )
}
