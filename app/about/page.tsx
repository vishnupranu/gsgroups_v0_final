"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedHeroSlider } from "@/components/hero/animated-hero-slider"
import { ConsultationBooking } from "@/components/booking/consultation-booking"
import { AIChatbot } from "@/components/chat/ai-chatbot"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Brain, Award, Zap, Target, Shield } from "lucide-react"

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)

  const handleBookConsultation = () => {
    setIsBookingOpen(true)
  }

  const handleChatExpert = () => {
    setIsChatOpen(true)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <AnimatedHeroSlider onBookConsultation={handleBookConsultation} onChatExpert={handleChatExpert} />

      {/* Company Story Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Our AI Transformation Journey</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded with a vision to democratize artificial intelligence for enterprises, GSGROUPS has been at the
                forefront of AI innovation for over 15 years, delivering 500+ successful AI implementations.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We believe that AI is not just about technology—it's about creating intelligent solutions that solve
                real business problems and drive measurable outcomes for our Fortune 500 clients.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of certified AI engineers, data scientists, and digital transformation experts work
                collaboratively to accelerate innovation and competitive advantage for businesses worldwide.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/about-ai-team.jpg"
                alt="GSGROUPS AI team collaboration"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
            Our AI Leadership Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-border">
              <CardContent className="p-6">
                <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                  <Image src="/ai-innovation-principle.jpg" alt="AI Innovation" fill className="object-cover" />
                </div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">AI Innovation</h3>
                <p className="text-muted-foreground">
                  We pioneer cutting-edge AI technologies and generative solutions that push the boundaries of what's
                  possible.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-border">
              <CardContent className="p-6">
                <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                  <Image src="/business-impact-principle.jpg" alt="Business Impact" fill className="object-cover" />
                </div>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Business Impact</h3>
                <p className="text-muted-foreground">
                  Every AI solution is designed to deliver measurable ROI and competitive advantage for our clients.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-border">
              <CardContent className="p-6">
                <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                  <Image src="/ethical-ai-principle.jpg" alt="Ethical AI" fill className="object-cover" />
                </div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Ethical AI</h3>
                <p className="text-muted-foreground">
                  We build responsible AI systems with enterprise-grade security, compliance, and bias mitigation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Meet Our AI Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry veterans and AI pioneers who combine deep technical expertise with strategic business vision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Chief AI Officer",
                image: "/leader-sarah-chen.jpg",
                expertise: "PhD in Machine Learning, Former Google AI Research",
                achievements: "Led 100+ AI implementations",
              },
              {
                name: "Michael Rodriguez",
                role: "VP of Digital Transformation",
                image: "/leader-michael-rodriguez.jpg",
                expertise: "15+ years enterprise architecture, ex-Microsoft",
                achievements: "Transformed 50+ Fortune 500 companies",
              },
              {
                name: "Dr. Emily Wang",
                role: "Head of Data Science",
                image: "/leader-emily-wang.jpg",
                expertise: "PhD in Statistics, Former Amazon ML Scientist",
                achievements: "Built predictive models saving $100M+",
              },
              {
                name: "David Kim",
                role: "Director of AI Engineering",
                image: "/leader-david-kim.jpg",
                expertise: "ML Engineering at Scale, ex-Tesla Autopilot",
                achievements: "Deployed AI systems serving 10M+ users",
              },
            ].map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-2">{member.expertise}</p>
                  <p className="text-xs text-accent font-medium">{member.achievements}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats Section */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our AI Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Measurable results that demonstrate our commitment to AI excellence and business transformation.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "AI Solutions Delivered", icon: Brain },
              { number: "Fortune 500", label: "Enterprise Clients", icon: Award },
              { number: "15+", label: "Years AI Innovation", icon: Zap },
              { number: "98%", label: "Client Success Rate", icon: Target },
            ].map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm lg:text-base text-muted-foreground">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Work with AI Leaders?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join the Fortune 500 companies who trust our AI expertise to drive their digital transformation initiatives.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="px-8">
              <Link href="/contact">
                Schedule AI Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/careers">Join Our AI Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Booking and Chat Modals */}
      <ConsultationBooking isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      <AIChatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  )
}
