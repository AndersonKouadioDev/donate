'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const projects = [
  { id: 1, title: '', image: '/images/community/img_1.jpeg' },
  { id: 2, title: '', image: '/images/community/img_2.jpeg' },
  { id: 3, title: '', image: '/images/community/img_3.jpeg' },
  { id: 4, title: '', image: '/images/community/img_4.jpeg' },
  { id: 5, title: '', image: '/images/community/img_5.jpeg' },
  { id: 6, title: '', image: '/images/community/img_6.jpeg' },
  { id: 7, title: '', image: '/images/community/img_7.jpeg' },
  { id: 8, title: '', image: '/images/community/img_8.jpeg' },
  { id: 9, title: '', image: '/images/community/img_9.jpeg' },
  { id: 10, title: '', image: '/images/community/img_10.jpeg' },
  { id: 11, title: '', image: '/images/community/img_11.jpeg' },
  { id: 12, title: '', image: '/images/community/img_12.jpeg' },
  // { id: 13, title: '', image: '/images/community/img_13.jpeg' },
  { id: 14, title: '', image: '/images/community/img_14.jpeg' },
  { id: 15, title: '', image: '/images/community/img_15.jpeg' },
  { id: 16, title: '', image: '/images/community/img_16.jpeg' },
  { id: 17, title: '', image: '/images/community/img_17.jpeg' },
]

export function InteractiveGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  return (
    <section className="py-24 bg-gray-100">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">
          QUELQUES IMAGES
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video"
            >
              <Image
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                className="w-full h-full object-cover object-top rounded-lg"
                width={600}
                height={400}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                <h3 className="text-xl font-bold">{projects[currentIndex].title}</h3>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevProject}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextProject}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

