import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Languages from "@/components/Languages";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <main
      className="w-full mx-auto max-w-screen-2xl py-6 px-16"
    >
      <Analytics />
      <Navbar />
      <Header />
      <Languages />
      <Services />
      <Clients />
      <Footer />
    </main>
  );
}
