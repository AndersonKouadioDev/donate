"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { useCinetPay } from "@/hooks/useCinetPay";
import { toast } from "sonner";

const donationAmounts: number[] = [1000, 2000, 5000, 10000]; // en Francs CFA

// Configuration de CinetPay pour le hook
const cinetPayConfig = {
  apikey: "1844015494675035c99a8a15.16817687",
  site_id: "5883679",
  notify_url: "http://mondomaine.com/notify/",
  mode: "PRODUCTION" as "PRODUCTION", // Pour corriger l'erreur de type
};
const minAmount=5;
// Liste des pays, voici quelques exemples, vous pouvez l'étendre ou la charger dynamiquement
const countries = [
  { code: "BJ", name: "Bénin", currency: "XOF" },
  { code: "BF", name: "Burkina Faso", currency: "XOF" },
  { code: "CI", name: "Côte d'Ivoire", currency: "XOF" },
  { code: "GW", name: "Guinée-Bissau", currency: "XOF" },
  { code: "ML", name: "Mali", currency: "XOF" },
  { code: "NE", name: "Niger", currency: "XOF" },
  { code: "SN", name: "Sénégal", currency: "XOF" },
  { code: "TG", name: "Togo", currency: "XOF" },
  { code: "CM", name: "Cameroun", currency: "XAF" },
  { code: "CF", name: "République centrafricaine", currency: "XAF" },
  { code: "TD", name: "Tchad", currency: "XAF" },
  { code: "CG", name: "Congo", currency: "XAF" },
  { code: "GQ", name: "Guinée équatoriale", currency: "XAF" },
  { code: "GA", name: "Gabon", currency: "XAF" },
];

export function DonationForm() {
  const [amount, setAmount] = useState<number>(2000);
  const [country, setCountry] = useState<string>("CI"); // Default to Côte d'Ivoire
  const [customAmount, setCustomAmount] = useState<string>(""); // Pour le montant personnalisé

  // Fonction pour obtenir la devise basée sur le code du pays
  const getCurrency = (countryCode: string) => {
    const countryObject = countries.find(
      (country) => country.code === countryCode,
    );
    return countryObject ? countryObject.currency : "XOF"; // Retourne la devise ou XOF par défaut
  };

  // Utilisation de getCurrency pour obtenir la devise du pays sélectionné
  const currency = getCurrency(country);

  const { initializePayment, loading, error, sdkReady } =
    useCinetPay(cinetPayConfig);

  const handleSubmit = async (e: React.FormEvent) => {
    if (amount < minAmount) return; // Minimum de 500 FCFA
    e.preventDefault();
    try {
      initializePayment({
        amount: amount,
        currency: currency,
        channels: "ALL",
        description: "Donation",
        customer_name: "",
        customer_surname: "", // Si non utilisé, vide
        customer_email: "",
        customer_phone_number: "", // Si non utilisé, vide
        customer_address: "",
        customer_city: "",
        customer_country: country, // Utilisation du pays sélectionné
        customer_state: "",
        customer_zip_code: "",
      });

      console.log(`Don de ${amount} ${currency} soumis avec succès !`);
    } catch (err) {
      console.error("Erreur lors de la soumission du don :", err);
    }
  };

  useEffect(() => {
    if (!loading && !error) {
      if (sdkReady) {
        console.log("CinetPay SDK prêt");
      }
    } else if (error) {
      toast("Erreur", {
        description: error,
      });
    }
  }, [loading, error, sdkReady]);

  return (
    <form onSubmit={handleSubmit}>
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
          <div className="mb-6">
            <Select
              onValueChange={(value: string) => setCountry(value)}
              value={country}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sélectionner un pays" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country.code} value={country.code}>
                    {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {donationAmounts.map((amt) => (
              <Button
                key={amt}
                variant={amount === amt ? "default" : "outline"}
                onClick={() => {
                  setAmount(amt);
                  setCustomAmount(""); // Réinitialiser le montant personnalisé
                }}
                className="w-full"
                type="button"
              >
                {amt} FCFA
              </Button>
            ))}
          </div>
          <div className="mb-6">
            <input
              type="number"
              placeholder={`Montant personnalisé (${currency})`}
              value={customAmount}
              onChange={(e) => {
                const value = e.target.value;
                setCustomAmount(value);
                setAmount(Number(value)); // Mettre à jour amount avec le montant personnalisé
              }}
              min={minAmount}
              className="w-full p-2 bg-transparent border border-secondary rounded placeholder-gray-200"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-500"
            disabled={loading}
          >
            {loading
              ? "Traitement..."
              : `Faire un don de ${amount} ${currency}`}
          </Button>
          <p className="mt-4 text-sm text-center text-white font-bold">
            100% de votre don va directement au projet
          </p>
        </motion.div>
      </section>
    </form>
  );
}
