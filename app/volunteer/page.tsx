import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, Users, Globe, BookOpen, Camera, Code, Megaphone, Calendar } from "lucide-react"
import { images, getImage } from "@/lib/images"
import Footer from "@/components/footer"

export default function VolunteerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#D30000] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Volunteer With Us
              </h1>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Join our mission to build a democratic future for Burma. Your skills and passion can make a real
                difference.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild className="bg-white text-[#D30000] hover:bg-gray-100">
                <Link href="#apply">Apply Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white bg-transparent hover:text-[#D30000] hover:bg-white"
              >
                <Link href="#opportunities">View Opportunities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Why Volunteer</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Make a Meaningful Impact</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                As a volunteer with Democratic Burma, you'll be part of a dedicated community working to promote
                democracy, human rights, and social justice. Your contribution, no matter how big or small, helps create
                lasting change.
              </p>
              <ul className="space-y-3 text-gray-500">
                <li className="flex items-start">
                  <Heart className="mr-3 h-5 w-5 text-[#D30000] flex-shrink-0 mt-0.5" />
                  <span>Contribute to meaningful social change</span>
                </li>
                <li className="flex items-start">
                  <Users className="mr-3 h-5 w-5 text-[#D30000] flex-shrink-0 mt-0.5" />
                  <span>Connect with like-minded individuals</span>
                </li>
                <li className="flex items-start">
                  <Globe className="mr-3 h-5 w-5 text-[#D30000] flex-shrink-0 mt-0.5" />
                  <span>Gain international experience and perspective</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="mr-3 h-5 w-5 text-[#D30000] flex-shrink-0 mt-0.5" />
                  <span>Develop new skills and expertise</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={getImage(images.programs.volunteers) || "/placeholder.svg"}
                  alt="Volunteers working together"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities Section */}
      <section id="opportunities" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Volunteer Opportunities</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find the perfect way to contribute your skills and passion
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {[
              {
                icon: Megaphone,
                title: "Advocacy & Campaigns",
                description: "Help organize campaigns, write advocacy materials, and engage with policymakers.",
                commitment: "5-10 hours/week",
                skills: "Writing, Research, Communication",
              },
              {
                icon: Camera,
                title: "Media & Communications",
                description: "Create content, manage social media, and help tell our story to the world.",
                commitment: "3-8 hours/week",
                skills: "Social Media, Photography, Video Editing",
              },
              {
                icon: Code,
                title: "Technology & Web",
                description: "Maintain our website, develop digital tools, and support our tech infrastructure.",
                commitment: "4-6 hours/week",
                skills: "Web Development, IT Support, Database Management",
              },
              {
                icon: BookOpen,
                title: "Research & Analysis",
                description: "Conduct research on policy issues, analyze data, and prepare reports.",
                commitment: "6-12 hours/week",
                skills: "Research, Data Analysis, Report Writing",
              },
              {
                icon: Users,
                title: "Community Outreach",
                description: "Engage with communities, organize events, and build grassroots support.",
                commitment: "4-8 hours/week",
                skills: "Public Speaking, Event Planning, Networking",
              },
              {
                icon: Calendar,
                title: "Event Planning",
                description: "Organize workshops, fundraisers, and community events.",
                commitment: "Variable",
                skills: "Project Management, Logistics, Coordination",
              },
            ].map((opportunity, i) => (
              <Card key={i} className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="rounded-full bg-[#D30000] p-2 text-white">
                      <opportunity.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-500 text-sm">{opportunity.description}</p>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="font-semibold text-[#D30000]">Time Commitment:</span>
                      <span className="ml-1 text-gray-600">{opportunity.commitment}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#D30000]">Skills:</span>
                      <span className="ml-1 text-gray-600">{opportunity.skills}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section id="apply" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Apply to Volunteer</h2>
              <p className="text-gray-500 md:text-xl/relaxed">
                Ready to make a difference? Fill out the form below and we'll get in touch with you soon.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Volunteer Application</CardTitle>
                <CardDescription>
                  Tell us about yourself and how you'd like to contribute to our mission.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Personal Information</h3>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" name="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" name="lastName" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" name="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" name="phone" type="tel" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location (City, Country) *</Label>
                      <Input id="location" name="location" required />
                    </div>
                  </div>

                  {/* Volunteer Interests */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Volunteer Interests</h3>
                    <div className="space-y-2">
                      <Label htmlFor="interests">Which areas interest you most? (Select all that apply)</Label>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {[
                          "Advocacy & Campaigns",
                          "Media & Communications",
                          "Technology & Web",
                          "Research & Analysis",
                          "Community Outreach",
                          "Event Planning",
                          "Translation",
                          "Fundraising",
                        ].map((interest) => (
                          <div key={interest} className="flex items-center space-x-2">
                            <Checkbox id={interest} />
                            <Label htmlFor={interest} className="text-sm font-normal">
                              {interest}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Availability</h3>
                    <div className="space-y-2">
                      <Label htmlFor="timeCommitment">How much time can you commit per week?</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time commitment" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-3">1-3 hours per week</SelectItem>
                          <SelectItem value="4-6">4-6 hours per week</SelectItem>
                          <SelectItem value="7-10">7-10 hours per week</SelectItem>
                          <SelectItem value="10+">More than 10 hours per week</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">How long would you like to volunteer?</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-3months">1-3 months</SelectItem>
                          <SelectItem value="3-6months">3-6 months</SelectItem>
                          <SelectItem value="6-12months">6-12 months</SelectItem>
                          <SelectItem value="1year+">1 year or more</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Experience and Skills */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Experience & Skills</h3>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Tell us about your relevant experience and skills</Label>
                      <Textarea
                        id="experience"
                        name="experience"
                        placeholder="Describe your background, skills, and any relevant experience..."
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="languages">Languages you speak (including proficiency level)</Label>
                      <Input
                        id="languages"
                        name="languages"
                        placeholder="e.g., English (native), Burmese (fluent), Thai (conversational)"
                      />
                    </div>
                  </div>

                  {/* Motivation */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Motivation</h3>
                    <div className="space-y-2">
                      <Label htmlFor="motivation">Why do you want to volunteer with Democratic Burma? *</Label>
                      <Textarea
                        id="motivation"
                        name="motivation"
                        placeholder="Share your motivation and what you hope to achieve through volunteering..."
                        className="min-h-[100px]"
                        required
                      />
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Additional Information</h3>
                    <div className="space-y-2">
                      <Label htmlFor="additional">Is there anything else you'd like us to know?</Label>
                      <Textarea
                        id="additional"
                        name="additional"
                        placeholder="Any additional information, questions, or special considerations..."
                        className="min-h-[80px]"
                      />
                    </div>
                  </div>

                  {/* Agreement */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="agreement" required />
                      <Label htmlFor="agreement" className="text-sm leading-relaxed">
                        I agree to Democratic Burma's volunteer policies and understand that my application will be
                        reviewed. I consent to being contacted regarding volunteer opportunities. *
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-[#D30000] hover:bg-[#B00000]">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section 
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Volunteer Stories</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our amazing volunteers about their experiences
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {[
              {
                name: "Sarah Chen",
                role: "Communications Volunteer",
                quote:
                  "Volunteering with Democratic Burma has been incredibly rewarding. I've been able to use my marketing skills to help amplify important voices and stories.",
                duration: "2 years",
              },
              {
                name: "Michael Rodriguez",
                role: "Research Volunteer",
                quote:
                  "The research work I do helps inform policy recommendations. It's amazing to see how our collective efforts contribute to meaningful change.",
                duration: "1.5 years",
              },
              {
                name: "Priya Patel",
                role: "Event Planning Volunteer",
                quote:
                  "Organizing community events has connected me with incredible people who share the same passion for human rights and democracy.",
                duration: "3 years",
              },
            ].map((testimonial, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <p className="text-gray-500 italic">"{testimonial.quote}"</p>
                    <div className="border-t pt-4">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                      <p className="text-xs text-[#D30000]">Volunteering for {testimonial.duration}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#D30000] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Join our community of dedicated volunteers working for a democratic Burma.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild className="bg-white text-[#D30000] hover:bg-gray-100">
                <Link href="#apply">Apply Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white bg-transparent hover:text-[#D30000] hover:bg-white"
              >
                <Link href="/contact">Have Questions?</Link>
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
