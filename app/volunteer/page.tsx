"use client"

import Link from "next/link"
import { useState, useTransition } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, Users, Globe, BookOpen, Camera, Code, Megaphone, Calendar, CheckCircle, Loader2 } from "lucide-react"
import Footer from "@/components/footer"

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    interests: [] as string[],
    timeCommitment: "",
    duration: "",
    experience: "",
    languages: "",
    motivation: "",
    additional: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [isPending, startTransition] = useTransition()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("")
    setFieldErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const handleInterestChange = (checked: boolean, interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, interest]
        : prev.interests.filter((i) => i !== interest),
    }))
    setError("")
    setFieldErrors((prev) => ({ ...prev, interests: "" }))
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required"
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required"
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email"
    }

    if (!formData.location.trim()) {
      errors.location = "Location is required"
    }

    if (!formData.motivation.trim()) {
      errors.motivation = "Motivation is required"
    }

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!validateForm()) {
      setError("Please fill in all required fields")
      return
    }

    const formDataObj = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => formDataObj.append(key, item))
      } else {
        formDataObj.append(key, value)
      }
    })

    startTransition(async () => {
      try {
        const response = await fetch("/api/volunteer", {
          method: "POST",
          body: formDataObj,
        })

        const result = await response.json()

        if (response.ok && result.success) {
          setIsSubmitted(true)
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            location: "",
            interests: [],
            timeCommitment: "",
            duration: "",
            experience: "",
            languages: "",
            motivation: "",
            additional: "",
          })
        } else {
          setError(result.error || "Failed to submit application. Please try again.")
        }
      } catch (err) {
        setError("An unexpected error occurred. Please try again.")
      }
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#D30000] text-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <Link
                href="#apply"
                className="inline-flex items-center justify-center px-4 py-2 bg-white text-[#D30000] rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Apply Now
              </Link>
              <Link
                href="#opportunities"
                className="inline-flex items-center justify-center px-4 py-2 border border-white text-white bg-transparent rounded-md font-medium hover:bg-white hover:text-[#D30000] transition-colors"
              >
                View Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 items-center">
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
                  src="/images/programs/volunteers-unity.png"
                  alt="Volunteers showing unity with Myanmar flag wristbands, hands joined together in solidarity"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities Section */}
      <section id="opportunities" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Volunteer Opportunities</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find the perfect way to contribute your skills and passion
              </p>
            </div>
          </div>
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
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
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                {/* Success Message */}
                {isSubmitted && (
                  <div className="animate-in slide-in-from-top-4 duration-500 ease-out mb-6">
                    <div className="rounded-lg bg-green-50 border border-green-200 p-6 text-center space-y-4">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-green-100 p-3">
                          <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-green-800">Application Submitted Successfully!</h3>
                        <p className="text-green-700">
                          Thank you for your interest in volunteering with Democratic Burma. We have received your application and will contact you soon.
                        </p>
                      </div>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="inline-flex items-center justify-center px-4 py-2 border border-green-300 text-green-700 bg-transparent rounded-md font-medium hover:bg-green-50 transition-colors"
                      >
                        Submit Another Application
                      </button>
                    </div>
                  </div>
                )}

                {/* Contact Form */}
                {!isSubmitted && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Personal Information</h3>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                         <Input 
                           id="firstName" 
                           name="firstName" 
                           required 
                           value={formData.firstName}
                           onChange={handleChange}
                           disabled={isPending}
                           className={fieldErrors.firstName ? "border-red-500 focus:ring-red-500" : ""}
                         />
                         {fieldErrors.firstName && (
                           <p className="text-sm text-red-600 mt-1">{fieldErrors.firstName}</p>
                         )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                         <Input 
                           id="lastName" 
                           name="lastName" 
                           required 
                           value={formData.lastName}
                           onChange={handleChange}
                           disabled={isPending}
                           className={fieldErrors.lastName ? "border-red-500 focus:ring-red-500" : ""}
                         />
                         {fieldErrors.lastName && (
                           <p className="text-sm text-red-600 mt-1">{fieldErrors.lastName}</p>
                         )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isPending}
                        className={fieldErrors.email ? "border-red-500 focus:ring-red-500" : ""}
                      />
                      {fieldErrors.email && (
                        <p className="text-sm text-red-600 mt-1">{fieldErrors.email}</p>
                      )}
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          type="tel" 
                          value={formData.phone}
                          onChange={handleChange}
                          disabled={isPending}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location (City, Country) *</Label>
                      <Input 
                        id="location" 
                        name="location" 
                        required 
                        value={formData.location}
                        onChange={handleChange}
                        disabled={isPending}
                        className={fieldErrors.location ? "border-red-500 focus:ring-red-500" : ""}
                      />
                      {fieldErrors.location && (
                        <p className="text-sm text-red-600 mt-1">{fieldErrors.location}</p>
                      )}
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
                            <Checkbox 
                              id={interest}
                              checked={formData.interests.includes(interest)}
                              onCheckedChange={(checked) => handleInterestChange(checked as boolean, interest)}
                              disabled={isPending}
                            />
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
                      <Select value={formData.timeCommitment} onValueChange={(value) => {
                        setFormData(prev => ({ ...prev, timeCommitment: value }))
                        setFieldErrors(prev => ({ ...prev, timeCommitment: "" }))
                      }}>
                        <SelectTrigger className={fieldErrors.timeCommitment ? "border-red-500 focus:ring-red-500" : ""}>
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
                      <Select value={formData.duration} onValueChange={(value) => {
                        setFormData(prev => ({ ...prev, duration: value }))
                        setFieldErrors(prev => ({ ...prev, duration: "" }))
                      }}>
                        <SelectTrigger className={fieldErrors.duration ? "border-red-500 focus:ring-red-500" : ""}>
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
                        value={formData.experience}
                        onChange={handleChange}
                        disabled={isPending}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="languages">Languages you speak (including proficiency level)</Label>
                       <Input
                         id="languages"
                         name="languages"
                         placeholder="e.g., English (native), Burmese (fluent), Thai (conversational)"
                         value={formData.languages}
                         onChange={handleChange}
                         disabled={isPending}
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
                        className={`min-h-[100px] ${fieldErrors.motivation ? "border-red-500 focus:ring-red-500" : ""}`}
                        required
                        value={formData.motivation}
                        onChange={handleChange}
                        disabled={isPending}
                      />
                      {fieldErrors.motivation && (
                        <p className="text-sm text-red-600 mt-1">{fieldErrors.motivation}</p>
                      )}
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
                        value={formData.additional}
                        onChange={handleChange}
                        disabled={isPending}
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

                  {error && (
                    <div className="animate-in slide-in-from-top-2 duration-300 rounded-lg bg-red-50 border border-red-200 p-3">
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-[#D30000] text-white rounded-md font-medium hover:bg-[#B00000] transition-colors disabled:opacity-50"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#D30000] text-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Join our community of dedicated volunteers working for a democratic Burma.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                href="#apply"
                className="inline-flex items-center justify-center px-4 py-2 bg-white text-[#D30000] rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2 border border-white text-white bg-transparent rounded-md font-medium hover:bg-white hover:text-[#D30000] transition-colors"
              >
                Have Questions?
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
