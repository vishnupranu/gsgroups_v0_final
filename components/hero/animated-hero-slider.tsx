"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Calendar,
  MessageCircle,
  TrendingUp,
  Users,
  Target,
  Award,
  BarChart3,
  Lightbulb,
} from "lucide-react"
import Image from "next/image"

interface HeroSlide {
  id: number
  title: string
  subtitle: string
  description: string
  primaryCTA: string
  secondaryCTA: string
  backgroundImage: string
  icon: React.ReactNode
  features: string[]
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Strategic Business Consulting",
    subtitle: "Where Vision Meets Execution",
    description:
      "Transform your business with strategic consulting that drives measurable results. Our expert consultants combine industry knowledge with proven methodologies to accelerate your growth.",
    primaryCTA: "Book Consultation",
    secondaryCTA: "Chat Expert",
    backgroundImage: "/consulting-strategy-hero.jpg",
    icon: <Target className="w-8 h-8" />,
    features: ["Strategic Planning", "Business Growth", "Expert Guidance"],
  },
  {
    id: 2,
    title: "Financial Advisory Excellence",
    subtitle: "Smart Financial Solutions for Growth",
    description:
      "Optimize your financial performance with comprehensive advisory services. From investment strategies to risk management, we help you make informed decisions that drive profitability.",
    primaryCTA: "Book Consultation",
    secondaryCTA: "Chat Expert",
    backgroundImage: "/financial-advisory-hero.jpg",
    icon: <TrendingUp className="w-8 h-8" />,
    features: ["Financial Planning", "Investment Strategy", "Risk Management"],
  },
  {
    id: 3,
    title: "Organizational Development",
    subtitle: "Building High-Performance Teams",
    description:
      "Unlock your team's potential with organizational development solutions that enhance productivity, culture, and performance. Create a workplace where excellence thrives.",
    primaryCTA: "Book Consultation",
    secondaryCTA: "Chat Expert",
    backgroundImage: "/team-development-hero.jpg",
    icon: <Users className="w-8 h-8" />,
    features: ["Team Building", "Leadership Development", "Culture Transformation"],
  },
  {
    id: 4,
    title: "Performance Optimization",
    subtitle: "Maximize Your Business Potential",
    description:
      "Achieve operational excellence through data-driven performance optimization. Our consultants identify opportunities and implement solutions that deliver sustainable results.",
    primaryCTA: "Book Consultation",
    secondaryCTA: "Chat Expert",
    backgroundImage: "/performance-optimization-hero.jpg",
    icon: <BarChart3 className="w-8 h-8" />,
    features: ["Process Improvement", "Performance Analytics", "Operational Excellence"],
  },
]

interface AnimatedHeroSliderProps {
  onBookConsultation: () => void
  onChatExpert: () => void
}

export function AnimatedHeroSlider({ onBookConsultation, onChatExpert }: AnimatedHeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const currentSlideData = heroSlides[currentSlide]

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_50%,transparent_75%)]" />

      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,transparent_24%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_76%,transparent_77%),linear-gradient(rgba(255,255,255,0.05)_24%,transparent_25%,transparent_26%,rgba(255,255,255,0.05)_27%,rgba(255,255,255,0.05)_74%,transparent_75%,transparent_76%,rgba(255,255,255,0.05)_77%)] bg-[size:50px_50px]"
      />

      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.4, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={
              currentSlideData.backgroundImage ||
              "/placeholder.svg?height=800&width=1200&query=professional business consulting office"
            }
            alt={currentSlideData.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-blue-900/70 to-purple-900/85" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -60, rotateY: -15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: 60, rotateY: 15 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-white"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 mb-8 shadow-2xl shadow-blue-500/25"
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    {currentSlideData.icon}
                  </motion.div>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-6 flex items-center"
                >
                  <motion.span
                    animate={{ width: [0, 40, 40] }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="inline-block h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mr-4"
                  />
                  {currentSlideData.subtitle}
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 100 }}
                  className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
                >
                  <motion.span
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="bg-gradient-to-r from-white via-blue-100 via-purple-100 to-white bg-[length:200%_100%] bg-clip-text text-transparent"
                  >
                    {currentSlideData.title}
                  </motion.span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl"
                >
                  {currentSlideData.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="flex flex-wrap gap-4 mb-10"
                >
                  {currentSlideData.features.map((feature, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        delay: 0.8 + index * 0.1,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-white/15 backdrop-blur-md rounded-full text-sm font-medium text-blue-100 border border-white/30 shadow-lg"
                    >
                      <Lightbulb className="w-4 h-4 inline mr-2" />
                      {feature}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-6"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={onBookConsultation}
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white border-0 px-10 py-4 text-lg font-bold shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 rounded-xl"
                    >
                      <Calendar className="w-6 h-6 mr-3" />
                      {currentSlideData.primaryCTA}
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={onChatExpert}
                      variant="outline"
                      size="lg"
                      className="border-2 border-white/40 text-white hover:bg-white/15 backdrop-blur-md px-10 py-4 text-lg font-bold bg-transparent rounded-xl transition-all duration-500 hover:border-white/60"
                    >
                      <MessageCircle className="w-6 h-6 mr-3" />
                      {currentSlideData.secondaryCTA}
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <div className="hidden lg:block relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.7, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.7, rotateY: -90 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="relative"
                >
                  {/* Enhanced floating geometric shapes */}
                  <div className="absolute inset-0">
                    <motion.div
                      animate={{
                        y: [0, -30, 0],
                        rotate: [0, 10, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-3xl backdrop-blur-sm border border-white/20 shadow-2xl"
                    />
                    <motion.div
                      animate={{
                        y: [0, 25, 0],
                        rotate: [0, -8, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 7,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                      className="absolute bottom-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full backdrop-blur-sm border border-white/20 shadow-2xl"
                    />
                    <motion.div
                      animate={{
                        y: [0, -15, 0],
                        x: [0, 15, 0],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 2,
                      }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-2xl backdrop-blur-sm border border-white/20 shadow-2xl"
                    />
                    <motion.div
                      animate={{
                        y: [0, 20, 0],
                        x: [0, -10, 0],
                        rotate: [0, -12, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 3,
                      }}
                      className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-pink-400/30 to-orange-400/30 rounded-xl backdrop-blur-sm border border-white/20 shadow-2xl"
                    />
                    <motion.div
                      animate={{
                        y: [0, -20, 0],
                        rotate: [0, 15, 0],
                      }}
                      transition={{
                        duration: 9,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 4,
                      }}
                      className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-gradient-to-br from-green-400/30 to-teal-400/30 rounded-full backdrop-blur-sm border border-white/20 shadow-2xl"
                    />
                  </div>

                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 3, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute top-1/3 left-1/4 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full backdrop-blur-sm border border-white/20 shadow-2xl"
                  >
                    <Award className="w-8 h-8 text-yellow-300" />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-6 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
          {/* Prev Button */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              onClick={prevSlide}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-full w-10 h-10 p-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* Slide Indicators */}
          <div className="flex space-x-3">
            {heroSlides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? "bg-gradient-to-r from-blue-400 to-purple-400 scale-125 shadow-lg shadow-blue-400/50"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              onClick={nextSlide}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-full w-10 h-10 p-0"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-8 right-8 z-20">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/15 backdrop-blur-md border border-white/30 rounded-full w-12 h-12 p-0"
          >
            <Play className={`w-5 h-5 ${isAutoPlaying ? "animate-pulse text-green-400" : "text-white"}`} />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
