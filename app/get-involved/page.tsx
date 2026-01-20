import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Calendar, DollarSign, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { images, getImage } from "@/lib/images"
import Footer from "@/components/footer"

export default function GetInvolvedPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#D30000] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Get Involved</h1>
              <p className="mx-auto max-w-[700px] md:text-xl">Join our movement for a democratic Burma</p>
            </div>
            <div className="space-x-4">
              <Button asChild className="bg-white text-[#D30000] hover:bg-gray-100">
                <Link href="#volunteer">Volunteer</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-transparent hover:text-white"
              >
                <Link href="#donate">Donate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ways to Get Involved</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                There are many ways you can support our work
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Heart className="h-8 w-8 text-[#D30000]" />
                <div className="grid gap-1">
                  <CardTitle>Volunteer</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Share your skills and time to support our mission. We have opportunities for volunteers with various
                  backgrounds.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant="outline">
                  <Link href="#volunteer">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <DollarSign className="h-8 w-8 text-[#D30000]" />
                <div className="grid gap-1">
                  <CardTitle>Donate</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Your financial support helps us continue our advocacy work, educational programs, and community
                  initiatives.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant="outline">
                  <Link href="#donate">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Calendar className="h-8 w-8 text-[#D30000]" />
                <div className="grid gap-1">
                  <CardTitle>Attend Events</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Join our events, workshops, and fundraisers to connect with others who share our vision for Burma.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant="outline">
                  <Link href="#events">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-[#D30000] px-3 py-1 text-sm text-white">Volunteer</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Join Our Volunteer Team</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our volunteers are the backbone of our organization. We welcome people with diverse skills and
                backgrounds who share our commitment to democracy and human rights in Burma.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Volunteer Opportunities:</h3>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-[#D30000]"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Event planning and coordination
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-[#D30000]"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Social media and communications
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-[#D30000]"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Research and policy analysis
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-[#D30000]"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Translation and interpretation
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-[#D30000]"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Community outreach and education
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild className="bg-[#D30000] hover:bg-[#B00000]">
                  <Link href="/volunteer-form">Apply to Volunteer</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={getImage(images.programs.volunteers) || "/placeholder.svg"}
                  alt="Volunteers at a community event"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={getImage(images.programs.supportWork || images.general.supportWork)}
                  alt="Community workshop"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <div className="inline-block rounded-lg bg-[#D30000] px-3 py-1 text-sm text-white">Donate</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Support Our Work</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Your financial support enables us to continue our advocacy, education, and community-building work.
                Every contribution, no matter the size, makes a difference in our efforts to promote democracy in Burma.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Your Donation Supports:</h3>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-[#D30000]"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Advocacy campaigns for democratic reforms
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-[#D30000]"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Educational workshops and training programs
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-[#D30000]"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Community organizing and grassroots initiatives
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-[#D30000]"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Research and policy development
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild className="bg-[#D30000] hover:bg-[#B00000]">
                  <Link href="/donate">Make a Donation</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/sponsorship">Become a Sponsor</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upcoming Events</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join us at our upcoming events and activities
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-8">
            {[
              {
                title: "Democracy Forum 2023",
                date: "October 15, 2023",
                location: "Washington, DC",
                description:
                  "Annual forum bringing together experts, activists, and policymakers to discuss democratic progress in Burma.",
              },
              {
                title: "Community Workshop Series",
                date: "Monthly, First Saturday",
                location: "Online",
                description: "Monthly workshops on democratic principles, civic engagement, and community organizing.",
              },
              {
                title: "Fundraising Gala",
                date: "December 5, 2023",
                location: "New York City",
                description: "Annual fundraising event to support our programs and initiatives for the coming year.",
              },
              {
                title: "Youth Leadership Camp",
                date: "Summer 2024",
                location: "Thailand",
                description: "Leadership development program for young Burmese activists and community leaders.",
              },
            ].map((event, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-[#D30000]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <MapPin className="h-4 w-4 text-[#D30000]" />
                      <span>{event.location}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">{event.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/events/${i + 1}`}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild>
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Stay Informed</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Subscribe to our newsletter to receive updates on our work, upcoming events, and ways to get involved.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <div className="flex-1">
                  <Input placeholder="Enter your email" type="email" />
                </div>
                <Button className="bg-[#D30000] hover:bg-[#B00000]">Subscribe</Button>
              </div>
              <p className="text-xs text-gray-500">
                By subscribing, you agree to receive emails from Democratic Burma. You can unsubscribe at any time.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={getImage(images.general.newsletter) || "/placeholder.svg"}
                  alt="Newsletter"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
