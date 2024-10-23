import { Tooltip } from "react-tooltip";

export default function Languages() {
  return (
    <section className="my-10 text-6xl text-cyan-800 text-center">
      <div className="grid grid-cols-4 gap-4 lg:flex lg:flex-row justify-between lg:mb-20">
        <i data-tooltip-id="php-tooltip" className="devicon-php-plain mb-4 lg:mb-0"></i>
        <Tooltip id="php-tooltip" content="PHP" style={{fontSize: '10px'}}/>
        <i data-tooltip-id="laravel-tooltip" className="devicon-laravel-original mb-4 lg:mb-0"></i>
        <Tooltip id="laravel-tooltip" content="LARAVEL" style={{fontSize: '10px'}}/>
        <i data-tooltip-id="lumen-tooltip" className="devicon-lumen-original mb-4 lg:mb-0"></i>
        <Tooltip id="lumen-tooltip" content="LUMEN" style={{fontSize: '10px'}}/>
        <i data-tooltip-id="js-tooltip" className="devicon-javascript-plain mb-4 lg:mb-0"></i>
        <Tooltip id="js-tooltip" content="JAVASCRIPT" style={{fontSize: '10px'}}/>
        <i data-tooltip-id="react-tooltip" className="devicon-react-original mb-4 lg:mb-0"></i>
        <Tooltip id="react-tooltip" content="REACT" style={{fontSize: '10px'}}/>
        <i data-tooltip-id="vue-tooltip" className="devicon-vuejs-plain mb-4 lg:mb-0"></i>
        <Tooltip id="vue-tooltip" content="VUE" style={{fontSize: '10px'}}/>
        <i data-tooltip-id="angular-tooltip" className="devicon-angularjs-plain mb-4 lg:mb-0"></i>
        <Tooltip id="angular-tooltip" content="ANGULAR" style={{fontSize: '10px'}}/>
        <i data-tooltip-id="livewire-tooltip" className="devicon-livewire-plain-wordmark mb-4 lg:mb-0"></i>
        <Tooltip id="livewire-tooltip" content="LIVEWIRE" style={{fontSize: '10px'}}/>
      </div>
      <div className="grid grid-cols-4 gap-4 lg:flex lg:flex-row justify-between lg:mb-20">
        <i data-tooltip-id="css" className="devicon-css3-plain mb-4 lg:mb-0"></i>
        <Tooltip id="css" content="CSS" style={{fontSize: '10px'}}/>
        <i data-tooltip-id="tailwind-tooltip" className="devicon-tailwindcss-original mb-4 lg:mb-0"></i>
        <Tooltip id="tailwind-tooltip" content="TAILWIND" style={{fontSize: '10px'}}/>
        <i data-tooltip-id="digitalocean-tooltip" className="devicon-digitalocean-original mb-4 lg:mb-0"></i>
        <Tooltip id="digitalocean-tooltip" content="DIGITAL-OCEAN" style={{fontSize: '10px'}}/>
        <i data-tooltip-id="arduino-tooltip" className="devicon-arduino-plain mb-4 lg:mb-0"></i>
        <Tooltip id="arduino-tooltip" content="ARDUINO" style={{fontSize: '10px'}}/>
        <i data-tooltip-id="aws-tooltip" className="devicon-amazonwebservices-plain-wordmark mb-4 lg:mb-0"></i>
        <Tooltip id="aws-tooltip" content="AWS" style={{fontSize: '10px'}}/>
        <i data-tooltip-id="git-tooltip" className="devicon-git-plain mb-4 lg:mb-0"></i>
        <Tooltip id="git-tooltip" content="GIT" style={{fontSize: '10px'}}/>
        <i data-tooltip-id="codeigniter-tooltip" className="devicon-codeigniter-plain mb-4 lg:mb-0"></i>
        <Tooltip id="codeigniter-tooltip" content="CODEIGNITER" style={{fontSize: '10px'}}/>
        <i data-tooltip-id="electron-tooltip" className="devicon-electron-original mb-4 lg:mb-0"></i>
        <Tooltip id="electron-tooltip" content="ELECTRON" style={{fontSize: '10px'}}/>
      </div>
      <div className="grid grid-cols-4 gap-4 lg:flex lg:flex-row justify-between lg:mb-20">
        <i data-tooltip-id="docker-tooltip" className="devicon-docker-plain mb-4 lg:mb-0"></i>
        <Tooltip id="docker-tooltip" content="DOCKER" style={{fontSize: '10px'}}/>
        <i data-tooltip-id="jira-tooltip" className="devicon-jira-plain mb-4 lg:mb-0"></i>
        <Tooltip id="jira-tooltip" content="JIRA" style={{fontSize: '10px'}}/>
        <i data-tooltip-id="psql-tooltip" className="devicon-postgresql-plain mb-4 lg:mb-0"></i>
        <Tooltip id="psql-tooltip" content="POSTGRESQL" style={{fontSize: '10px'}}/>
        <i data-tooltip-id="html-tooltip" className="devicon-html5-plain mb-4 lg:mb-0"></i>
        <Tooltip id="html-tooltip" content="HTML" style={{fontSize: '10px'}}/>
        <i data-tooltip-id="mysql-tooltip" className="devicon-mysql-plain mb-4 lg:mb-0"></i>
        <Tooltip id="mysql-tooltip" content="MYSQL" style={{fontSize: '10px'}}/>
        <i data-tooltip-id="nextjs-tooltip" className="devicon-nextjs-plain mb-4 lg:mb-0"></i>
        <Tooltip id="nextjs-tooltip" content="NEXTJS" style={{fontSize: '10px'}}/>
        <i data-tooltip-id="alpinejs-tooltip" className="devicon-alpinejs-original mb-4 lg:mb-0"></i>
        <Tooltip id="alpinejs-tooltip" content="ALPINEJS" style={{fontSize: '10px'}}/>
        <i data-tooltip-id="c++-tooltip" className="devicon-cplusplus-plain mb-4 lg:mb-0"></i>
        <Tooltip id="c++-tooltip" content="C++" style={{fontSize: '10px'}}/>
      </div>
    </section>
  );
}