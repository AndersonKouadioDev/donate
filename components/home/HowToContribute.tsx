import {buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function HowToContribute() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">
        C&apos;est simple d&apos;aider
      </h2>
      <div className="max-w-2xl mx-auto">
        <ol className="list-decimal list-inside space-y-4 mb-8">
          <li>
            Cliquez sur{" "}
            <span className="font-bold">Faire un don maintenant</span>.
          </li>
          <li>Choisissez un montant (10€, 20€, 50€, ou libre).</li>
          <li>Validez votre don et recevez un e-mail de remerciement.</li>
        </ol>
        <div className="text-center">
          <Link
            href="#donate"
            className={buttonVariants({ variant: "default", size: "lg" })}
          >
            Je veux aider maintenant
          </Link>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link href="/contact_us" className="text-blue-600 hover:underline">
          Vous avez des questions ?
        </Link>
      </div>
    </section>
  );
}
