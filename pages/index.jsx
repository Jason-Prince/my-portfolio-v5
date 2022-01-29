/* eslint-disable @next/next/no-img-element */
import {
  faBars,
  faChevronUp,
  faCode,
  faEnvelope,
  faMoon,
  faSun,
  faTerminal,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [isFrontend, setIsFrontend] = useState(false);
  const [isBackend, setIsBackend] = useState(false);
  const [isOther, setIsOther] = useState(false);
  console.log("isOpen: ", isOpen);

  useEffect(() => {
    const saved = localStorage.getItem("isDark");
    const initialValue = JSON.parse(saved);
    setIsDark(initialValue || false);
  }, []);

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);
  return (
    <>
      <div
        className={`${
          isDark ? "bg-dark text-light" : "bg-light text-dark"
        } font-Poppins duration-1000 grid place-items-center px-4`}
      >
        <div
          className={`${
            isDark ? "bg-dark" : "bg-light"
          } flex justify-between w-full pt-5 px-5 z-50 sticky top-0 duration-1000`}
        >
          {/* logo */}
          <div className="w-[100px] text-lg grid grid-cols-12 items-center">
            <FontAwesomeIcon className="" icon={faTerminal} />
            <p className="col-start-4 whitespace-nowrap">Jason Prince</p>
          </div>
          <div className="flex w-[150px] md:w-[517px] justify-between">
            {/* nav links */}
            <ul
              className={`hidden col-start-5 col-end-13 row-start-1 gap-8 w-[325px] md:flex place-items-center duration-1000`}
            >
              <li
                className={`${
                  isDark ? "hover:bg-black" : "hover:bg-slate-300"
                } flex w-[105px] pt-1 px-2 place-content-center justify-between rounded whitespace-nowrap cursor-pointer`}
              >
                <FontAwesomeIcon
                  className="place-self-end mb-1.5"
                  icon={faUser}
                />
                <p className="place-self-start pl-2">About Me</p>
              </li>
              <li
                className={`${
                  isDark ? "hover:bg-black" : "hover:bg-slate-300"
                } flex w-[100px] pt-1 px-2 place-content-center justify-between rounded whitespace-nowrap cursor-pointer`}
              >
                <FontAwesomeIcon
                  className="place-self-end mb-1.5"
                  icon={faCode}
                />
                <p className="place-self-start pl-2">Projects</p>
              </li>
              <li
                className={`${
                  isDark ? "hover:bg-black" : "hover:bg-slate-300"
                } flex w-[120px] pt-1 px-2 place-content-center justify-between rounded whitespace-nowrap cursor-pointer`}
              >
                <FontAwesomeIcon
                  className="place-self-end mb-1.5"
                  icon={faEnvelope}
                />
                <p className="place-self-start pl-2">Contact Me</p>
              </li>
            </ul>
            {/* theme toggle */}
            <div className="col-end-11 row-start-1 md:col-end-13 flex w-[90px] justify-around items-center">
              <FontAwesomeIcon icon={faSun} />
              <div
                onClick={() => setIsDark(!isDark)}
                className="w-[42px] h-4 bg-slate-400 rounded-lg cursor-pointer"
              >
                <div
                  className={`${
                    isDark ? "translate-x-[26px] " : ""
                  } duration-1000  h-4 w-4 text-center rounded-full text-3xl bg-slate-600`}
                ></div>
              </div>
              <FontAwesomeIcon icon={faMoon} />
            </div>
            {/* menu toggle */}
            <div
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${
                isDark ? "hover:bg-black" : "hover:bg-slate-300"
              } rounded-full col-end-13 col-span-2 justify-self-end text-xl cursor-pointer grid grid-cols-1 md:hidden`}
            >
              <div className={` h-10 w-10  col-start-1 row-start-1`} />
              {isMenuOpen ? (
                <FontAwesomeIcon
                  className="col-start-1 row-start-1 place-self-center"
                  icon={faTimes}
                />
              ) : (
                <FontAwesomeIcon
                  className="col-start-1 row-start-1 place-self-center"
                  icon={faBars}
                />
              )}
            </div>
          </div>
        </div>
        <ul
          className={`${
            isMenuOpen ? "" : "-mt-[300px]"
          } grid grid-cols-1 place-items-center duration-1000`}
        >
          <li
            className={`${
              isDark ? "hover:bg-black" : "hover:bg-slate-300"
            } grid grid-cols-2 p-4 gap-4 w-full justify-items-center cursor-pointer`}
          >
            <FontAwesomeIcon className="place-self-end mb-1.5" icon={faUser} />
            <p className="place-self-start">About Me</p>
          </li>
          <li
            className={`${
              isDark ? "hover:bg-black" : "hover:bg-slate-300"
            } grid grid-cols-2 place-items-center p-4 gap-4 w-full cursor-pointer`}
          >
            <FontAwesomeIcon className="place-self-end mb-1.5" icon={faCode} />
            <p className="place-self-start">Projects</p>
          </li>
          <li
            className={`${
              isDark ? "hover:bg-black" : "hover:bg-slate-300"
            } grid grid-cols-2 place-items-center p-4 gap-4 w-full cursor-pointer`}
          >
            <FontAwesomeIcon
              className="place-self-end mb-1.5"
              icon={faEnvelope}
            />
            <p className="place-self-start">Contact Me</p>
          </li>
        </ul>
        <div
          className={`flex flex-col md:flex-row-reverse items-center justify-center duration-1000 md:mt-10 `}
        >
          <div className="w-[351px]">
            <Image
              src={"/me.jpg"}
              width={700}
              height={700}
              layout="intrinsic"
              alt="Jason Prince"
              objectFit="contain"
            />
          </div>
          <h1
            className={`${
              isDark
                ? "bg-dark border-light text-light"
                : "bg-light border-dark text-dark"
            } z-10 duration-1000 border-2 p-3 w-[351px] text-2xl text-center md:text-left md:translate-x-7 md:-translate-y-10`}
          >
            Hi, I&#39;m Jason Prince. <br />A Front-End Developer based in Utah.
            Available for freelance & collaborations.
          </h1>
          {/* projects */}
        </div>
        <section
          id="projects"
          className="text-2xl grid grid-cols-12 gap-4 pb-10"
        >
          <h2 className="col-start-1 ">Projects</h2>
          <div
            className={`${
              isDark ? "border-light" : "border-dark"
            } col-start-1 col-span-12 border-b-2 duration-1000`}
          ></div>
          <div className="col-span-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full gap-4">
            <div
              className={`${
                isDark ? "border-light" : "border-dark"
              } border-2  p-2 duration-1000 cursor-pointer `}
            >
              <h3>Griffin EnerG Consulting</h3>
              <Image
                className="hover:scale-105 duration-1000"
                src={"/griffin.png"}
                width={1893}
                height={863}
                layout="intrinsic"
                alt="Griffin EnerG Consulting"
              />
            </div>
            <div
              className={`${
                isDark ? "border-light" : "border-dark"
              } border-2  p-2 duration-1000 cursor-pointer `}
            >
              <h3>Latitude Study</h3>
              <Image
                className="hover:scale-105 duration-1000"
                src={"/chart.png"}
                width={1911}
                height={882}
                layout="intrinsic"
                alt="Latitude Study"
              />
            </div>
            <div
              className={`${
                isDark ? "border-light" : "border-dark"
              } border-2  p-2 duration-1000 cursor-pointer`}
            >
              <h3>Cooking With React</h3>
              <Image
                className="hover:scale-105 duration-1000"
                src={"/cooking-with-react.png"}
                width={1246}
                height={916}
                layout="intrinsic"
                alt="Cooking With React"
              />
            </div>
            <div
              className={`${
                isDark ? "border-light" : "border-dark"
              } border-2  p-2 duration-1000 cursor-pointer`}
            >
              <h3>Pixabay Image Search</h3>
              <Image
                className="hover:scale-105 duration-1000"
                src={"/pixabay-image-search.png"}
                width={1540}
                height={1120}
                layout="intrinsic"
                alt="Pixabay Image Search"
              />
            </div>
          </div>
        </section>
        <section
          id="aboutme"
          className="text-2xl grid grid-cols-12 gap-4 w-full pb-10"
        >
          <h2
            className={`${
              isDark ? "border-light" : "border-dark"
            } col-start-1 col-span-full pb-3 border-b-2 duration-1000 whitespace-nowrap`}
          >
            About Me
          </h2>

          <div className="col-start-1 col-span-full md:col-span-6 text-lg">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              aut, fuga fugiat quia exercitationem atque! Cumque officia iusto,
              in nobis quos incidunt quae pariatur libero debitis expedita,
              repellat velit blanditiis?
            </p>
          </div>
          <div className="col-start-1 col-span-full md:col-start-7  text-lg grid gap-2">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div
                  onClick={() => setIsFrontend(!isFrontend)}
                  className="flex justify-between cursor-pointer duration-1000"
                >
                  <h4 className="whitespace-nowrap">FrontEnd</h4>
                  <FontAwesomeIcon
                    className={`${
                      isFrontend ? "rotate-180" : ""
                    } duration-1000`}
                    icon={faChevronUp}
                  />
                </div>
                <div
                  className={`${
                    isDark ? "border-light" : "border-dark"
                  } border-b-2  w-full duration-1000`}
                />
              </div>
              <div
                className={`${
                  isFrontend ? "max-h-[150px] p-4" : "max-h-0"
                } overflow-hidden duration-1000 `}
              >
                <p className="text-base">
                  HTML, CSS, Sass, Styled Components, CSS Modules, JavaScript,
                  Material UI, Bootstrap, TailwindCSS
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col">
                <div
                  onClick={() => setIsBackend(!isBackend)}
                  className="flex justify-between cursor-pointer duration-1000"
                >
                  <h4 className="whitespace-nowrap">BackEnd</h4>
                  <FontAwesomeIcon
                    className={`${isBackend ? "rotate-180" : ""} duration-1000`}
                    icon={faChevronUp}
                  />
                </div>
                <div
                  className={`${
                    isDark ? "border-light" : "border-dark"
                  } border-b-2  w-full duration-1000`}
                />
              </div>
              <div
                className={`${
                  isBackend ? "max-h-[150px] p-4" : "max-h-0"
                } overflow-hidden duration-1000 `}
              >
                <p className="text-base">
                  Python, Django, NodeJS, SQLite3, MySQL, MongoDB
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col">
                <div
                  onClick={() => setIsOther(!isOther)}
                  className="flex justify-between cursor-pointer duration-1000"
                >
                  <h4 className="whitespace-nowrap">Others</h4>
                  <FontAwesomeIcon
                    className={`${isOther ? "rotate-180" : ""} duration-1000`}
                    icon={faChevronUp}
                  />
                </div>
                <div
                  className={`${
                    isDark ? "border-light" : "border-dark"
                  } border-b-2  w-full duration-1000`}
                />
              </div>
              <div
                className={`${
                  isOther ? "max-h-[150px] p-4" : "max-h-0"
                } overflow-hidden duration-1000 `}
              >
                <p className="text-base">
                  VSCode, React, NextJS, Netlify, Heroku, Vercel, Git, GitHub
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="text-2xl grid grid-cols-12 gap-4 w-full pb-10 "
        >
          <h2
            className={`${
              isDark ? "border-light" : "border-dark"
            } col-start-1 col-span-full pb-3 border-b-2 duration-1000 whitespace-nowrap duration-1000`}
          >
            Say Hello
          </h2>
          <div className="col-start-1 col-span-full md:col-span-6 text-lg">
            <p>
              Looking to start a new project or just want to say hi? Send me an
              email and I&#39;ll do my best to reply within 24 hours!
            </p>
            <br />
            <p>
              If contact forms aren&#39;t your thing... send me an email at
              jasoncprince@gmail.com
            </p>
          </div>
          <div className="col-start-1 md:col-start-7 col-span-full text-lg">
            <form className="grid gap-2" action="">
              <div className="flex flex-col">
                <label htmlFor="name">Name</label>
                <input
                  className={`${
                    isDark ? "border-light bg-dark" : "border-dark bg-light"
                  } border-2  p-1 pl-2 rounded duration-1000`}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  className={`${
                    isDark ? "border-light bg-dark" : "border-dark bg-light"
                  } border-2  p-1 pl-2 rounded duration-1000`}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="johndoe@email.com"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message">Message</label>
                <textarea
                  className={`${
                    isDark ? "border-light bg-dark" : "border-dark bg-light"
                  } border-2  p-1 pl-2 rounded h-40 duration-1000`}
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Hello..."
                />
              </div>
              <input
                className={`${
                  isDark
                    ? "border-light bg-dark hover:bg-black"
                    : "border-dark bg-light hover:bg-slate-300"
                } border-2  p-1 pl-2 rounded cursor-pointer duration-1000`}
                type="submit"
                value="Send"
              />
            </form>
          </div>
        </section>

        <footer className="grid grid-cols-3 w-full">
          {/* logo */}
          <div className="grid grid-cols-2 w-12 items-center">
            <FontAwesomeIcon className="" icon={faTerminal} />
            <p className="whitespace-nowrap">Jason Prince</p>
          </div>
          {/* copywrite */}
          <div className="text-xs whitespace-nowrap">
            <p className="pt-1">© 2022 Jason Prince All rights reserved.</p>
          </div>
          {/* social */}
          <div className="grid grid-cols-2 text-xl w-14 pb-0.5 place-self-end">
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </footer>
      </div>
    </>
  );
}
