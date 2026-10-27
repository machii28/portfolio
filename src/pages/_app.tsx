import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Archivo, Source_Serif_4 } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-archivo",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${archivo.variable} ${sourceSerif.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
