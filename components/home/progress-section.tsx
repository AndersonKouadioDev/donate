import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

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
          <Button className="bg-black text-white hover:bg-black/90">
            FAIRE UN DON
          </Button>
        </div>
      </div>
    </section>
  )
}

