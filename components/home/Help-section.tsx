import { Monitor, Users, Shield, Headphones } from "lucide-react";
import Image from "next/image";
import HeroVideoDialog from "../ui/hero-video-dialog";

const services = [
  {
    icon: Monitor,
    title: "MEDIA",
    description:
      "Partagez nos contenus pour sensibiliser le public et faire connaître la cause des filles d'Akum.",
  },
  {
    icon: Users,
    title: "MOBILISATION",
    description:
      "Rejoignez nos événements, organisez des collectes ou devenez bénévole pour renforcer notre impact.",
  },
  {
    icon: Shield,
    title: "PROTECTION",
    description:
      "Aidez à offrir un environnement sûr et propice au développement des filles d'Akum.",
  },
  {
    icon: Headphones,
    title: "SUPPORT",
    description:
      "Soutenez nos programmes éducatifs et professionnels pour un avenir meilleur.",
  },
];

export function HelpSection() {
  return (
    <section className="bg-primary py-24">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">
          COMMENT PEUX-TU NOUS AIDER?
        </h2>
        <div className="mb-12">
          <h3 className="font-bold mb-4">AIDER POUR LA CAUSE</h3>
          <p className="text-black/80 max-w-2xl">
            Rejoignez notre mission pour transformer la vie des filles
            d&apos;Akum. Votre soutien, quelle que soit sa forme, contribue
            directement à leur offrir un avenir meilleur. Ensemble, nous pouvons
            créer un impact durable et positif dans leur communauté.{" "}
          </p>
        </div>
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div className="grid grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="text-center">
                <div className="bg-black p-4 rounded-lg inline-block mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold">{service.title}</h4>
                <p className="text-black/80 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="aspect-video relative bg-black/10 rounded-lg">
            <HeroVideoDialog
              className="block"
              animationStyle="from-center"
              videoSrc={"/images/videos/video_4_.mp4"}
              thumbnailSrc="/images/community/img_6.jpeg"
              thumbnailAlt="Video"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
