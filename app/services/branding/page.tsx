export default function BrandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            <span className="text-emerald-600">Branding</span> & Identity
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Building memorable brand identities that resonate with your audience and stand out in the market.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img src="/brand-identity-logos.png" alt="Branding showcase" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Complete Brand Solutions</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                From logo design to comprehensive brand guidelines, we create cohesive brand identities that communicate
                your values and connect with your target audience.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Logo Design",
                  "Brand Guidelines",
                  "Color Palettes",
                  "Typography",
                  "Business Cards",
                  "Letterheads",
                  "Brand Strategy",
                  "Visual Identity",
                ].map((service, index) => (
                  <div key={index} className="flex items-center text-muted-foreground">
                    <svg
                      className="w-4 h-4 text-emerald-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
