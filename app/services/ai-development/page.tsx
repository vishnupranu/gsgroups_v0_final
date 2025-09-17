import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Brain, Cpu, Database, Zap, Code, BarChart3 } from "lucide-react"

const features = [
  {
    title: "Custom AI Model Development",
    description: "Build proprietary AI models tailored to your specific business requirements and data.",
    icon: Brain,
  },
  {
    title: "Generative AI Integration",
    description: "Implement GPT, Claude, and other LLMs to automate content creation and decision-making.",
    icon: Zap,
  },
  {
    title: "Computer Vision Solutions",
    description: "Develop image recognition, object detection, and visual analysis systems.",
    icon: Cpu,
  },
  {
    title: "Natural Language Processing",
    description: "Create intelligent chatbots, sentiment analysis, and text processing applications.",
    icon: Code,
  },
  {
    title: "Predictive Analytics",
    description: "Build forecasting models that predict trends, demand, and business outcomes.",
    icon: BarChart3,
  },
  {
    title: "AI Data Pipeline",
    description: "Design robust data infrastructure to feed and train your AI models effectively.",
    icon: Database,
  },
]

const useCases = [
  {
    title: "Intelligent Document Processing",
    description: "Automate document analysis, extraction, and classification with 99% accuracy.",
    results: "Reduced processing time by 85%",
  },
  {
    title: "Personalized Recommendation Engine",
    description: "Deliver hyper-personalized product and content recommendations to users.",
    results: "Increased conversion rates by 40%",
  },
  {
    title: "Fraud Detection System",
    description: "Real-time fraud detection using machine learning and behavioral analysis.",
    results: "Prevented $2M+ in fraudulent transactions",
  },
]

export default function AIDevPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                AI Development & Generative AI Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Transform your business with custom AI solutions that accelerate innovation, optimize operations, and
                create new revenue streams through intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="px-8">
                  <Link href="/contact">
                    Start Your AI Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="px-8 bg-transparent">
                  <Link href="/resources/case-studies">View AI Case Studies</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder-hrg13.png"
                alt="AI Development Solutions"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Comprehensive AI Development Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to deployment, we build AI solutions that solve real business problems and deliver measurable
              ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Real-World AI Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how our AI solutions have transformed businesses across industries with measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="bg-accent/10 rounded-lg p-3">
                    <p className="text-sm font-medium text-accent">{useCase.results}</p>
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Build Your AI Solution?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how AI can transform your business operations and create new opportunities for growth.
          </p>
          <Button asChild size="lg" variant="secondary" className="px-8">
            <Link href="/contact">
              Get Free AI Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
