"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const donationAmounts = [10, 20, 50, 100];

export function DonationForm() {
  const [amount, setAmount] = useState(20);
  const [customAmount, setCustomAmount] = useState("");

  return (
    <section
      id="donate"
      className="container py-24 min-h-screen"
      style={{
        backgroundImage: "url(/images/illustration.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white mx-auto bg-opacity-10 p-8 rounded-lg backdrop-blur-md w-full max-w-lg"
      >
        <h2 className="text-6xl font-edu font-bold text-center mb-12">
          FAIRE UN DON
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
            {donationAmounts.map((amt) => (
              <Button
                key={amt}
                variant={amount === amt ? "default" : "outline"}
                onClick={() => setAmount(amt)}
                className="w-full"
              >
                {amt}€
              </Button>
            ))}
          </div>
          <div className="mb-6">
            <input
              type="number"
              placeholder="Autre montant"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setAmount(parseInt(e.target.value) || 0);
              }}
              className="w-full p-2 bg-transparent border border-secondary rounded text-white placeholder-gray-400"
            />
          </div>
          <Button className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-500">
            Faire un don de {amount}€
          </Button>
          <p className="mt-4 text-sm text-center text-white font-bold">
            100% de votre don va directement au projet
          </p>
      </motion.div>
    </section>
  );
}
