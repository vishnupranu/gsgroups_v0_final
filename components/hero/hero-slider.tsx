"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    title: "Transform Your Digital Presence",
    subtitle: "Creative Web Solutions",
    description:
      "We craft stunning websites and digital experiences that captivate your audience and drive business growth.",
    image: "/web-design-workspace.png",
    cta: "Start Your Project",
    ctaSecondary: "View Portfolio",
  },
  {
    id: 2,
    title: "Brand Identity That Speaks",
    subtitle: "Strategic Branding",
    description:
      "Build a powerful brand identity that resonates with your target audience and sets you apart from the competition.",
    image: "/branding-studio.png",
    cta: "Build Your Brand",
    ctaSecondary: "Our Process",
  },
  {
    id: 3,
    title: "Mobile Apps That Engage",
    subtitle: "Native & Cross-Platform",
    description:
      "Create intuitive mobile applications that provide seamless user experiences across all devices and platforms.",
    image: "/mobile-app-dev-workspace.png",
    cta: "Develop Your App",
    ctaSecondary: "See Features",
  },
  {
    id: 4,
    title: "AI-Powered Solutions",
    subtitle: "Future-Ready Technology",
    description:
      "Leverage cutting-edge AI and machine learning technologies to automate processes and enhance user experiences.",
    image: "/futuristic-ai-workspace.png",
    cta: "Explore AI Solutions",
    ctaSecondary: "Learn More",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white"
              >
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mb-4 text-lg font-medium text-emerald-400"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mb-6 text-5xl font-bold leading-tight md:text-7xl"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mb-8 max-w-2xl text-xl leading-relaxed text-gray-200"
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-col gap-4 sm:flex-row"
                >
                  <Button size="lg" className="bg-emerald-600 px-8 py-4 text-lg font-semibold hover:bg-emerald-700">
                    {slides[currentSlide].cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 bg-transparent"
                  >
                    {slides[currentSlide].ctaSecondary}
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4">
        {/* Slide Indicators */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-8 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-emerald-500" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
        >
          <Play className={`h-4 w-4 ${isPlaying ? "opacity-50" : "opacity-100"}`} />
        </button>
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/30 md:left-8"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/30 md:right-8"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Counter */}
      <div className="absolute right-8 top-8 z-20 rounded-full bg-white/20 px-4 py-2 text-white backdrop-blur-sm">
        <span className="text-sm font-medium">
          {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  )
}
