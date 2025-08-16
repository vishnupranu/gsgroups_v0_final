export default function WebDesignPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Web <span className="text-emerald-600">Design</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Creating stunning, user-friendly websites that captivate audiences and drive conversions.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Modern Web Design Solutions</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our web design services combine aesthetic excellence with functional performance. We create responsive,
                accessible, and SEO-optimized websites that deliver exceptional user experiences.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-muted-foreground">
                  <svg className="w-5 h-5 text-emerald-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Responsive Design for All Devices
                </li>
                <li className="flex items-center text-muted-foreground">
                  <svg className="w-5 h-5 text-emerald-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  SEO-Optimized Architecture
                </li>
                <li className="flex items-center text-muted-foreground">
                  <svg className="w-5 h-5 text-emerald-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fast Loading Performance
                </li>
                <li className="flex items-center text-muted-foreground">
                  <svg className="w-5 h-5 text-emerald-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Accessibility Compliance
                </li>
              </ul>
            </div>
            <div>
              <img src="/modern-web-design-mockup.png" alt="Web design showcase" className="rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Process */}
          <div className="bg-muted/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Our Design Process</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Discovery", desc: "Understanding your goals and requirements" },
                { step: "02", title: "Design", desc: "Creating wireframes and visual concepts" },
                { step: "03", title: "Development", desc: "Building responsive, functional websites" },
                { step: "04", title: "Launch", desc: "Testing, optimization, and deployment" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
