import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { allArticles } from "@/app/data/articles"
import { images, getImage } from "@/lib/images"
import Footer from "@/components/footer"

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
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

      {/* News Articles Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12">
            {allArticles.map((article) => {
              // Get the appropriate image from our centralized system
              const articleImage =
                images.articles[article.slug as keyof typeof images.articles] || images.placeholders.article

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
                      src={
                        article.slug === "community-workshop"
                          ? "/images/articles/community-workshop-banner.jpg"
                          : getImage(articleImage, "article") || "/placeholder.svg"
                      }
                      alt={
                        article.slug === "community-workshop"
                          ? "Pro-democracy protesters wearing 'WE NEED DEMOCRACY' t-shirts with raised fist symbols, holding multilingual protest signs"
                          : article.title
                      }
                      className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
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
