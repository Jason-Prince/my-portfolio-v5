import {
  faBars,
  faCode,
  faEnvelope,
  faLightbulb,
  faMoon,
  faSun,
  faTerminal,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const navLinks = [
  {
    name: "About Me",
    href: "/#aboutme",
    icon: faUser,
  },
  {
    name: "Projects",
    href: "/#projects",
    icon: faCode,
  },
  {
    name: "Contact",
    href: "/#contact",
    icon: faEnvelope,
  },
];

const Header = ({ handleIsDark, handleIsMenuOpen, isMenuOpen, isDark }) => {
  return (
    <div className="grid pt-4 pb-4 bg-gray-100 text-cyan-800 dark:text-gray-400 font-Poppins dark:bg-black">
      <div className="relative grid grid-cols-12 dark:bg-black">
        {/* logo */}
        <Link href="/" passHref>
          <div className="w-[100px] cursor-pointer text-2xl col-start-1 row-start-1 grid grid-flow-col items-center dark:bg-black ">
            <FontAwesomeIcon className="" icon={faTerminal} />
            <p className="col-start-4 whitespace-nowrap">Jason Prince</p>
          </div>
        </Link>
        {/* nav links */}
        <ul
          className={`${
            isMenuOpen ? "right-0 " : "-right-64"
          } absolute pb-4 px-4 grid duration-1000 grid-flow-row col-span-3 md:col-start-8 row-start-1 top-10 md:top-0 md:right-0 gap-4 md:col-end-13 md:grid-flow-col bg-gray-100 dark:bg-black rounded-bl-xl`}
        >
          {navLinks.map(({ name, icon, href }, index) => (
            <Link key={index} href={href} passHref>
              <li className="grid content-center grid-flow-col gap-2 px-2 text-xl duration-500 border-2 border-gray-100 rounded-full cursor-pointer hover:border-cyan-800 dark:border-black dark:hover:border-gray-400">
                <FontAwesomeIcon className="place-self-center" icon={icon} />
                <p className="text-left whitespace-nowrap">{name}</p>
              </li>
            </Link>
          ))}
          <li
            onClick={() => handleIsDark()}
            className="grid content-center grid-flow-col px-2 text-xl duration-500 border-2 border-gray-100 rounded-full cursor-pointer hover:border-cyan-800 dark:border-black dark:hover:border-gray-400"
          >
            <FontAwesomeIcon className="place-self-center" icon={faLightbulb} />
            <p className="px-2 text-left">{isDark ? "Light" : "Dark"}</p>
          </li>
        </ul>

        {/* menu toggle */}
        <div
          onClick={() => handleIsMenuOpen()}
          className="grid grid-cols-1 col-span-2 col-end-13 row-start-1 text-xl rounded-full cursor-pointer justify-self-end md:hidden"
        >
          <div className="col-start-1 row-start-1" />
          <div className="grid">
            <div className="z-10 col-start-1 row-start-1 p-4 border-2 border-gray-100 rounded-full hover:border-cyan-800 dark:border-black dark:hover:border-gray-100" />
            <FontAwesomeIcon
              className="col-start-1 row-start-1 text-2xl duration-300 place-self-center"
              icon={isMenuOpen ? faTimes : faBars}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
