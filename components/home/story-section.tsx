"use client";

import Image from "next/image";
import Motion from "../motion";
import { motion } from "framer-motion";
import { ReactNode } from "react";
export default function StorySection() {
  return (
    <section
      id="my-story-with-akum"
      className="relative bg-primary/5 isolate py-32 mx-auto max-w-screen-2xl"
    >
      <div className="container relative">
        <h2 className="text-4xl font-bold text-center mb-12">
          MON HISTOIRE AVEC <span className="text-secondary">AKUM</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[0.5fr_0.8fr] gap-4 md:gap-8">
          <div className="lg:col-span-1 lg:sticky lg:top-16 self-start">
            <div className="max-w-lg lg:sticky lg:top-0 z-10 p-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-80 w-full rounded-lg overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/photos/img_1.jpg"
                  alt="Village d'Akum"
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            </div>
          </div>
          <div className="lg:justify-self-end w-full max-w-screen-md">
            <div className="grid grid-cols-1 gap-0">
              <StatItem
                titre=""
                description={
                  <>
                    <p>
                      Cette année, pour mon anniversaire 😍, mon cœur se tourne
                      ailleurs. Je ne souhaite pas des cadeaux 🎁 pour moi, mais
                      pour <span className="font-bold">les filles d’Akum</span>{" "}
                      😔 – un petit village oublié dans Bamenda, au Cameroun 🇨🇲,
                      où{" "}
                      <span className="text-red-500 line-through">
                        la guerre
                      </span>{" "}
                      a laissé des blessures profondes sur les foyers, les
                      cœurs, et les rêves.
                    </p>
                    <p>
                      <span className="font-bold">Akum</span> est un lieu de
                      courage et de résilience, mais un lieu aussi terriblement
                      éprouvé. Dans la souffrance de ce conflit,
                      <span className="font-bold">
                        les jeunes filles d’Akum
                      </span>{" "}
                      👭🏾 sont laissées à elles-mêmes, portant les lourdes
                      conséquences d’une réalité que nul enfant ne devrait
                      connaître. Beaucoup sont devenues de jeunes mères, trop
                      d’entre elles souffrent de complications de santé, sans
                      soutien ni espoir d’un avenir meilleur. Ce n’est pas la
                      vie qu’elles méritent, et ce n’est pas un avenir que nous
                      pouvons accepter pour elles.
                    </p>
                  </>
                }
              />
              <StatItem
                titre="Pourquoi cela compte pour moi – et pour nous tous"
                description={
                  <>
                    {" "}
                    <p>
                      Je ne peux pas oublier{" "}
                      <span className="font-bold">Akum</span>, et je crois que
                      personne ne le devrait. Nous ne pouvons pas rebâtir le
                      village en entier ni effacer la douleur, mais nous pouvons
                      accomplir quelque chose d’important : redonner dignité,
                      espoir, et perspectives à ces jeunes filles.
                    </p>
                    <p>
                      À <span className="font-bold">Akum</span>, nous avons déjà
                      un petit centre communautaire, un lieu qui pourrait
                      devenir un véritable refuge d’espoir et d’apprentissage.{" "}
                      <span className="font-bold text-secondary underline underline-offset-4">
                        Avec votre aide, nous pourrons l’équiper avec les
                        outils, les formations et le soutien nécessaires pour
                        offrir un nouveau départ
                      </span>
                      . Imaginez ce centre, vibrant de jeunes femmes apprenant à
                      cuisiner, à coudre, et à maîtriser de nouveaux métiers qui
                      leur permettront de se tenir debout et de se bâtir un
                      avenir.
                    </p>
                  </>
                }
              />
              <StatItem
                titre="Un Appel du Fond du Cœur"
                description={
                  <>
                    <p>
                      Ce n’est pas seulement une campagne; c’est un appel. Une
                      fois, ma sœur m’a dit quelque chose qui me reste en tête :
                      “Je n’ai pas d’argent, mais j’ai où emprunter.” Ce n’était
                      pas à propos d’argent, mais d’amitié, de communauté, de
                      savoir que nous sommes riches car nous nous avons les uns
                      les autres. Aujourd’hui, j’emprunte votre gentillesse et
                      votre compassion pour rendre ce rêve possible.
                    </p>
                    <p>
                      Je ne suis pas riche, mais mes amis me rendent riche. Et
                      je sais qu’ensemble, nous pouvons transformer des vies.
                      Avec chaque don, vous redonnez espoir à une fille, en lui
                      offrant les outils pour écrire une nouvelle histoire,
                      remplie de dignité, de sens et de fierté.
                    </p>
                  </>
                }
              />
              <StatItem
                titre="Aidez-moi à Réaliser Ce Souhait d’Anniversaire"
                description={
                  <>
                    <p>
                      J’imagine le jour où ces filles entreront dans ce centre,
                      voyant tout ce dont elles ont besoin pour repartir. Je
                      rêve de leurs sourires, de leurs rires en apprenant, de
                      leur fierté en maîtrisant de nouvelles compétences. C’est
                      cela que votre don fait naître. C’est bien plus qu’une
                      contribution – c’est une main tendue, une promesse
                      qu’elles ne sont pas seules.
                    </p>
                    <h1 className="text-center text-2xl font-bold text-secondary">
                      Merci de tout cœur de m’aider à rendre ce rêve possible.
                      Ensemble, soyons la raison de leur sourire.
                    </h1>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const StatItem = ({
  titre,
  description,
}: {
  titre: string;
  description: ReactNode | string;
}) => {
  return (
    <Motion variant="verticalSlideIn">
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 py-12 md:py-16">
        <div className="max-w-xl mb-6 md:mb-0">
          <h3 className="text-3xl font-bold">{titre}</h3>
          <div className="text-lg mt-4 space-y-4 text-justify text-gray-800">
            {description}
          </div>
        </div>
      </div>
    </Motion>
  );
};
