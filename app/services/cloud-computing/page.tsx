export default function CloudComputingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Cloud <span className="text-emerald-600">Computing</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Scalable cloud infrastructure and services that power modern businesses.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Cloud Infrastructure Solutions</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We help businesses migrate to the cloud and optimize their infrastructure for performance, security, and
                cost-effectiveness.
              </p>
              <div className="space-y-4">
                {[
                  "AWS, Azure & Google Cloud Platform",
                  "Cloud Migration & Optimization",
                  "DevOps & CI/CD Implementation",
                  "Serverless Architecture",
                  "Container Orchestration",
                  "Cloud Security & Compliance",
                ].map((service, index) => (
                  <div key={index} className="flex items-center text-muted-foreground">
                    <svg
                      className="w-5 h-5 text-emerald-600 mr-3"
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
            <div>
              <img src="/cloud-computing-infrastructure.png" alt="Cloud computing showcase" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
