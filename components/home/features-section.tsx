import { Gift, GraduationCap, Heart } from "lucide-react";

const features = [
  {
    icon: Gift,
    title: "FAITES UN DON",
    description:
      "Vestibulum mollis convallis laceret. Sed vestibulum lacus non.",
  },
  {
    icon: GraduationCap,
    title: "DONNER UNE BOURSE",
    description:
      "Vestibulum mollis convallis laceret. Sed vestibulum lacus non.",
  },
  {
    icon: Heart,
    title: "SAUVEZ LES ENFANTS",
    description:
      "Vestibulum mollis convallis laceret. Sed vestibulum lacus non.",
  },
];

export function FeaturesSection() {
  return (
    <section className="container grid md:grid-cols-3 gap-6 -mt-20 relative z-10">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="bg-primary p-6 rounded-lg flex items-start space-x-4"
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