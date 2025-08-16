import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ContactForm } from "@/components/marketing/contact-form"
import { SEOHead } from "@/components/seo/seo-head"
import { generateOrganizationSchema } from "@/components/seo/schema-markup"

export default function ContactPage() {
  const organizationSchema = generateOrganizationSchema({
    name: "GSGROUPS",
    url: "https://gsgroups.com",
    logo: "https://gsgroups.com/images/gsgroups-logo.png",
    description: "Creative digital agency specializing in web design, branding, and digital marketing services.",
    address: {
      streetAddress: "123 Business Ave",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10001",
      addressCountry: "US",
    },
    contactPoint: {
      telephone: "+1-555-123-4567",
      contactType: "customer service",
      email: "hello@gsgroups.com",
    },
    sameAs: [
      "https://facebook.com/gsgroups",
      "https://twitter.com/gsgroups",
      "https://instagram.com/gsgroups",
      "https://linkedin.com/company/gsgroups",
    ],
  })

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Contact Us - Get Your Free Consultation"
        description="Ready to transform your digital presence? Contact GSGROUPS for a free consultation. We specialize in web design, branding, and digital marketing."
        keywords={["contact", "consultation", "web design", "digital agency", "quote"]}
        url="/contact"
        schemaMarkup={organizationSchema}
      />

      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-24 pb-16 lg:pb-20 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Let's Build Something <span className="text-primary">Amazing Together</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Ready to transform your digital presence? Get in touch with our team for a free consultation and discover
              how we can help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  )
}
