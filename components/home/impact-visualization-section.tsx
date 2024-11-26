'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Slider } from "@/components/ui/slider"

export function ImpactVisualization() {
  const [donation, setDonation] = useState(50)

  const impactMetrics = [
    { label: 'Repas fournis', value: donation * 2 },
    { label: 'Arbres plantés', value: donation },
    { label: 'Enfants éduqués', value: Math.floor(donation / 10) },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-purple-700 to-secondary text-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">
          VISUALISEZ VOTRE IMPACT
        </h2>
        <div className="max-w-2xl mx-auto">
          <Slider
            value={[donation]}
            onValueChange={(value) => setDonation(value[0])}
            max={100}
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
      </div>
    </section>
  )
}

