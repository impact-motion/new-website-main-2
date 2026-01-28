"use client"

import { Card } from "@/components/ui/card"
import { Search, Target, Zap, TrendingUp } from "lucide-react"
import { useEffect, useRef } from "react"

const steps = [
  {
    icon: Search,
    title: "We Find Your ICP",
    description:
      "We identify and locate contact information for your ideal customer profile using multiple lead scraping tools and data sources.",
  },
  {
    icon: Target,
    title: "Customized Outreach",
    description: "Automated email campaigns tailored to your needs and your prospects' interests.",
  },
  {
    icon: Zap,
    title: "Real-Time Optimization",
    description: "Continuous A/B testing and optimization to maximize your results.",
  },
  {
    icon: TrendingUp,
    title: "Qualified Appointments",
    description: "We deliver high-quality leads directly to your calendar, ready to convert.",
  },
]

export function ProcessSection() {
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
    <section
      ref={sectionRef}
      id="services"
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
          <h2 className="fade-in-element opacity-0 text-4xl md:text-6xl font-bold text-balance bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground to-foreground/60">
            How We Work
          </h2>
          <p className="fade-in-element opacity-0 text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
            We connect you with relevant businesses through targeted marketing via AI-automated email campaigns,
            customized to your needs. The goal is mutual value and growth for both parties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card
                key={index}
                className="fade-in-element opacity-0 p-8 relative overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border bg-card/50 backdrop-blur-sm"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />

                <div className="relative space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>

                  <div className="space-y-3">
                    <div className="text-xs font-semibold tracking-wider text-primary/80 uppercase">
                      Step {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-balance leading-tight">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{step.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
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
