import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black mx-auto">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white">
          CHARITY
        </Link>
        {/* <nav className="hidden md:flex items-center space-x-6">
          {["Accueil", "À propos de nous", "Pages", "Événements", "Blog", "Fonctionnalités", "Contact", "Faire un don"].map((item) => (
            <Link
              key={item}
              href={item === "Contact" ? "/contact" : `/${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium text-gray-200 hover:text-white"
            >
              {item}
            </Link>
          ))}
        </nav> */}
       <Link href="#donate" className={buttonVariants({ variant: "default", size: "lg" })}>
          FAIRE UN DON
        </Link>
      </div>
    </header>
  )
}

