export default function AIMLPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            AI & <span className="text-emerald-600">Machine Learning</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Intelligent solutions that automate processes and unlock insights from your data.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img src="/ai-ml-visualization.png" alt="AI/ML showcase" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">AI-Powered Solutions</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Harness the power of artificial intelligence and machine learning to transform your business operations
                and gain competitive advantages.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Custom AI Model Development",
                  "Natural Language Processing",
                  "Computer Vision Solutions",
                  "Predictive Analytics",
                  "Chatbots & Virtual Assistants",
                  "Data Science & Analytics",
                ].map((service, index) => (
                  <div key={index} className="flex items-center text-muted-foreground">
                    <svg
                      className="w-5 h-5 text-emerald-600 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
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
