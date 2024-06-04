import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col lg:flex-row justify-between lg:mb-20">
      <div className="text-center lg:text-left mb-20 lg:mb-0">
        <div className="flex items-center justify-center lg:justify-start gap-2 mb-10">
          <span className="w-20 h-0.5 bg-cyan-700"></span>
          <p className="font-medium text-cyan-700 text-xl">Mark Cornelio</p>
        </div>
        <h1 className="font-bold text-gray-800 text-4xl md:text-6xl xl:text-7xl mb-10">
          Laravel Developer <br /> Tech Enthusiast & <br /> Lifelong Learner
        </h1>
        <p className="font-normal text-gray-500 text-sm md:text-md xl:text-lg mb-10">
          Hi, I&apos;m Mark Cornelio. I&apos;m a Laravel Developer with a decade long of experience.
          <br/> If you are looking for a developer to build robust applciations
          <br/> and explore new technologies, let&apos;s connect and create
          <br/> something amazing together.
        </p>
        <div className="space-y-5 lg:space-x-5 mb-10">
          <a
            href="/Mark%20Cornelio%20-%20Resume.pdf" download
            className="block md:inline px-8 py-3 font-medium bg-cyan-600 text-white text-lg rounded-md hover:bg-cyan-900 transition ease-in-out duration-300"
          >
            Hire me
          </a>
          {/*<a*/}
          {/*  href="#"*/}
          {/*  className="block md:inline px-8 py-3 font-medium text-cyan-600 text-lg border-2 border-cyan-600 rounded-md hover:bg-cyan-900 hover:text-white transition ease-linear duration-300"*/}
          {/*>*/}
          {/*  Read more*/}
          {/*</a>*/}
        </div>
        <hr className="text-gray-500 mb-5" />
        <span className="font-normal text-gray-500 text-sm"></span>
      </div>
      <div className="mx-auto lg:mx-0">
        <Image src={'/profile-picture.jpg'} alt={'Mark Cornelio'} width={400} height={100}/>
      </div>
    </header>
  );
}