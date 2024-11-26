import { Monitor, Users, Shield, Headphones } from 'lucide-react'
import Image from 'next/image'

const services = [
  { icon: Monitor, title: "MEDIA" },
  { icon: Users, title: "MOBILISATION" },
  { icon: Shield, title: "PROTECTION" },
  { icon: Headphones, title: "SUPPORT" }
]

export function HelpSection() {
  return (
    <section className="bg-primary py-24">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">COMMENT PEUX-TU NOUS AIDER?</h2>
        <div className="mb-12">
          <h3 className="font-bold mb-4">AIDER POUR LA CAUSE</h3>
          <p className="text-black/80 max-w-2xl">
            Trouvez ceux qui ont besoin de votre aide mais n&apos;ont pas de soutiens fidèles. En donnant ce qu&apos;ils peuvent, ils peuvent atteindre notre mission pour mettre fin aux atrocités du terrorisme juif et à son armée rebelle.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="grid grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="text-center">
                <div className="bg-black p-4 rounded-lg inline-block mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold">{service.title}</h4>
              </div>
            ))}
          </div>
          <div className="aspect-video relative bg-black/10 rounded-lg">
            <Image src="/images/photos/img_6.jpg" alt="Help Section" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

