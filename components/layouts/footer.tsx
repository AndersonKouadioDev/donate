'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  const socialIcons = [
    { name: 'Facebook', icon: Facebook, color: '#1877F2' },
    { name: 'Twitter', icon: Twitter, color: '#1DA1F2' },
    { name: 'Instagram', icon: Instagram, color: '#E4405F' },
    { name: 'LinkedIn', icon: Linkedin, color: '#0A66C2' },
    { name: 'Email', icon: Mail, color: '#D44638' },
  ]

  return (
    <footer className="relative py-24 overflow-hidden w-full bg-gray-900 text-white mx-auto">
      <div className="container relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">Rejoignez notre communauté globale</h2>
        <div className="flex justify-center space-x-8 mb-12">
          {socialIcons.map((social) => (
            <motion.a
              key={social.name}
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
              onHoverStart={() => setHoveredIcon(social.name)}
              onHoverEnd={() => setHoveredIcon(null)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon className="h-8 w-8" />
            </motion.a>
          ))}
        </div>
        <div className="text-center">
          <p className="mb-4">&copy; 2024 Votre association. Tous droits réservés.</p>
          <p className="text-sm text-gray-400">
            Transformant les vies, une action de charité à la fois.
          </p>
        </div>
      </div>
      {socialIcons.map((social) => (
        <motion.div
          key={social.name}
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: hoveredIcon === social.name ? 0.1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: `radial-gradient(circle at center, ${social.color} 0%, transparent 70%)`,
          }}
        />
      ))}
    </footer>
  )
}

