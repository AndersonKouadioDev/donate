'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Slider } from "@/components/ui/slider"
import { Scissors, Home, BookOpen, LucideIcon } from 'lucide-react'

const impactItems = [
  { icon: Scissors, title: "Outils et Ressources", description: "Machines à coudre, ustensiles de cuisine, et plus encore pour leur autonomie." },
  { icon: Home, title: "Espace de Sécurité", description: "Un refuge où elles peuvent apprendre, grandir et se sentir en sécurité." },
  { icon: BookOpen, title: "Formations Professionnelles", description: "Des cours de couture, pâtisserie, et d'autres métiers pour assurer leur avenir." },
]

export function ImpactVisualization() {
  const [donation, setDonation] = useState(50)

  const impactMetrics = [
    { label: 'Repas fournis', value: donation },
    { label: 'Biens matériels fournis', value: donation/50 },
    { label: 'Enfants éduqués', value: Math.floor(donation / 10) },
  ]

  return (
    <section id="your-impact" className="py-24 bg-gradient-to-br from-purple-700 to-secondary text-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">
          VISUALISEZ <span className="text-primary">VOTRE IMPACT</span>
        </h2>
        <div className="max-w-2xl mx-auto">
          <Slider
            value={[donation]}
            onValueChange={(value) => setDonation(value[0])}
            max={1000}
            step={1}
            className="mb-8"
          />
          <p className="text-center mb-8">
            Votre don : {donation} $
          </p>
          <div className="grid grid-cols-3 gap-8">
            {impactMetrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <motion.div
                  className="text-4xl font-bold mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {metric.value}
                </motion.div>
                <p>{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {impactItems.map((item, index) => (
            <ImpactCard key={index} {...item} />
          ))}
        </motion.div>
      </div>
      </div>
    </section>
  )
}



function ImpactCard({ icon: Icon, title, description }: { icon: LucideIcon, title: string, description: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0 }
      }}
      className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md"
    >
      <Icon className="w-12 h-12 text-yellow-400 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

