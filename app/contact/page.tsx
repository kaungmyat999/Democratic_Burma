"use client"

import type React from "react"
import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, CheckCircle, Loader2 } from "lucide-react"
import Footer from "@/components/footer"
import { sendContactEmail } from "@/app/actions/send-email"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [isPending, startTransition] = useTransition()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("") // Clear error when user starts typing
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const formDataObj = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, value)
    })

    startTransition(async () => {
      try {
        const result = await sendContactEmail(formDataObj)

        if (result.success) {
          setIsSubmitted(true)
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          })
        } else {
          setError(result.error || "Failed to send message. Please try again.")
        }
      } catch (err) {
        setError("An unexpected error occurred. Please try again.")
      }
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Contact Us</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get in touch with our team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get in Touch</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-[#D30000]" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-500">info@democraticburma.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-[#D30000]" />
                  <div>
                    <h3 className="font-bold">Location</h3>
                    <p className="text-gray-500">
                      Washington, DC
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              {/* Success Message */}
              {isSubmitted && (
                <div className="animate-in slide-in-from-top-4 duration-500 ease-out">
                  <div className="rounded-lg bg-green-50 border border-green-200 p-6 text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="rounded-full bg-green-100 p-3">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-green-800">Message Sent Successfully!</h3>
                      <p className="text-green-700">
                        Thank you for reaching out to us. We've received your message and will get back to you within
                        24-48 hours.
                      </p>
                    </div>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-green-300 text-green-700 hover:bg-green-50"
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              )}

              {/* Contact Form */}
              {!isSubmitted && (
                <div className="animate-in slide-in-from-bottom-4 duration-500 ease-out">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          disabled={isPending}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          disabled={isPending}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Subject of your message"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={isPending}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        required
                        className="min-h-[150px]"
                        value={formData.message}
                        onChange={handleChange}
                        disabled={isPending}
                      />
                    </div>

                    {error && (
                      <div className="animate-in slide-in-from-top-2 duration-300 rounded-lg bg-red-50 border border-red-200 p-3">
                        <p className="text-red-700 text-sm">{error}</p>
                      </div>
                    )}

                    <Button type="submit" className="w-full bg-[#D30000] hover:bg-[#B00000]" disabled={isPending}>
                      {isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
