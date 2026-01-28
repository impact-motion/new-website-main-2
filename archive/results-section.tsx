"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Sparkles } from "lucide-react"
import { useEffect, useRef } from "react"

const caseStudies = [
  {
    title: "Tech Startup Success",
    description: "Helped a B2B SaaS company scale from 5 to 50 qualified meetings per month.",
    metrics: [
      { label: "Open Rate", value: "+45%", change: "increase" },
      { label: "Response Rate", value: "+58%", change: "increase" },
      { label: "Conversion Rate", value: "+12%", change: "increase" },
    ],
  },
  {
    title: "Enterprise Growth",
    description: "Transformed lead generation for a consulting firm, tripling their pipeline.",
    metrics: [
      { label: "Open Rate", value: "+38%", change: "increase" },
      { label: "Response Rate", value: "+52%", change: "increase" },
      { label: "Opportunity Rate", value: "+8%", change: "increase" },
    ],
  },
]

export function ResultsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".fade-in-element")
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="results" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
          <div className="fade-in-element opacity-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 mb-4">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
              Success Stories
            </span>
          </div>
          <h2 className="fade-in-element opacity-0 text-4xl md:text-6xl font-bold text-balance">
            Add Your Company to Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
              Growth Cases
            </span>
          </h2>
          <p className="fade-in-element opacity-0 text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
            Get more leads, more appointments, more business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="fade-in-element opacity-0 p-10 md:p-12 space-y-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border-2 group bg-card/80 backdrop-blur-sm"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                  <TrendingUp className="w-4 h-4 text-primary" strokeWidth={2} />
                  <span className="text-sm font-semibold text-primary">Case Study</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-balance leading-tight">{study.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">{study.description}</p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/50">
                {study.metrics.map((metric, idx) => (
                  <div key={idx} className="space-y-2 text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary to-secondary group-hover:scale-110 transition-transform duration-300">
                      {metric.value}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <style jsx>{`
        .fade-in-element.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .fade-in-element {
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
      `}</style>
    </section>
  )
}
