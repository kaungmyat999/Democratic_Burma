"use client"

import { useEffect, useRef, useState } from "react"
import { ANIMATION_SEQUENCES } from "@/lib/animations"

interface ScrollAnimationProps {
  children: React.ReactNode
  animation?: string
  delay?: number
  threshold?: number
  useStandardDelay?: boolean
}

export default function ScrollAnimation({ 
  children, 
  animation = "fade-in", 
  delay = 0,
  threshold = 0.1,
  useStandardDelay = false
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, useStandardDelay ? ANIMATION_SEQUENCES.BASE_DELAY : delay)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px"
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay, threshold])

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0"
    
    switch (animation) {
      case "fade-in":
        return "animate-in fade-in duration-1000 ease-out"
      case "slide-up":
        return "animate-in slide-in-from-bottom-8 duration-800 ease-out"
      case "slide-down":
        return "animate-in slide-in-from-top-8 duration-800 ease-out"
      case "slide-left":
        return "animate-in slide-in-from-right-8 duration-800 ease-out"
      case "slide-right":
        return "animate-in slide-in-from-left-8 duration-800 ease-out"
      case "scale-in":
        return "animate-in zoom-in-95 duration-700 ease-out"
      default:
        return "animate-in fade-in duration-1000 ease-out"
    }
  }

  return (
    <div ref={ref} className={`transition-all ${getAnimationClass()}`}>
      {children}
    </div>
  )
}