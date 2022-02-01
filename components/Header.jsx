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
    href: "#aboutme",
    icon: faUser,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: faCode,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: faEnvelope,
  },
];

const Header = ({ handleIsDark, handleIsMenuOpen, isMenuOpen, isDark }) => {
  return (
    <div className="grid pt-4 pb-2 text-zinc-900 dark:text-zinc-100 font-Poppins bg-zinc-100 dark:bg-zinc-900">
      <div className="relative grid grid-cols-12 dark:bg-zinc-900">
        {/* logo */}
        <Link href="/" passHref>
          <div className="w-[100px] cursor-pointer text-2xl col-start-1 row-start-1 grid grid-flow-col items-center dark:bg-zinc-900 ">
            <FontAwesomeIcon className="" icon={faTerminal} />
            <p className="col-start-4 whitespace-nowrap">Jason Prince</p>
          </div>
        </Link>
        {/* nav links */}
        <ul
          className={`${
            isMenuOpen ? "right-0" : ""
          } absolute grid grid-flow-row col-span-3 md:col-start-8 row-start-1 -right-40 top-10 md:top-0 md:right-0 gap-4 md:col-end-13 md:grid-flow-col duration-1000 ease-in-out dark:bg-zinc-900 rounded-bl-xl`}
        >
          {navLinks.map(({ name, icon, href }, index) => (
            <Link key={index} href={href} passHref>
              <li className="grid content-center grid-flow-col gap-2 px-2 text-xl duration-500 border-2 rounded-full cursor-pointer hover:border-zinc-900 border-zinc-100 dark:border-zinc-900 dark:hover:border-zinc-100">
                <FontAwesomeIcon className="place-self-center" icon={icon} />
                <p className="text-left whitespace-nowrap">{name}</p>
              </li>
            </Link>
          ))}
          <li
            onClick={() => handleIsDark()}
            className="grid content-center grid-flow-col px-2 text-xl duration-500 border-2 rounded-full cursor-pointer hover:border-zinc-900 border-zinc-100 dark:border-zinc-900 dark:hover:border-zinc-100"
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
          <div className="w-10 h-10 col-start-1 row-start-1" />
          <FontAwesomeIcon
            className="col-start-1 row-start-1 place-self-center"
            icon={isMenuOpen ? faTimes : faBars}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
