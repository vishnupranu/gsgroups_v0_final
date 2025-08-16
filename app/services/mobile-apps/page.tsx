export default function MobileAppsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Mobile <span className="text-emerald-600">Apps</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Native and cross-platform mobile applications that deliver exceptional user experiences.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Mobile App Development</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We develop high-performance mobile applications for iOS and Android platforms, focusing on user
                experience, performance, and scalability.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Native iOS Apps", desc: "Swift-based applications for iPhone and iPad" },
                  { title: "Native Android Apps", desc: "Kotlin/Java applications for Android devices" },
                  { title: "Cross-Platform Apps", desc: "React Native and Flutter solutions" },
                  { title: "App Store Optimization", desc: "Maximizing visibility and downloads" },
                ].map((item, index) => (
                  <div key={index} className="border-l-4 border-emerald-600 pl-4">
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="/placeholder-ncd3d.png" alt="Mobile apps showcase" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
