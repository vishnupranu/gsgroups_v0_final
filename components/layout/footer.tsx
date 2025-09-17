import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin } from "lucide-react"

const services = [
  { name: "Web Design", href: "/services/web-design" },
  { name: "Branding", href: "/services/branding" },
  { name: "Mobile Apps", href: "/services/mobile-apps" },
  { name: "E-commerce", href: "/services/e-commerce" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
]

const company = [
  { name: "About Us", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
]

const legal = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/cookies" },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Image
                  src="/images/gslogo.png"
                  alt="GSGROUPS"
                  width={160}
                  height={36}
                  className="h-8 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-sm text-secondary-foreground/80 mb-6 max-w-sm">
                Leading AI & Digital Transformation company delivering cutting-edge solutions. 500+ AI-powered projects
                for Fortune 500 clients worldwide.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-4 w-4 text-accent" />
                  <span>sales@gsgroups.net</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>Global AI Innovation Hub</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-secondary-foreground mb-4">Services</h3>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-secondary-foreground mb-4">Company</h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold text-secondary-foreground mb-4">Stay Updated</h3>
              <p className="text-sm text-secondary-foreground/80 mb-4">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <form className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/60"
                />
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-secondary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-secondary-foreground/60">
              © {new Date().getFullYear()} GSGROUPS. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-secondary-foreground/60 hover:text-accent transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <Link
                href="https://facebook.com/gsgroups"
                className="text-secondary-foreground/60 hover:text-accent transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/gsgroups"
                className="text-secondary-foreground/60 hover:text-accent transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/gsgroups"
                className="text-secondary-foreground/60 hover:text-accent transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/gsgroups"
                className="text-secondary-foreground/60 hover:text-accent transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
