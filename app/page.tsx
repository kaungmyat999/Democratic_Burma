import Link from "next/link"
import { ShieldAlert, Wifi, Users, ChevronRight } from "lucide-react"
import { allArticles } from "@/app/data/articles"
import { images, getImage } from "@/lib/images"
import Footer from "@/components/footer"

export default function Home() {
  // Get the two most recent articles by date
  const latestArticles = allArticles
    .filter((article) => article.date) // Only articles with dates
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort by date descending
    .slice(0, 2) // Get latest 2

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#D30000] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Democratic Burma
              </h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl">
                Working together for a free, democratic, and peaceful Burma
              </p>
            </div>
            <div className="space-x-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-4 py-2 bg-white text-[#D30000] rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Learn More
              </Link>
              <Link
                href="/volunteer"
                className="inline-flex items-center justify-center px-4 py-2 border border-white text-white bg-transparent rounded-md font-medium hover:bg-white hover:text-[#D30000] transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Our Mission</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Advocating for Democracy and Human Rights
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Democratic Burma is dedicated to promoting democratic values, human rights, and the rule of law in
                Burma. We work with communities, organizations, and international partners to build a more inclusive and
                just society.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={getImage(images.general.mission) || "/placeholder.svg"}
                  alt="Pro-democracy protesters in Burma holding signs rejecting military coup and dictatorship"
                  className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas Section with Gradient Background */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-gray-200">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Key Focus Areas</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We work across multiple areas to promote democratic change
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 bg-white shadow-sm">
              <div className="rounded-full bg-[#D30000] p-2 text-white">
                <ShieldAlert className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Human Rights Violations</h3>
              <p className="text-center text-gray-500">
                Documenting abuses, raising awareness, and providing legal support for victims of human rights
                violations.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 bg-white shadow-sm">
              <div className="rounded-full bg-[#D30000] p-2 text-white">
                <Wifi className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Internet & Media Freedom</h3>
              <p className="text-center text-gray-500">
                Advocating for internet freedom, providing censorship circumvention tools, and monitoring digital
                restrictions.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 bg-white shadow-sm">
              <div className="rounded-full bg-[#D30000] p-2 text-white">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Civic Engagement</h3>
              <p className="text-center text-gray-500">
                Supporting community projects and youth initiatives that promote democratic values and civic
                participation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section - Now Dynamic */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2 mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest Updates</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay informed with the latest news and developments in Burma.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-8">
              {latestArticles.map((article) => {
                // Get the appropriate image from our centralized system
                // const articleImage =
                //   images.articles[article.slug as keyof typeof images.articles] || images.placeholders.article

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
                  <div key={article.slug} className="group relative flex flex-col space-y-3 text-left">
                    <div className="relative h-60 w-full overflow-hidden rounded-lg bg-gray-100">
                      <img
                        src={`/images/articles/${article.slug}.jpg`}
                        alt={article.title}
                        className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xl font-bold">{article.title}</h3>
                    <p
                      className="text-gray-500 
"
                    >
                      {firstParagraph.substring(0, 150)}...
                    </p>
                    <Link
                      href={`/news/${article.slug}`}
                      className="inline-flex items-center text-[#D30000] hover:underline"
                    >
                      Read more <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Link
            href="/news"
            className="inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-gray-300 rounded-lg hover:border-[#D30000] hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md group"
          >
            <span className="text-gray-700 group-hover:text-[#D30000] font-medium transition-colors duration-300">
              View All Updates
            </span>
            <ChevronRight className="h-5 w-5 text-gray-600 group-hover:text-[#D30000] group-hover:translate-x-1 transition-all duration-300" />
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#D30000] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Movement</h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Together, we can build a democratic future for Burma. Get involved today.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2 bg-white text-[#D30000] rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/volunteer"
                className="inline-flex items-center justify-center px-4 py-2 border border-white text-white bg-transparent rounded-md font-medium hover:bg-white hover:text-[#D30000] transition-colors"
              >
                Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
