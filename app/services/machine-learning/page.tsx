import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, CheckCircle, TrendingUp, Target, Shield, Zap } from "lucide-react"

const capabilities = [
  {
    title: "Predictive Analytics",
    description:
      "Forecast trends, demand, and outcomes with advanced statistical models and machine learning algorithms.",
    icon: TrendingUp,
    benefits: ["Demand Forecasting", "Risk Assessment", "Trend Analysis", "Performance Prediction"],
  },
  {
    title: "Classification & Clustering",
    description: "Automatically categorize data and discover hidden patterns in your business information.",
    icon: Target,
    benefits: ["Customer Segmentation", "Anomaly Detection", "Content Classification", "Pattern Recognition"],
  },
  {
    title: "Real-time Analytics",
    description: "Process and analyze streaming data for immediate insights and automated decision-making.",
    icon: Zap,
    benefits: ["Live Monitoring", "Instant Alerts", "Dynamic Pricing", "Real-time Recommendations"],
  },
  {
    title: "Model Security & Governance",
    description: "Ensure your ML models are secure, compliant, and performing optimally in production.",
    icon: Shield,
    benefits: ["Model Monitoring", "Bias Detection", "Compliance Tracking", "Performance Optimization"],
  },
]

export default function MachineLearningPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Machine Learning & Predictive Analytics
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Unlock the power of your data with advanced machine learning models that predict outcomes, optimize
              processes, and drive intelligent business decisions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="px-8">
                <Link href="/contact">
                  Start ML Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 bg-transparent">
                <Link href="/portfolio">View ML Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Advanced ML Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From predictive modeling to real-time analytics, we build ML solutions that scale with your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{capability.description}</p>
                    <ul className="space-y-2">
                      {capability.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          {benefit}
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

      {/* Process Section */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our ML Development Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures your ML models deliver accurate predictions and business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Data Assessment",
                description: "Analyze your data quality, completeness, and ML readiness",
              },
              {
                step: "02",
                title: "Model Development",
                description: "Build and train custom ML models using advanced algorithms",
              },
              {
                step: "03",
                title: "Validation & Testing",
                description: "Rigorous testing to ensure model accuracy and reliability",
              },
              {
                step: "04",
                title: "Deployment & Monitoring",
                description: "Deploy models to production with continuous monitoring",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mb-4 mx-auto">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{process.title}</h3>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Transform Your Data into Predictions</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to harness the power of machine learning? Let's build predictive models that drive your business
            forward.
          </p>
          <Button asChild size="lg" variant="secondary" className="px-8">
            <Link href="/contact">
              Get ML Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
