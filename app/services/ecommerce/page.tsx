export default function EcommercePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            <span className="text-emerald-600">E-commerce</span> Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Powerful online stores that drive sales and provide seamless shopping experiences.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img src="/placeholder-upjpm.png" alt="E-commerce showcase" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Complete E-commerce Platforms</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                From small boutiques to large marketplaces, we build scalable e-commerce solutions that maximize
                conversions and provide excellent user experiences.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Custom Shopping Cart Development",
                  "Payment Gateway Integration",
                  "Inventory Management Systems",
                  "Order Processing & Fulfillment",
                  "Multi-vendor Marketplace Solutions",
                  "Mobile Commerce Optimization",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center text-muted-foreground">
                    <svg
                      className="w-5 h-5 text-emerald-600 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
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
