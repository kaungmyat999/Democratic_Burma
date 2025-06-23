import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, User } from "lucide-react"
import { images, getImage } from "@/lib/images"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                About Democratic Burma
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our story, mission, and vision for a democratic Burma
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Story</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Democratic Burma was founded in 2021 by a group of Burmese expatriates, human rights activists, and
                international supporters committed to promoting democratic change in Burma.
              </p>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Since our founding, we have worked tirelessly to advocate for human rights, democratic reforms, and the
                rule of law in Burma. Our organization has grown to include members from diverse backgrounds, all united
                by a shared vision of a free and democratic Burma.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={getImage(images.general.ourStory) || "/placeholder.svg"}
                  alt="Protest sign reading 'We Don't Accept Military Coup' with hands breaking chains, held against rainbow flag background"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="rounded-lg bg-[#D30000] px-3 py-1 text-sm text-white w-full mb-6">Our Mission</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">What We Do</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-6">
                Democratic Burma works to promote democratic values, human rights, and the rule of law in Burma. We
                engage in advocacy, education, and community building to support the Burmese people's aspirations for a
                democratic society.
              </p>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-[#D30000] flex-shrink-0 mt-0.5" />
                  <span>Advocacy campaigns for democratic reforms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-[#D30000] flex-shrink-0 mt-0.5" />
                  <span>Support for civil society organizations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-[#D30000] flex-shrink-0 mt-0.5" />
                  <span>Educational programs on democratic principles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-[#D30000] flex-shrink-0 mt-0.5" />
                  <span>International awareness campaigns</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="rounded-lg bg-[#D30000] px-3 py-1 text-sm text-white w-full mb-6">Our Vision</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Where We're Going</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-6">
                We envision a Burma where:
              </p>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-[#D30000] flex-shrink-0 mt-0.5" />
                  <span>Democratic institutions are strong and respected</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-[#D30000] flex-shrink-0 mt-0.5" />
                  <span>Human rights are protected for all citizens</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-[#D30000] flex-shrink-0 mt-0.5" />
                  <span>Ethnic and religious diversity is celebrated</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-[#D30000] flex-shrink-0 mt-0.5" />
                  <span>Civil society thrives and citizens actively participate</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-[#D30000] flex-shrink-0 mt-0.5" />
                  <span>Peace and prosperity are shared by all</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the dedicated individuals working to advance our mission
              </p>
            </div>
          </div>

          {/* Founder Message Section */}
          <div className="mx-auto max-w-4xl mt-12 mb-16">
            <div className="bg-gray-50 rounded-xl p-8 md:p-12">
              <div className="grid gap-8 lg:grid-cols-3 lg:gap-12 items-center">
                <div className="flex justify-center lg:justify-start">
                  <div className="relative h-48 w-48 overflow-hidden rounded-full bg-gray-200">
                    <img
                      src={getImage(images.team.aungMin, "team") || "/placeholder.svg"}
                      alt="Kaung Myat - Founder & Executive Director"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="lg:col-span-2 space-y-4 text-center lg:text-left">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">Message from Our Founder</h3>
                    <p className="text-lg font-semibold text-[#D30000]">Kaung Myat</p>
                    <p className="text-lg font-semibold italic text-[#D30000]">Founder, Writer, Software Engineer</p>
                  </div>
                  <blockquote className="text-gray-600 italic text-lg leading-relaxed">
                    "My journey with Democratic Burma began after 2021 Burma coup, born from a deep-seated passion for
                    democracy and human rights in Myanmar. As a minority, an Indian-Burmese who witnessed the struggles
                    of Burmese people and other minorities living in Burma and as a person who even got violated to
                    preserve the fundamental human rights under the oppressive Burma government rule, I felt compelled
                    to act."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-8">
            {[
              { name: "Nwe Nwe Aye", role: "Advocacy Director" },
              { name: "Kyaw Zaw", role: "Programs Manager" },
              { name: "Thin Thin Aung", role: "Communications Director" },
              { name: "Zaw Win", role: "Community Outreach" },
              { name: "May Sabe Phyu", role: "Board Member" },
              { name: "Thant Zin", role: "Research Coordinator" },
            ].map((member, i) => (
              <div key={i} className="flex flex-col items-center space-y-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full bg-gray-100 flex items-center justify-center">
                  <User className="h-16 w-16 text-gray-400" />
                </div>
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#D30000] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Cause</h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Help us build a democratic future for Burma. Get involved today.
              </p>
            </div>
            <div className="space-x-4">
              <Button
                asChild
                className="bg-white text-[#D30000] hover:border-white hover:bg-transparent hover:text-white "
              >
                <Link href="/donate">Support Our Work</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white bg-transparent text-red hover:bg-grey-5100 hover:text-red-100"
              >
                <Link href="/contact">Contact Us</Link>
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
