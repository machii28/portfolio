import Head from "next/head";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Ticker from "@/components/Ticker";
import Stack from "@/components/Stack";
import Services from "@/components/Services";
import SelectedWork from "@/components/SelectedWork";
import Recommendations from "@/components/Recommendations";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mark Cornelio — Laravel Developer</title>
        <meta
          name="description"
          content="Mark Cornelio is a Laravel developer with over ten years of experience building web applications, APIs, and e-commerce systems."
        />
      </Head>
      <Analytics />
      <Navbar />
      <main>
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <Header />
        </div>
        <Ticker />
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <Stack />
          <Services />
          <SelectedWork />
        </div>
        <Recommendations />
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <Footer />
        </div>
      </main>
    </>
  );
}
