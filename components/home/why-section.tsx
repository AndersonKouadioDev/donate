import Image from 'next/image'
import { buttonVariants } from '../ui/button'
import Link from 'next/link'

export default function WhySection() {
  return (
    <section id="why-akum" className="container py-12 px-4 relative">
      <svg className="absolute top-0 left-0 w-full h-full opacity-20" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="blue" />
      </svg>
     <div className="z-[1] relative">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-3/5 max-w-xl mb-6 md:mb-0">
        <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-center uppercase">Pourquoi <span className="text-secondary">Akum</span> a besoin de vous ?</h2>
          <p className="text-lg">
            <span className="font-bold">Akum</span>, un village marqué par <span className="text-red-500 line-through">la guerre</span>, a vu ses filles sombrer dans des défis inimaginables : pauvreté, complications de santé, et perte d&apos;espoir. Mais avec votre aide, nous pouvons leur offrir un nouveau départ.
          </p>
          <div className='mt-4'>
          <Link href="#donate" className={buttonVariants({ variant: "default", size: "lg" })}>
            FAIRE UN DON
          </Link>
          </div>
        </div>
        <div className="md:w-2/5">
          <Image 
            src="/images/community/img_8.jpeg" 
            alt="Jeunes filles d'Akum" 
            width={500} 
            height={300} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
     </div>
    </section>
  )
}

