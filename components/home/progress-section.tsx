import { Progress } from "@/components/ui/progress"
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export function ProgressSection() {
  return (
    <section className="container py-24">
      <h2 className="text-3xl font-bold text-center mb-12">
        NOUS SOMMES ARRIVES SI LOIN</h2>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between mb-2 text-sm">
          <span>0$ collectés</span>
          <span>Objectif : 11 000$</span>
        </div>
        <Progress value={33} className="h-3" />
        <div className="mt-4 text-center">
          <Link href="#donate" className={buttonVariants({ variant: "black", size: "lg"})}>
            FAIRE UN DON
          </Link>
        </div>
      </div>
    </section>
  )
}

