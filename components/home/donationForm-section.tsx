'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function DonationForm() {
  const [amount, setAmount] = useState('')
  const [customAmount, setCustomAmount] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="donate" className="container py-24 min-h-screen" style={{ backgroundImage: 'url(/images/illustration.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h2 className="text-6xl font-edu font-bold text-center mb-12">FAIRE UN DON</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-6">
          <Label>Sélectionner un montant</Label>
          <RadioGroup value={amount} onValueChange={setAmount} className="grid grid-cols-3 gap-4 mt-2">
            {['10', '25', '50', '100', '200','500'].map((value) => (
              <div key={value}>
                <RadioGroupItem value={value} id={`amount-${value}`} className="peer sr-only" />
                <Label
                  htmlFor={`amount-${value}`}
                  className="flex items-center justify-center rounded-md border-2 border-black/70 bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary
                  peer-data-[state=checked]:bg-primary [&:has([data-state=checked])]:bg-primary"
                >
                  ${value}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        <div className="mb-6">
          <Label htmlFor="custom-amount">Montant personnalisé</Label>
          <Input
            id="custom-amount"
            placeholder="Entrer un montant personnalisé"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value)
              setAmount('')
            }}
            className="border-2 border-black/70"
          />
        </div>
        <Button type="submit" className="w-full">Faire un don</Button>
      </form>
    </section>
  )
}

