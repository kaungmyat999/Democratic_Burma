import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { getArticleBySlug } from "@/app/data/articles"
import { notFound } from "next/navigation"
import { images, getImage } from "@/lib/images"
import Footer from "@/components/footer"

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  // Split content into lines and process
  const contentLines = article.content.split("\n")
  // Skip the first line which is the title
  const contentWithoutTitle = contentLines.slice(1).join("\n")

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-12 lg:py-24 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                {article.title}
              </h1>
              <div className="flex flex-wrap justify-center gap-4 text-gray-500">
                {article.date && (
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                )}
                {article.author && (
                  <div className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content Section */}
      <section className="w-full pt-16 pb-12 md:pb-24 lg:pb-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            {/* Full-width hero image - now with landscape aspect ratio */}
            <div className="w-full mb-12">
              <img
                src={
                  article.slug === "community-workshop"
                    ? "/images/articles/community-workshop-banner.jpg"
                    : getImage(images.articles[article.slug as keyof typeof images.articles], "article") ||
                      "/placeholder.svg"
                }
                alt={
                  article.slug === "community-workshop"
                    ? "Pro-democracy protesters wearing 'WE NEED DEMOCRACY' t-shirts with raised fist symbols, holding multilingual protest signs including 'Justice for Myanmar' and 'Stop Dictatorship'"
                    : article.title
                }
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>

            <div className="prose max-w-none">
              {/* Process content line by line, skipping the title */}
              {contentWithoutTitle.split("\n").map((line, index) => {
                if (line.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-3 mb-2">
                      {line.substring(3)}
                    </h2>
                  )
                } else if (line.startsWith("### ")) {
                  return (
                    <h3 key={index} className="text-xl font-bold mt-3 mb-2">
                      {line.substring(4)}
                    </h3>
                  )
                } else if (line.startsWith("- ")) {
                  return (
                    <li key={index} className="ml-3 mb-1">
                      {line.substring(2)}
                    </li>
                  )
                } else if (line.match(/^\d+\. /)) {
                  return (
                    <li key={index} className="ml-4 mb-1">
                      {line.substring(line.indexOf(" ") + 1)}
                    </li>
                  )
                } else if (line.startsWith("**") && line.endsWith("**")) {
                  return (
                    <p key={index} className="font-bold mb-2">
                      {line.substring(2, line.length - 2)}
                    </p>
                  )
                } else if (line === "") {
                  return <br key={index} />
                } else {
                  return (
                    <p key={index} className="mb-2">
                      {line}
                    </p>
                  )
                }
              })}
            </div>

            <div className="mt-12">
              <Button asChild variant="outline">
                <Link href="/news" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to News
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
