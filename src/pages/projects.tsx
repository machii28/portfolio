import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="w-full mx-auto max-w-screen-2xl py-6 px-16">
      <Navbar/>

      <section className="lg:my-20">

        <div className="flex flex-col lg:flex-row justify-between my-16">
          <div className="mx-auto lg:mx-0 p-10 lg:mb-0 mb-5 shadow lg:w-1/2">
            <Image src={'/projects/SurveyGizmo.png'} alt={'SurveyGizmo'} width={700} height={0}/>
          </div>
          <div className="text-center lg:text-left mb-20 lg:mb-0 px-10 lg:w-1/2">
            <h1 className="font-bold text-cyan-600 text-2xl md:text-3xl xl:text-4xl block">
              Laravel Survey Gizmo
            </h1>
            <span className="font-normal inline-block text-cyan-500">PHP Composer Package</span>
            <p className="font-normal text-gray-500 text-sm md:text-md xl:text-lg mt-5 mb-10">
              A PHP Library that wraps the API of SurveyGizmo (now named as Alchemer)
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between my-16">
          <div className="mx-auto lg:mx-0 p-10 lg:mb-0 mb-5 shadow lg:w-1/2">
            <Image src={'/projects/Shopify-client.png'} alt={'Shopify Client'} width={700} height={0}/>
          </div>
          <div className="text-center lg:text-left lg:mb-0 px-10 lg:w-1/2">
            <h1 className="font-bold text-cyan-600 text-2xl md:text-3xl xl:text-4xl block">
              Shopify Client
            </h1>
            <span className="font-normal inline-block text-cyan-500">PHP Composer Package</span>
            <p className="font-normal text-gray-500 text-sm md:text-md xl:text-lg mt-5 mb-10">
              A PHP Library that provides a fluent implementation of Shopify API.
              It&apos;s built on top osiset/Basic-Shopify-API.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between my-16">
          <div className="mx-auto lg:mx-0 p-10 lg:mb-0 mb-5 shadow lg:w-1/2">
            <Link href={'https://pokedex-8hzq-git-main-mark-cornelios-projects-bd6166d2.vercel.app'}>
              <Image src={'/projects/Pokedex.png'} alt={'Shopify Client'} width={700} height={0}/>
            </Link>
          </div>
          <div className="text-center lg:text-left lg:mb-0 px-10 lg:w-1/2">
            <Link href='https://pokedex-8hzq-git-main-mark-cornelios-projects-bd6166d2.vercel.app/#'
                  className="font-bold text-cyan-600 text-2xl md:text-3xl xl:text-4xl block">
              Pokemon App
            </Link>
            <span className="font-normal inline-block text-cyan-500">Mobile App</span>
            <p className="font-normal text-gray-500 text-sm md:text-md xl:text-lg mt-5 mb-10">
              A Pokemon app that is built using React/Next JS. It&apos;s still an ongoing project with
              the vision of implementing a Python backend with an integration of LLM. For building a
              pokemon competitive team
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between my-16">
          <div className="mx-auto lg:mx-0 p-10 lg:mb-0 mb-5 shadow lg:w-1/2">
            <Image src={'/projects/Cyclista.png'} alt={'Shopify Client'} width={700} height={0}/>
          </div>
          <div className="text-center lg:text-left lg:mb-0 px-10 lg:w-1/2">
            <h1 className="font-bold text-cyan-600 text-2xl md:text-3xl xl:text-4xl block">
              Cyclista
            </h1>
            <span className="font-normal inline-block text-cyan-500">Mobile App</span>
            <p className="font-normal text-gray-500 text-sm md:text-md xl:text-lg mt-5 mb-10">
              A Bike app that&apos;s built using Vue and Lumen. With an integration of the leaflet JS
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between my-16 sm:my-0">
          <div className="mx-auto lg:mx-0 p-10 lg:mb-0 mb-5 shadow lg:w-1/2">
            <Image src={'/projects/Daparoo.png'} alt={'Shopify Client'} width={700} height={0}/>
          </div>
          <div className="text-center lg:text-left lg:mb-0 px-10 lg:w-1/2">
            <h1 className="font-bold text-cyan-600 text-2xl md:text-3xl xl:text-4xl block">
              Daparoo
            </h1>
            <span className="font-normal inline-block text-cyan-500">Ecommerce Web App</span>
            <p className="font-normal text-gray-500 text-sm md:text-md xl:text-lg mt-5 mb-10">
              An ecommerce website that is built using Laravel and Vue JS.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between my-16">
          <div className="mx-auto lg:mx-0 p-10 lg:mb-0 mb-5 shadow lg:w-1/2">
            <Image src={'/projects/LingoChingoo.png'} alt={'Shopify Client'} width={700} height={0}/>
          </div>
          <div className="text-center lg:text-left lg:mb-0 px-10 lg:w-1/2">
            <h1 className="font-bold text-cyan-600 text-2xl md:text-3xl xl:text-4xl block">
              LingoChingoo
            </h1>
            <span className="font-normal inline-block text-cyan-500">Social Networking App</span>
            <p className="font-normal text-gray-500 text-sm md:text-md xl:text-lg mt-5 mb-10">
              A Social Networking Web App that is built using Laravel and Vue JS
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between my-16">
          <div className="mx-auto lg:mx-0 p-10 lg:mb-0 mb-5 shadow lg:w-1/2">
            <Image src={'/projects/TAC.png'} alt={'Shopify Client'} width={700} height={0}/>
          </div>
          <div className="text-center lg:text-left lg:mb-0 px-10 lg:w-1/2">
            <h1 className="font-bold text-cyan-600 text-2xl md:text-3xl xl:text-4xl block">
              Thera Game with Arduino Glove Controller
            </h1>
            <span className="font-normal inline-block text-cyan-500">Unity Game and Arduino Device</span>
            <p className="font-normal text-gray-500 text-sm md:text-md xl:text-lg mt-5 mb-10">
              A Glove controller that enables the user to control a unity game.
            </p>
          </div>
        </div>

      </section>

      <Footer/>
    </main>
  );
}