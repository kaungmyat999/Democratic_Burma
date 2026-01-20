"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Filter, ArrowUpDown } from "lucide-react"
import { allArticles } from "@/app/data/articles"
import Footer from "@/components/footer"

export default function NewsPage() {
  const [filterType, setFilterType] = useState<"all" | "article" | "news">("all")
  const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest")

  // Filter articles by label (instead of type)
  const filteredArticles = allArticles.filter((article) => {
    if (filterType === "all") return true
    // Use the label attribute from article files
    return article.label === filterType
  })

  // Sort articles by date
  const sortedArticles = [...filteredArticles].sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return sortOrder === "latest" ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime()
  })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">News & Blogs</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay informed about our work and developments in Burma
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Sort Controls - Top Right */}
      <div className="container mt-8 px-4 md:px-6">
        <div className="flex justify-end items-center gap-4 mb-8">
          {/* Filter by Label */}
          <div className="relative group">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
              <Filter className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Filter</span>
            </button>
            <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
              <div className="py-2">
                <button
                  onClick={() => setFilterType("all")}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${filterType === "all" ? "bg-red-50 text-[#D30000]" : "text-gray-700"}`}
                >
                  All Content
                </button>
                <button
                  onClick={() => setFilterType("article")}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${filterType === "article" ? "bg-red-50 text-[#D30000]" : "text-gray-700"}`}
                >
                  Articles
                </button>
                <button
                  onClick={() => setFilterType("news")}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${filterType === "news" ? "bg-red-50 text-[#D30000]" : "text-gray-700"}`}
                >
                  News
                </button>
              </div>
            </div>
          </div>

          {/* Sort by Date */}
          <div className="relative group">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
              <ArrowUpDown className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Sort</span>
            </button>
            <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
              <div className="py-2">
                <button
                  onClick={() => setSortOrder("latest")}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${sortOrder === "latest" ? "bg-red-50 text-[#D30000]" : "text-gray-700"}`}
                >
                  Latest First
                </button>
                <button
                  onClick={() => setSortOrder("oldest")}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${sortOrder === "oldest" ? "bg-red-50 text-[#D30000]" : "text-gray-700"}`}
                >
                  Oldest First
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News Articles Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 lg:pt-5 lg:pt-0.5 lg:pt-3">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12">
            {sortedArticles.map((article) => {
              // Extract the first paragraph of content (skipping the title)
              const contentLines = article.content.split("\n")
              let firstParagraph = ""

              // Find the first non-empty paragraph after the title
              for (let i = 1; i < contentLines.length; i++) {
                if (contentLines[i].trim() !== "" && !contentLines[i].startsWith("#")) {
                  firstParagraph = contentLines[i]
                  break
                }
              }

              return (
                <div key={article.slug} className="group relative flex flex-col space-y-2">
                  <div className="relative h-60 w-full overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={`/images/articles/${article.slug}.jpg`}
                      alt={article.title}
                      className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg"
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm text-gray-500">{article.date}</span>
                    <h3 className="text-xl font-bold">{article.title}</h3>
                    <p className="text-gray-500">{firstParagraph.substring(0, 150)}...</p>
                    <Link
                      href={`/news/${article.slug}`}
                      className="inline-flex items-center text-[#D30000] hover:underline"
                    >
                      Read more <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
