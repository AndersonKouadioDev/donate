'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: "Sarah L.",
    role: "Bénévole",
    content: "Travailler avec cette association caritative a été une expérience incroyable. L'impact que nous avons sur les gens change véritablement leur vie.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "John D.",
    role: "Donateur",
    content: "Je peux voir en premier personne comment mes dons sont utilisés. Cette organisation est transparente et efficace.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Emily R.",
    role: "Bénéficiaire",
    content: "Le soutien que j'ai reçu de cette association caritative m'a donné de l'espoir et une chance pour un avenir meilleur. Je suis éternellement reconnaissant.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-r from-secondary to-primary">
      <div className="container">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          VOIX DE LA CHANGE
        </h2>
        <div className="relative h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl text-center">
                <Image
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                  width={80}
                  height={80}
                />
                <p className="text-xl italic mb-4">{testimonials[currentIndex].content}</p>
                <p className="font-bold">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

