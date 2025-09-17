"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedHeroSlider } from "@/components/hero/animated-hero-slider"
import { ConsultationBooking } from "@/components/booking/consultation-booking"
import { AIChatbot } from "@/components/chat/ai-chatbot"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Zap,
  Brain,
  Cloud,
  Database,
  Cpu,
  Shield,
  BarChart3,
} from "lucide-react"

const services = [
  {
    title: "Custom AI Development",
    description:
      "Build intelligent applications with Generative AI, Machine Learning, and custom AI models tailored to your business needs.",
    icon: Brain,
    features: ["Generative AI Solutions", "Custom ML Models", "AI Integration", "Intelligent Automation"],
  },
  {
    title: "Cloud-Native Solutions",
    description: "Accelerate your digital transformation with scalable cloud infrastructure and DevOps practices.",
    icon: Cloud,
    features: ["Cloud Migration", "DevOps Automation", "Microservices", "Container Orchestration"],
  },
  {
    title: "Data Analytics & BI",
    description:
      "Transform raw data into actionable insights with advanced analytics and business intelligence platforms.",
    icon: BarChart3,
    features: ["Data Engineering", "Predictive Analytics", "Real-time Dashboards", "Data Governance"],
  },
  {
    title: "IoT & Smart Devices",
    description: "Connect and optimize your operations with intelligent IoT solutions and edge computing.",
    icon: Cpu,
    features: ["IoT Development", "Edge Computing", "Smart Sensors", "Device Management"],
  },
  {
    title: "Blockchain Development",
    description: "Build secure, decentralized applications and smart contracts for next-generation business models.",
    icon: Shield,
    features: ["Smart Contracts", "DeFi Solutions", "NFT Platforms", "Blockchain Integration"],
  },
  {
    title: "Generative AI Agents",
    description: "Deploy intelligent AI agents that automate complex workflows and enhance customer experiences.",
    icon: Database,
    features: ["Conversational AI", "Process Automation", "AI Chatbots", "Workflow Optimization"],
  },
]

const stats = [
  { number: "500+", label: "AI-powered solutions delivered" },
  { number: "Fortune 500", label: "clients trust us" },
  { number: "15+", label: "Years of Digital Innovation" },
  { number: "98%", label: "Client Success Rate" },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "HealthTech Innovations",
    content:
      "GSGROUPS transformed our healthcare platform with AI-powered diagnostics. Patient outcomes improved by 40% within 6 months!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    company: "RetailMax Corp",
    content:
      "Their AI-driven supply chain optimization reduced our costs by 30% and improved delivery times significantly.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    company: "FinanceFirst Bank",
    content:
      "The fraud detection AI system they built has prevented millions in losses. Exceptional AI expertise and implementation.",
    rating: 5,
  },
]

const industries = [
  {
    title: "AI in Healthcare",
    description:
      "Revolutionize patient care with diagnostic AI, predictive analytics, and personalized treatment plans.",
    image: "/ai-healthcare.jpg",
  },
  {
    title: "AI in Manufacturing",
    description: "Optimize production with predictive maintenance, quality control AI, and smart factory solutions.",
    image: "/ai-manufacturing.jpg",
  },
  {
    title: "AI in Retail",
    description:
      "Enhance customer experience with personalized recommendations, inventory optimization, and demand forecasting.",
    image: "/ai-retail.jpg",
  },
  {
    title: "AI in BFSI",
    description:
      "Strengthen financial services with fraud detection, risk assessment, and algorithmic trading solutions.",
    image: "/ai-finance.jpg",
  },
]

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)

  const handleBookConsultation = () => {
    setIsBookingOpen(true)
  }

  const handleChatExpert = () => {
    setIsChatOpen(true)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AnimatedHeroSlider onBookConsultation={handleBookConsultation} onChatExpert={handleChatExpert} />

      {/* Brand Snapshot */}
      <div className="text-center text-muted-foreground py-12 lg:py-16 bg-muted/50">
        <p className="text-lg font-medium">
          500+ AI-powered solutions delivered | Trusted by Fortune 500 clients | 15+ Years of Digital Innovation
        </p>
      </div>

      {/* Booking and Chat Modals */}
      <ConsultationBooking isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      <AIChatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Stats Section */}
      <section className="py-12 lg:py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm lg:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              AI & Digital Transformation Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI solutions to accelerate your digital transformation journey and drive measurable business
              outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20"
                >
                  <CardContent className="p-6">
                    <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                      <Image
                        src={`/service-${index + 1}.jpg`}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">AI Solutions Across Industries</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforming businesses across sectors with industry-specific AI solutions and deep domain expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Choose GSGROUPS for AI Transformation?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We combine cutting-edge AI technology with strategic business insights to deliver solutions that not
                only innovate but also drive measurable ROI and competitive advantage.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">AI Expert Team</h3>
                    <p className="text-muted-foreground">
                      Our certified AI engineers and data scientists bring deep expertise in machine learning,
                      generative AI, and enterprise-scale implementations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Proven AI ROI</h3>
                    <p className="text-muted-foreground">
                      We've delivered 500+ AI solutions with measurable business impact, from 40% efficiency gains to
                      millions in cost savings for our Fortune 500 clients.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Rapid AI Deployment</h3>
                    <p className="text-muted-foreground">
                      Our agile AI development methodology ensures fast time-to-market with enterprise-grade security
                      and scalability built-in from day one.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <Image
                  src="/placeholder-597hi.png"
                  alt="AI Technology Innovation"
                  width={400}
                  height={400}
                  className="w-80 h-auto opacity-80 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">AI Transformation Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how leading organizations achieved breakthrough results with our AI solutions and digital
              transformation expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Talk to Our AI Consultants – Start Your Digital Transformation Journey
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Ready to accelerate innovation with AI? Get a free consultation to discover how our AI solutions can
            transform your business operations and drive competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="px-8">
              <Link href="/contact">
                Book Free AI Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/resources/case-studies">View AI Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
