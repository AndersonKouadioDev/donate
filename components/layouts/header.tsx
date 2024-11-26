"use client";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { usePathname, useSearchParams } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black mx-auto">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white">
          CHARITY
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {[
            { label: "Accueil", href: "/" },
            { label: "Pourquoi Akum", href: "/#why-akum" },
            { label: "Votre impact", href: "/#your-impact" },
            { label: "Mon histoire avec Akum", href: "/#my-story-with-akum" },
            { label: "Témoignages", href: "/#testimonials" },
            { label: "Contact", href: "/contact_us" },
            { label: "Faire un don", href: "/#donate" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm font-medium text-gray-200 hover:text-white ${
                pathname === item.href ? "text-primary" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#donate"
          className={buttonVariants({ variant: "default", size: "lg" })}
        >
          FAIRE UN DON
        </Link>
      </div>
    </header>
  );
}
