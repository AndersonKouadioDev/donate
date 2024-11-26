import Image from 'next/image'

export default function VisionSection() {
  return (
    <section className="py-12 px-4 bg-primary">
      <div className="flex flex-col md:flex-row items-center justify-between container">
      <div className="md:w-1/2">
          <Image 
            src="/images/photos/img_4.jpg" 
            alt="Centre d'apprentissage" 
            width={500} 
            height={300} 
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-4xl font-bold mb-6 text-center uppercase">Imaginez <span className="text-secondary">leur avenir</span> grâce à vous</h2>
          <p className="text-lg">
            Un jour, grâce à votre aide, ces filles entreront dans un centre équipé, apprendront des métiers qui leur permettront de se relever et de bâtir un avenir meilleur. Votre soutien les rendra fières et indépendantes.
          </p>
        </div>
      
      </div>
    </section>
  )
}

