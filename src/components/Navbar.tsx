import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex-wrap lg:flex items-center justify-between mb-24 xl:mb-48" x-data="{navbarOpen:false}">
      <div className="flex items-center mb-10 lg:mb-0">
        <h1 className="text-cyan-500 font-medium text-lg">
          <Link href="/">Mark Cornelio</Link>
        </h1>
        <button
          className="w-10 h-10 lg:hidden ml-auto flex items-center justify-center text-cyan-600 border border-cyan-600 rounded-md"
          // onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <i data-feather="menu"></i>
        </button>
      </div>
      <ul className="lg:flex flex-col lg:flex-row lg:items-center lg:space-x-20 mb-10 xl:mb-0">
        <li
          className="font-medium text-cyan-500 text-lg hover:text-cyan-200 transition ease-in-out duration-300 mb-5 lg:mb-0">
          <a href="/projects">Projects</a>
        </li>
        {/*<li*/}
        {/*  className="font-medium text-cyan-500 text-lg hover:text-cyan-200 transition ease-in-out duration-300 mb-5 lg:mb-0">*/}
        {/*  <a href="#">Projects</a>*/}
        {/*</li>*/}
        {/*<li*/}
        {/*  className="font-medium text-cyan-500 text-lg hover:text-cyan-200 transition ease-in-out duration-300 mb-5 lg:mb-0">*/}
        {/*  <a href="#">Blog</a>*/}
        {/*</li>*/}
        <li
          className="px-8 py-3 font-medium text-cyan-600 text-lg text-center border-2 border-cyan-600 rounded-md hover:bg-cyan-600 hover:text-white transition ease-linear duration-300">
          <a href="/Mark%20Cornelio%20-%20Resume.pdf" download>Hire me</a>
        </li>
      </ul>
    </nav>
  );
}