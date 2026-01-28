"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Users, MessageCircle, LineChart, ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"

const benefits = [
  {
    icon: Sparkles,
    title: "Leading Technology & Tools",
    description: "Cutting-edge AI and automation platforms",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    icon: Users,
    title: "Fully Integrated with Your Team",
    description: "Seamless collaboration and communication",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    icon: MessageCircle,
    title: "Fast & Easy Communication",
    description: "Direct access to your dedicated team",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: LineChart,
    title: "Continuous A/B Testing",
    description: "Data-driven optimization and improvement",
    gradient: "from-cyan-500 to-teal-500",
  },
]

export function BenefitsSection() {
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
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="fade-in-element opacity-0 text-4xl md:text-6xl font-black text-balance">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Why Choose Us?
            </span>
          </h2>
          <p className="fade-in-element opacity-0 text-xl text-muted-foreground text-balance leading-relaxed">
            We make lead generation fun, effective, and stress-free!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={index}
                className="fade-in-element opacity-0 p-6 text-center space-y-4 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            )
          })}
        </div>

        <div className="fade-in-element opacity-0 max-w-4xl mx-auto">
          <Card className="p-12 text-center space-y-6 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-cyan-500/10 border-2 border-purple-300 dark:border-purple-700 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-3xl md:text-4xl font-black text-balance">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Start Getting Booked Appointments in Just 3 Weeks
              </span>
            </h3>
            <p className="text-lg text-muted-foreground text-balance leading-relaxed">
              Schedule a no-commitment call to see if your business could benefit from our result-based services.
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-lg px-8 sm:px-6 py-6 rounded-2xl group shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <span className="text-base sm:text-lg">Get Accurate Pricing & Timeline</span>
              <ArrowRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Button>
          </Card>
        </div>
      </div>

      <style jsx>{`
        .fade-in-element.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .fade-in-element {
          transform: translateY(30px);
        }
      `}</style>
    </section>
  )
}
