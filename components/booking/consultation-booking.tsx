"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Video, X, CheckCircle, User, Mail, Phone, Building, MessageSquare } from "lucide-react"

interface BookingFormData {
  name: string
  email: string
  phone: string
  company: string
  consultationType: string
  preferredDate: string
  preferredTime: string
  message: string
}

interface ConsultationBookingProps {
  isOpen: boolean
  onClose: () => void
}

const consultationTypes = [
  { value: "ai-strategy", label: "AI Strategy Consultation" },
  { value: "ml-implementation", label: "ML Implementation" },
  { value: "digital-transformation", label: "Digital Transformation" },
  { value: "cloud-architecture", label: "Cloud Architecture" },
  { value: "data-analytics", label: "Data Analytics" },
  { value: "custom-solution", label: "Custom AI Solution" },
]

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
]

export function ConsultationBooking({ isOpen, onClose }: ConsultationBookingProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    consultationType: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [meetingLink, setMeetingLink] = useState("")

  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const generateMeetingLink = () => {
    // In a real app, this would integrate with Google Calendar API
    const meetingId = Math.random().toString(36).substring(2, 15)
    return `https://meet.google.com/${meetingId}`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Generate meeting link
      const link = generateMeetingLink()
      setMeetingLink(link)
      setIsSuccess(true)

      // In a real app, you would:
      // 1. Save booking to database
      // 2. Send confirmation emails
      // 3. Create Google Calendar event
      // 4. Generate actual Google Meet link
    } catch (error) {
      console.error("Booking failed:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      consultationType: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    })
    setIsSuccess(false)
    setMeetingLink("")
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Book AI Consultation</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Schedule a personalized session with our AI experts
                  </p>
                </div>
              </div>
              <Button
                onClick={handleClose}
                variant="ghost"
                size="sm"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>Full Name *</span>
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="bg-gray-50 dark:bg-gray-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>Email Address *</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="bg-gray-50 dark:bg-gray-800"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>Phone Number</span>
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      className="bg-gray-50 dark:bg-gray-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="flex items-center space-x-2">
                      <Building className="w-4 h-4" />
                      <span>Company</span>
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your company name"
                      className="bg-gray-50 dark:bg-gray-800"
                    />
                  </div>
                </div>

                {/* Consultation Details */}
                <div className="space-y-2">
                  <Label htmlFor="consultationType">Consultation Type *</Label>
                  <Select
                    value={formData.consultationType}
                    onValueChange={(value) => handleInputChange("consultationType", value)}
                    required
                  >
                    <SelectTrigger className="bg-gray-50 dark:bg-gray-800">
                      <SelectValue placeholder="Select consultation type" />
                    </SelectTrigger>
                    <SelectContent>
                      {consultationTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate" className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Preferred Date *</span>
                    </Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      required
                      className="bg-gray-50 dark:bg-gray-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredTime" className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>Preferred Time *</span>
                    </Label>
                    <Select
                      value={formData.preferredTime}
                      onValueChange={(value) => handleInputChange("preferredTime", value)}
                      required
                    >
                      <SelectTrigger className="bg-gray-50 dark:bg-gray-800">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>Additional Information</span>
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your project, goals, or any specific questions you have..."
                    rows={4}
                    className="bg-gray-50 dark:bg-gray-800"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Scheduling...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Video className="w-5 h-5" />
                      <span>Schedule Consultation</span>
                    </div>
                  )}
                </Button>
              </form>
            ) : (
              /* Success State */
              <div className="text-center py-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Consultation Scheduled!</h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Your AI consultation has been successfully scheduled. We'll send you a confirmation email with all the
                  details.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Meeting Details</h4>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <p>
                      <strong>Date:</strong> {formData.preferredDate}
                    </p>
                    <p>
                      <strong>Time:</strong> {formData.preferredTime}
                    </p>
                    <p>
                      <strong>Type:</strong>{" "}
                      {consultationTypes.find((t) => t.value === formData.consultationType)?.label}
                    </p>
                  </div>

                  <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded-lg border">
                    <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">Google Meet Link:</p>
                    <div className="flex items-center space-x-2">
                      <code className="flex-1 text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-blue-600 dark:text-blue-400">
                        {meetingLink}
                      </code>
                      <Button onClick={() => navigator.clipboard.writeText(meetingLink)} variant="outline" size="sm">
                        Copy
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => window.open(meetingLink, "_blank")}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    <Video className="w-4 h-4 mr-2" />
                    Join Meeting
                  </Button>
                  <Button onClick={handleClose} variant="outline" className="flex-1 bg-transparent">
                    Close
                  </Button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
