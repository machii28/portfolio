import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedinIn, faFacebook, faGithub} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mb-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center">
          <h1 className="font-medium text-gray-700 text-2xl md:text-5xl mb-5">
            Contact Me
          </h1>

          <p
            className="font-normal text-gray-400 text-sm md:text-lg mb-20"
          >
            I am currently actively seeking new client work and permanent positions.
            Please feel free to contact me for any inquiries.
          </p>

          <div
            className="flex items-center justify-center space-x-4 md:space-x-8"
          >
            <a
              target="_blank"
              href="https://linkedin.com/in/markcornelio"
              className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-cyan-300 transition ease-in-out duration-300"
            >
              <FontAwesomeIcon icon={faLinkedinIn}
                               className="text-gray-500 hover:text-white transition ease-in-out duration-500"/>
            </a>

            <a
              target="_blank"
              href="https://www.facebook.com/28machii"
              className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-cyan-300 transition ease-in-out duration-300"
            >
              <FontAwesomeIcon icon={faFacebook}
                               className="text-gray-500 hover:text-white transition ease-in-out duration-500"/>
            </a>

            <a
              target="_blank"
              href="https://github.com/machii28"
              className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-cyan-300 transition ease-in-out duration-300"
            >
              <FontAwesomeIcon icon={faGithub}
                               className="text-gray-500 hover:text-white transition ease-in-out duration-500"/>
            </a>

            <a
              href="mailto:markcornelio28@gmail.com"
              target="_blank"
              className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-cyan-300 transition ease-in-out duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope}
                               className="text-gray-500 hover:text-white transition ease-in-out duration-500"/>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}