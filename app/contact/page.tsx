import { ContactForm } from "@/components/marketing/contact-form"
import { SEOHead } from "@/components/seo/seo-head"
import { generateOrganizationSchema } from "@/components/seo/schema-markup"
import { AnimatedHeroSlider } from "@/components/hero/animated-hero-slider"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const organizationSchema = generateOrganizationSchema({
    name: "GSGROUPS",
    url: "https://gsgroups.com",
    logo: "https://gsgroups.com/images/gsgroups-logo.png",
    description:
      "AI & Digital Transformation company specializing in AI development, machine learning, and enterprise solutions.",
    address: {
      streetAddress: "123 Innovation Drive",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94105",
      addressCountry: "US",
    },
    contactPoint: {
      telephone: "+1-555-AI-GROUPS",
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
        title="Contact Us - Get Your Free AI Consultation"
        description="Ready to transform your business with AI? Contact GSGROUPS for a free consultation. We specialize in AI development, machine learning, and digital transformation."
        keywords={["contact", "AI consultation", "machine learning", "digital transformation", "enterprise AI"]}
        url="/contact"
        schemaMarkup={organizationSchema}
      />

      <AnimatedHeroSlider />

      {/* Contact Information Cards */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to connect with our AI experts and start your transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: MapPin,
                title: "Visit Our Office",
                content: "123 Innovation Drive\nSan Francisco, CA 94105",
                action: "Get Directions",
              },
              {
                icon: Phone,
                title: "Call Us",
                content: "+1-555-AI-GROUPS\n(+1-555-244-7687)",
                action: "Call Now",
              },
              {
                icon: Mail,
                title: "Email Us",
                content: "hello@gsgroups.com\nsupport@gsgroups.com",
                action: "Send Email",
              },
              {
                icon: Clock,
                title: "Business Hours",
                content: "Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM",
                action: "Schedule Call",
              },
            ].map((contact, index) => {
              const IconComponent = contact.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{contact.title}</h3>
                    <p className="text-muted-foreground text-sm whitespace-pre-line mb-4">{contact.content}</p>
                    <button className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                      {contact.action}
                    </button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Start Your AI Transformation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell us about your project and we'll get back to you within 24 hours with a customized solution.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Find Us</h2>
            <p className="text-lg text-muted-foreground">Located in the heart of San Francisco's tech district</p>
          </div>
          <div className="relative h-96 bg-muted rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map</h3>
                <p className="text-muted-foreground">123 Innovation Drive, San Francisco, CA 94105</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
