"use client"

import { Card } from "@/components/ui/card"
import { Heart, Sparkles, Users, Camera } from "lucide-react"
import { useEffect, useRef } from "react"

export function AboutSection() {
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
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-pink-50/50 via-purple-50/50 to-cyan-50/50 dark:from-pink-950/10 dark:via-purple-950/10 dark:to-cyan-950/10"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-pink-300/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <div className="fade-in-element opacity-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 text-pink-700 dark:text-pink-300 text-sm font-medium mb-4">
              <Heart className="w-4 h-4" />
              <span>Meet the Team</span>
            </div>
            <h2 className="fade-in-element opacity-0 text-4xl md:text-6xl font-black text-balance">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Work with Us
              </span>
            </h2>
            <p className="fade-in-element opacity-0 text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              We're not your typical stuffy agency. We're a team of fun, dedicated professionals who genuinely love what
              we do!
            </p>
          </div>

          <div className="mb-12">
            <Card className="fade-in-element opacity-0 p-8 md:p-12 border-2 border-purple-200 dark:border-purple-800 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-purple-50/50 dark:from-gray-900 dark:to-purple-950/20">
              <div className="flex flex-col items-center gap-6">
                <div className="w-full max-w-4xl aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 flex items-center justify-center border-2 border-dashed border-purple-300 dark:border-purple-700">
                  <div className="text-center space-y-4 p-8">
                    <Camera className="w-16 h-16 mx-auto text-purple-400" />
                    <div className="space-y-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">Team Photo Goes Here</h3>
                      <p className="text-muted-foreground text-lg">Add your fun team photo to show your personality!</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Team Photo Placeholder 1 */}
            <Card className="fade-in-element opacity-0 p-8 text-center space-y-4 border-2 border-pink-200 dark:border-pink-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white dark:bg-gray-900">
              <div className="w-full aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 flex items-center justify-center border-2 border-dashed border-pink-300 dark:border-pink-700">
                <div className="text-center space-y-2 p-6">
                  <Camera className="w-12 h-12 mx-auto text-pink-400" />
                  <p className="text-sm text-muted-foreground">Your Photo</p>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Team Member Name</h3>
                <p className="text-muted-foreground">Lead Generation Specialist</p>
                <div className="flex items-center justify-center gap-2 text-pink-600 dark:text-pink-400">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">Making magic happen daily</span>
                </div>
              </div>
            </Card>

            {/* Team Photo Placeholder 2 */}
            <Card
              className="fade-in-element opacity-0 p-8 text-center space-y-4 border-2 border-purple-200 dark:border-purple-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white dark:bg-gray-900"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="w-full aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-purple-100 to-cyan-100 dark:from-purple-900/30 dark:to-cyan-900/30 flex items-center justify-center border-2 border-dashed border-purple-300 dark:border-purple-700">
                <div className="text-center space-y-2 p-6">
                  <Camera className="w-12 h-12 mx-auto text-purple-400" />
                  <p className="text-sm text-muted-foreground">Your Photo</p>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Team Member Name</h3>
                <p className="text-muted-foreground">Growth Strategist</p>
                <div className="flex items-center justify-center gap-2 text-purple-600 dark:text-purple-400">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm font-medium">Passionate about your success</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Fun fact card */}
          <Card className="fade-in-element opacity-0 p-8 md:p-12 text-center space-y-4 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-cyan-500/5 border-2 border-purple-200 dark:border-purple-800 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-8 h-8 text-purple-600" />
              <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Why We're Different
              </h3>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              We bring personality, creativity, and genuine care to every client relationship. Working with us means
              getting top-notch results delivered with a smile, quick responses, and a team that actually celebrates
              your wins with you!
            </p>
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
