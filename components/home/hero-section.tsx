import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-[600px]">
      <div className="absolute inset-0">
        <Image
          src="/images/photos/img_1.jpg"
          alt="Children smiling"
          className="h-full w-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative container h-full flex flex-col gap-8 items-center justify-center text-center text-white">
        <div className="flex flex-col items-center">
          <h1 className="text-8xl font-bold mb-2 font-roboto">FAIRE UN DON</h1>
          <div className="h-1 w-8/12 bg-primary rounded-full"></div>
        </div>
        <p className="text-3xl font-bold">POUR UNE BONNE CAUSE</p>
        <Link href="#donate" className={buttonVariants({ variant: "default", size: "lg" })}>
          FAIRE UN DON
        </Link>
      </div>
    </section>
  );
}
