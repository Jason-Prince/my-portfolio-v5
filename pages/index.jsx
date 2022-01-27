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
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";

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
        } font-Poppins h-min duration-1000 grid place-items-center px-4 `}
      >
        <div
          className={`${
            isDark ? "bg-dark" : "bg-light"
          } grid grid-cols-12 pt-5 px-5 z-50 sticky top-0 duration-1000`}
        >
          {/* logo */}
          <div className="col-start-1 w-[100px] text-lg grid grid-cols-12 items-center">
            <FontAwesomeIcon className="" icon={faTerminal} />
            <p className="col-start-4 whitespace-nowrap">Jason Prince</p>
          </div>
          {/* theme toggle */}
          <div className="col-end-9 flex w-[90px] justify-around items-center">
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
            } rounded-full col-end-13 col-span-2 justify-self-end text-xl cursor-pointer grid grid-cols-1`}
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
        <ul
          className={`${
            isMenuOpen ? "" : "-mt-[300px]"
          } grid grid-cols-1 place-items-center duration-1000`}
        >
          <li
            className={`${
              isDark ? "hover:bg-black" : "hover:bg-slate-300"
            } grid grid-cols-2 p-4 gap-4 w-screen justify-items-center cursor-pointer`}
          >
            <FontAwesomeIcon className="place-self-end mb-1.5" icon={faUser} />
            <p className="place-self-start">About Me</p>
          </li>
          <li
            className={`${
              isDark ? "hover:bg-black" : "hover:bg-slate-300"
            } grid grid-cols-2 place-items-center p-4 gap-4 w-screen cursor-pointer`}
          >
            <FontAwesomeIcon className="place-self-end mb-1.5" icon={faCode} />
            <p className="place-self-start">Projects</p>
          </li>
          <li
            className={`${
              isDark ? "hover:bg-black" : "hover:bg-slate-300"
            } grid grid-cols-2 place-items-center p-4 gap-4 w-screen cursor-pointer`}
          >
            <FontAwesomeIcon
              className="place-self-end mb-1.5"
              icon={faEnvelope}
            />
            <p className="place-self-start">Contact Me</p>
          </li>
        </ul>
        <div className={`grid grid-cols-1 gap-8 py-8 duration-1000`}>
          <svg className="w-[380px]" viewBox="0 0 1139.17088 654.54324">
            <title>progressive_app</title>
            <circle cx="246.82682" cy="521.76476" r="59.24334" fill="#f2f2f2" />
            <circle cx="256.45989" cy="513.095" r="59.24334" fill="#f9f9f9" />
            <rect
              x="304.17137"
              y="447.54324"
              width="732.99951"
              height="2"
              fill="#3f3d56"
            />
            <path
              d="M714.20735,141.38055H454.03775v-5.36232h-117.971v5.36232H74.82467a17.5985,17.5985,0,0,0-17.59852,17.59851V515.23125a17.59856,17.59856,0,0,0,17.59852,17.59858H714.20735a17.59856,17.59856,0,0,0,17.59852-17.59858V158.97906A17.5985,17.5985,0,0,0,714.20735,141.38055Z"
              transform="translate(-30.41456 -122.72838)"
              fill="#3f3d56"
            />
            <rect
              x="50.4058"
              y="49.75362"
              width="627.3913"
              height="353.91304"
              fill="#f9f9f9"
            />
            <circle cx="363.56522" cy="33.66667" r="6.43478" fill="#f9f9f9" />
            <polygon
              points="498.374 403.667 50.406 403.667 50.406 49.754 498.374 403.667"
              opacity="0.1"
            />
            <circle cx="148.57375" cy="316.87641" r="60.3068" fill="#f2f2f2" />
            <rect
              x="509.95272"
              y="240.62175"
              width="58.6052"
              height="12.24586"
              fill="#3f3d56"
            />
            <rect
              x="439.10165"
              y="145.27896"
              width="200.30733"
              height="5.24823"
              fill="#3f3d56"
            />
            <rect
              x="439.10165"
              y="161.89834"
              width="200.30733"
              height="5.24823"
              fill="#3f3d56"
            />
            <rect
              x="439.10165"
              y="178.51773"
              width="200.30733"
              height="5.24823"
              fill="#3f3d56"
            />
            <rect
              x="439.10165"
              y="195.13711"
              width="200.30733"
              height="5.24823"
              fill="#3f3d56"
            />
            <rect
              x="439.10165"
              y="211.7565"
              width="200.30733"
              height="5.24823"
              fill="#3f3d56"
            />
            <rect
              x="614.91726"
              y="56.9338"
              width="24.49173"
              height="24.49173"
              fill="#f2f2f2"
            />
            <path
              d="M681.1947,215.52507h-29.74v-29.74h29.74Zm-28.44691-1.293h27.15387V187.07816H652.74779Z"
              transform="translate(-30.41456 -122.72838)"
              fill="#3f3d56"
            />
            <path
              d="M749.42165,519.96024H688.19234v-4.41153a.87468.87468,0,0,0-.87471-.87471h-20.9929a.87468.87468,0,0,0-.87471.87471v4.41153H652.32945v-4.41153a.87467.87467,0,0,0-.8747-.87471H630.46184a.87468.87468,0,0,0-.8747.87471v4.41153H616.46657v-4.41153a.87468.87468,0,0,0-.8747-.87471H594.599a.87468.87468,0,0,0-.87471.87471v4.41153H580.60369v-4.41153a.87468.87468,0,0,0-.87471-.87471H558.73607a.87468.87468,0,0,0-.8747.87471v4.41153H544.7408v-4.41153a.87468.87468,0,0,0-.8747-.87471H522.87319a.87467.87467,0,0,0-.8747.87471v4.41153H508.87792v-4.41153a.87468.87468,0,0,0-.87471-.87471h-20.9929a.87468.87468,0,0,0-.87471.87471v4.41153H473.015v-4.41153a.87468.87468,0,0,0-.8747-.87471H307.69588a.87468.87468,0,0,0-.8747.87471v4.41153H293.70061v-4.41153a.87468.87468,0,0,0-.8747-.87471H271.833a.87467.87467,0,0,0-.8747.87471v4.41153H257.83773v-4.41153a.87468.87468,0,0,0-.87471-.87471h-20.9929a.87468.87468,0,0,0-.87471.87471v4.41153H221.97484v-4.41153a.87467.87467,0,0,0-.8747-.87471H200.10723a.87468.87468,0,0,0-.8747.87471v4.41153H186.112v-4.41153a.87468.87468,0,0,0-.8747-.87471H164.24435a.87468.87468,0,0,0-.87471.87471v4.41153H150.24908v-4.41153a.87468.87468,0,0,0-.87471-.87471H128.38146a.87468.87468,0,0,0-.8747.87471v4.41153H114.38619v-4.41153a.87468.87468,0,0,0-.8747-.87471H92.51858a.87467.87467,0,0,0-.8747.87471v4.41153H51.40747a20.99293,20.99293,0,0,0-20.99291,20.99291v9.4925A20.99291,20.99291,0,0,0,51.40747,571.4385H749.42165a20.9929,20.9929,0,0,0,20.99291-20.99285v-9.4925A20.99292,20.99292,0,0,0,749.42165,519.96024Z"
              transform="translate(-30.41456 -122.72838)"
              fill="#3f3d56"
            />
            <path
              d="M193.58593,477.27162a76,76,0,1,1,76-76A76.08614,76.08614,0,0,1,193.58593,477.27162Zm0-150a74,74,0,1,0,74,74A74.08385,74.08385,0,0,0,193.58593,327.27162Z"
              transform="translate(-30.41456 -122.72838)"
              fill="#3f3d56"
            />
            <rect
              x="586.17137"
              y="32.54324"
              width="254.99951"
              height="2"
              fill="#3f3d56"
            />
            <rect
              x="406.17137"
              y="560.54324"
              width="732.99951"
              height="2"
              fill="#3f3d56"
            />
            <rect
              x="192.67161"
              y="652.54324"
              width="254.99951"
              height="2"
              fill="#3f3d56"
            />
            <rect x="471" y="550" width="28" height="28" fill="#f9f9f9" />
            <path
              d="M546.41456,684.72838h-34v-34h34Zm-32.52174-1.47826H544.9363V652.20664H513.89282Z"
              transform="translate(-30.41456 -122.72838)"
              fill="#3f3d56"
            />
            <rect x="796" y="22" width="28" height="28" fill="#f9f9f9" />
            <path
              d="M871.41456,156.72838h-34v-34h34Zm-32.52174-1.47826H869.9363V124.20664H838.89282Z"
              transform="translate(-30.41456 -122.72838)"
              fill="#3f3d56"
            />
            <rect x="1078" y="550" width="28" height="28" fill="#f9f9f9" />
            <path
              d="M1153.41456,684.72838h-34v-34h34Zm-32.52174-1.47826h31.04348V652.20664h-31.04348Z"
              transform="translate(-30.41456 -122.72838)"
              fill="#3f3d56"
            />
            <path
              d="M1087.58593,354.6866h-2.37862V289.525a37.71374,37.71374,0,0,0-37.71385-37.71377H909.44A37.71373,37.71373,0,0,0,871.72613,289.525V647.00639A37.71374,37.71374,0,0,0,909.44,684.72017h138.05348a37.71374,37.71374,0,0,0,37.71385-37.71378V401.06969h2.37862Z"
              transform="translate(-30.41456 -122.72838)"
              fill="#3f3d56"
            />
            <path
              d="M1077.176,291.74159v356.96a28.16523,28.16523,0,0,1-28.16016,28.17H910.296a28.16511,28.16511,0,0,1-28.16-28.17v-356.96a28.163,28.163,0,0,1,28.16-28.16h16.83a13.3792,13.3792,0,0,0,12.39,18.43h79.09a13.37908,13.37908,0,0,0,12.38995-18.43h18.02A28.16308,28.16308,0,0,1,1077.176,291.74159Z"
              transform="translate(-30.41456 -122.72838)"
              fill="#f9f9f9"
            />
            <rect
              x="928.57968"
              y="376.21769"
              width="41.32357"
              height="12.24586"
              fill="#3f3d56"
            />
            <rect
              x="878.62133"
              y="280.8749"
              width="141.24028"
              height="5.24823"
              fill="#3f3d56"
            />
            <rect
              x="878.62133"
              y="297.49429"
              width="141.24028"
              height="5.24823"
              fill="#3f3d56"
            />
            <rect
              x="878.62133"
              y="314.11367"
              width="141.24028"
              height="5.24823"
              fill="#3f3d56"
            />
            <rect
              x="878.62133"
              y="330.73306"
              width="141.24028"
              height="5.24823"
              fill="#3f3d56"
            />
            <rect
              x="878.62133"
              y="347.35244"
              width="141.24028"
              height="5.24823"
              fill="#3f3d56"
            />
            <rect
              x="929.68352"
              y="211.17873"
              width="24.49173"
              height="24.49173"
              fill="#f2f2f2"
            />
            <path
              d="M969.47386,340.03163v29.74h29.74v-29.74Zm28.45,28.45h-27.16v-27.16h27.16Z"
              transform="translate(-30.41456 -122.72838)"
              fill="#3f3d56"
            />
            <path
              d="M1077.176,610.58162v38.12a28.16523,28.16523,0,0,1-28.16016,28.17H910.296a28.16511,28.16511,0,0,1-28.16-28.17v-192.21l116.87,92.33,2,1.58,21.74,17.17,2.03,1.61Z"
              transform="translate(-30.41456 -122.72838)"
              opacity="0.1"
            />
            <circle cx="937.24147" cy="498.70691" r="43.86783" fill="#f2f2f2" />
            <path
              d="M350.58593,777.27162a87,87,0,1,1,87-87A87.09858,87.09858,0,0,1,350.58593,777.27162Zm0-172a85,85,0,1,0,85,85A85.09629,85.09629,0,0,0,350.58593,605.27162Z"
              transform="translate(-30.41456 -122.72838)"
              fill="#3f3d56"
            />
            <path
              d="M980.58593,655.27162a55,55,0,1,1,55-55A55.06223,55.06223,0,0,1,980.58593,655.27162Zm0-108a53,53,0,1,0,53,53A53.05963,53.05963,0,0,0,980.58593,547.27162Z"
              transform="translate(-30.41456 -122.72838)"
              fill="#3f3d56"
            />
          </svg>
          <h1 className="text-2xl w-[380px] text-center">
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
          <div className="col-span-full grid grid-cols-1 w-full gap-4">
            <div
              className={`${
                isDark ? "border-light" : "border-dark"
              } border-2  p-2 duration-1000 cursor-pointer `}
            >
              <h3>Griffin EnerG Consulting</h3>
              <img
                className="hover:scale-105 duration-1000"
                src="/griffin-energ-consulting.png"
                alt="Griffin EnerG Consulting"
              />
              {/* <Image
                className="hover:scale-105 duration-1000"
                src={"/griffin-energ-consulting.png"}
                width={1893}
                height={863}
                layout="intrinsic"
                alt="Griffin EnerG Consulting"
              /> */}
            </div>
            <div
              className={`${
                isDark ? "border-light" : "border-dark"
              } border-2  p-2 duration-1000 cursor-pointer `}
            >
              <h3>Latitude Study</h3>
              <Image
                className="hover:scale-105 duration-1000"
                src={"/latitude-study.png"}
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
      </div>
    </>
  );
}
