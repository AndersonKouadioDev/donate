import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="min-h-screen max-w-screen-2xl">
      <Header />
      <main className="mx-auto">{children}</main>
      <Footer />
    </div>
  );
}


