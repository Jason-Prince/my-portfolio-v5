/* eslint-disable @next/next/no-img-element */
import {
  faBars,
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
  console.log("isMenuOpen: ", isMenuOpen);

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
          <h1 className=" z-10 bg-light border-2 border-dark p-3 w-[351px] text-2xl text-center md:text-left md:translate-x-7 md:-translate-y-10">
            Hi, I&#39;m Jason Prince. <br />A Front-End Developer based in Utah.
            Available for freelance & collaborations.
          </h1>
          {/* projects */}
        </div>
        <section id="projects" className="text-2xl grid grid-cols-12 gap-4">
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
        <div
          className={`${
            isDark ? "border-light" : "border-dark"
          } w-full border-b-2 my-2 duration-1000`}
        ></div>
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
