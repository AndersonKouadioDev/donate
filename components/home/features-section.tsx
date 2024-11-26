import { Gift, GraduationCap, Heart } from "lucide-react";

const features = [
  {
    icon: Gift,
    title: "FAITES UN DON",
    description:
      "Chaque contribution, qu’elle soit petite ou grande, nous aide à offrir un refuge sûr, des formations professionnelles, et un avenir meilleur à des jeunes filles en difficulté. Ensemble, changeons des vies.",
  },
  {
    icon: GraduationCap,
    title: "DONNER UNE BOURSE",
    description:
      "Avec votre aide, nous pouvons financer des formations pratiques, comme la couture ou la pâtisserie, pour permettre aux filles d’Akum de devenir autonomes et fières de leur parcours.",
  },
  {
    icon: Heart,
    title: "SAUVEZ LES ENFANTS",
    description:
      "Votre soutien nous permet de créer un espace sûr où ces jeunes filles peuvent guérir, apprendre et rêver d’un avenir meilleur. Vous êtes leur espoir.",
  },
];

export function FeaturesSection() {
  return (
    <section className="container grid md:grid-cols-3 gap-6 -mt-20 relative z-10">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="bg-primary p-6 rounded-lg flex flex-col lg:flex-row gap-2 items-start space-x-4"
        >
          <div className="flex justify-center items-center p-4 rounded-full bg-white">
            <feature.icon className="h-6 w-6 text-black" />
          </div>
          <div>
            <h3 className="font-bold text-black mb-2">{feature.title}</h3>
            <p className="text-sm text-black/80">{feature.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}