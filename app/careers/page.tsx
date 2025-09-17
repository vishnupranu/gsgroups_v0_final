import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Briefcase, Heart, Zap, Globe, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const jobOpenings = [
  {
    id: 1,
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    experience: "5+ years",
    description:
      "Lead the development of cutting-edge AI solutions and generative AI applications for Fortune 500 clients.",
    skills: ["Python", "TensorFlow", "PyTorch", "Machine Learning", "Deep Learning"],
    image: "/ai-engineer-working-on-neural-networks.jpg",
  },
  {
    id: 2,
    title: "Machine Learning Researcher",
    department: "Research",
    location: "New York / Remote",
    type: "Full-time",
    experience: "PhD preferred",
    description:
      "Drive innovation in ML algorithms and contribute to breakthrough research in artificial intelligence.",
    skills: ["Research", "Statistics", "Python", "R", "Academic Writing"],
    image: "/data-scientist-analyzing-machine-learning-models.jpg",
  },
  {
    id: 3,
    title: "Cloud Solutions Architect",
    department: "Cloud Services",
    location: "Austin / Remote",
    type: "Full-time",
    experience: "4+ years",
    description: "Design and implement scalable cloud infrastructure for AI and data-intensive applications.",
    skills: ["AWS", "Azure", "GCP", "Kubernetes", "DevOps", "Terraform"],
    image: "/cloud-architect-designing-infrastructure.jpg",
  },
  {
    id: 4,
    title: "Product Manager - AI Solutions",
    department: "Product",
    location: "Boston / Hybrid",
    type: "Full-time",
    experience: "3+ years",
    description: "Drive product strategy and roadmap for our AI-powered enterprise solutions.",
    skills: ["Product Strategy", "AI/ML", "Agile", "Stakeholder Management"],
    image: "/product-manager-presenting-ai-strategy.jpg",
  },
]

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness programs",
  },
  {
    icon: Zap,
    title: "Learning & Growth",
    description: "Annual learning budget, conference attendance, and skill development programs",
  },
  {
    icon: Globe,
    title: "Remote-First Culture",
    description: "Work from anywhere with flexible hours and quarterly team retreats",
  },
  {
    icon: Award,
    title: "Competitive Package",
    description: "Top-tier compensation, equity options, and performance bonuses",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Join the AI Revolution
          </h1>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Build the future of artificial intelligence with a team of world-class engineers, researchers, and
            innovators. Shape tomorrow's technology today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-300">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>500+ Team Members</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>25+ Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>Top AI Employer 2024</span>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join GSGROUPS?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-blue-500/20 text-white">
                <CardHeader className="text-center">
                  <benefit.icon className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200 text-sm text-center">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Job Openings */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="bg-white/10 backdrop-blur-sm border-blue-500/20 text-white overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={job.image || "/placeholder.svg"} alt={job.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <Badge variant="secondary" className="bg-blue-600 text-white">
                      {job.type}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-blue-300">
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      <span>{job.department}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{job.experience}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-200 mb-4">{job.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="border-blue-400 text-blue-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border-blue-500/20 text-white">
            <CardContent className="py-12">
              <h3 className="text-2xl font-bold mb-4">Don't See Your Role?</h3>
              <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
                We're always looking for exceptional talent. Send us your resume and let us know how you'd like to
                contribute to the AI revolution.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Link href="mailto:hr@gsgroups.net">Send Your Resume</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
