import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Brain, Cloud, Database, Cpu, Shield, BarChart3, Zap, Code, Cog } from "lucide-react"

const services = [
  {
    title: "AI Development & Generative AI Solutions",
    description:
      "Custom AI models, GPT integration, and intelligent automation solutions that transform business operations.",
    icon: Brain,
    href: "/services/ai-development",
    features: ["Custom AI Models", "Generative AI Integration", "Computer Vision", "NLP Solutions"],
  },
  {
    title: "Machine Learning & Predictive Analytics",
    description: "Advanced ML algorithms and predictive models that forecast trends and optimize decision-making.",
    icon: BarChart3,
    href: "/services/machine-learning",
    features: ["Predictive Modeling", "Real-time Analytics", "Pattern Recognition", "Anomaly Detection"],
  },
  {
    title: "Cloud Services & DevOps",
    description: "Scalable cloud infrastructure and DevOps practices for modern, resilient applications.",
    icon: Cloud,
    href: "/services/cloud-devops",
    features: ["Cloud Migration", "DevOps Automation", "Microservices", "Container Orchestration"],
  },
  {
    title: "Enterprise Data Engineering",
    description: "Build robust data pipelines, lakes, and governance frameworks for enterprise-scale analytics.",
    icon: Database,
    href: "/services/data-engineering",
    features: ["Data Lakes", "ETL Pipelines", "Data Governance", "Real-time Processing"],
  },
  {
    title: "IoT Solutions & Smart Device Integration",
    description: "Connect and optimize operations with intelligent IoT ecosystems and edge computing.",
    icon: Cpu,
    href: "/services/iot-solutions",
    features: ["IoT Development", "Edge Computing", "Smart Sensors", "Device Management"],
  },
  {
    title: "Blockchain Development Services",
    description: "Secure, decentralized applications and smart contracts for next-generation business models.",
    icon: Shield,
    href: "/services/blockchain",
    features: ["Smart Contracts", "DeFi Solutions", "NFT Platforms", "Blockchain Integration"],
  },
  {
    title: "Agentic AI & Intelligent Automation",
    description: "Deploy autonomous AI agents that handle complex workflows and customer interactions.",
    icon: Zap,
    href: "/services/agentic-ai",
    features: ["AI Agents", "Process Automation", "Workflow Optimization", "Intelligent Routing"],
  },
  {
    title: "Software Product Engineering",
    description: "End-to-end product development with modern architectures and scalable solutions.",
    icon: Code,
    href: "/services/software-engineering",
    features: ["Full-stack Development", "API Design", "System Architecture", "Performance Optimization"],
  },
  {
    title: "QA Testing & Continuous Delivery",
    description: "Comprehensive testing strategies and CI/CD pipelines for reliable software delivery.",
    icon: Cog,
    href: "/services/qa-testing",
    features: ["Automated Testing", "CI/CD Pipelines", "Quality Assurance", "Performance Testing"],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              AI & Digital Transformation Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Comprehensive AI solutions and digital transformation services that accelerate innovation, optimize
              operations, and create new revenue streams for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="px-8">
                <Link href="/contact">
                  Get Free AI Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 bg-transparent">
                <Link href="/resources/case-studies">View Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Complete AI & Technology Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From AI development to cloud infrastructure, we provide end-to-end solutions that transform your business.
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
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose GSGROUPS for Your Digital Transformation?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine deep technical expertise with strategic business insights to deliver solutions that drive real
              results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "500+ AI Solutions Delivered",
                description:
                  "Proven track record of successful AI implementations across industries with measurable ROI.",
              },
              {
                title: "Fortune 500 Trusted",
                description:
                  "Leading enterprises trust us with their most critical digital transformation initiatives.",
              },
              {
                title: "15+ Years Innovation",
                description: "Deep expertise in emerging technologies and enterprise-scale solution architecture.",
              },
            ].map((stat, index) => (
              <Card key={index} className="text-center border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{stat.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how our AI and digital transformation services can accelerate your innovation and drive
            competitive advantage.
          </p>
          <Button asChild size="lg" variant="secondary" className="px-8">
            <Link href="/contact">
              Start Your Transformation Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
