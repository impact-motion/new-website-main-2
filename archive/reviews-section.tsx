"use client"

import { Star } from "lucide-react"

const reviews = [
  {
    name: "Sarah Johnson",
    company: "TechFlow Solutions",
    rating: 5,
    text: "Working with Impact Motion has been a game-changer for our lead generation. We've seen a 300% increase in qualified leads within the first two months!",
  },
  {
    name: "Michael Chen",
    company: "CloudScale Inc",
    rating: 5,
    text: "The team at Impact Motion truly understands B2B sales. Their personalized approach and attention to detail resulted in 40+ high-quality appointments per month.",
  },
  {
    name: "Emma Rodriguez",
    company: "DataDrive Analytics",
    rating: 5,
    text: "Best decision we made this year! Their ICP targeting is spot-on, and the quality of leads is exceptional. The team is professional, responsive, and delivers results.",
  },
]

export function ReviewsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span>Client Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">What Our Clients Say</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto text-pretty">
            Don't just take our word for it. Here's what our clients have to say about their experience.
          </p>
        </div>

        {/* Google Reviews */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 hover:border-pink-300 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-slate-700 mb-6 text-pretty leading-relaxed">"{review.text}"</p>

              <div className="pt-4 border-t border-slate-200">
                <div className="font-semibold text-slate-900">{review.name}</div>
                <div className="text-sm text-slate-600">{review.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Google logo and link */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=impact+motion+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <span className="text-sm font-medium">See all reviews on</span>
            <svg className="w-20 h-8" viewBox="0 0 272 92" fill="none">
              <path
                d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.86 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                fill="#EA4335"
              />
              <path
                d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                fill="#FBBC05"
              />
              <path
                d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
                fill="#4285F4"
              />
              <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853" />
              <path
                d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
                fill="#EA4335"
              />
              <path
                d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"
                fill="#4285F4"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
