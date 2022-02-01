import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const AboutMe = (props) => {
  const [isFrontend, setIsFrontend] = useState(false);
  const [isBackend, setIsBackend] = useState(false);
  const [isOther, setIsOther] = useState(false);
  console.log("props: ", props);
  return (
    <section
      id="aboutme"
      className={` text-2xl grid grid-cols-12 gap-4 w-full pb-10`}
    >
      <h2 className="col-start-1 pb-3 duration-1000 border-b-2 border-cyan-800 text-cyan-800 dark:text-gray-400 font-Poppins dark:border-gray-400 col-span-full whitespace-nowrap">
        About Me
      </h2>

      <div className="col-start-1 text-lg duration-1000 text-cyan-800 dark:text-gray-400 font-Poppins col-span-full md:col-span-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut,
          fuga fugiat quia exercitationem atque! Cumque officia iusto, in nobis
          quos incidunt quae pariatur libero debitis expedita, repellat velit
          blanditiis?
        </p>
      </div>
      <div className="grid col-start-1 gap-2 text-lg duration-1000 text-cyan-800 col-span-full md:col-start-7 font-Poppins dark:text-gray-400">
        <div className="flex flex-col ">
          <div className="flex flex-col ">
            <h3 className="pb-2 text-xl ">What I&#39;ve worked with:</h3>
            <div
              onClick={() => setIsFrontend(!isFrontend)}
              className="flex justify-between duration-1000 cursor-pointer "
            >
              <h4 className="whitespace-nowrap">FrontEnd</h4>
              <FontAwesomeIcon
                className={`${isFrontend ? "rotate-180" : ""} duration-1000`}
                icon={faChevronUp}
              />
            </div>
            <div className="w-full duration-1000 border-b-2 border-cyan-800 dark:border-gray-400" />
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
              className="flex justify-between duration-1000 cursor-pointer"
            >
              <h4 className="whitespace-nowrap">BackEnd</h4>
              <FontAwesomeIcon
                className={`${isBackend ? "rotate-180" : ""} duration-1000`}
                icon={faChevronUp}
              />
            </div>
            <div className="w-full duration-1000 border-b-2 border-cyan-800 dark:border-gray-400" />
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
              className="flex justify-between duration-1000 cursor-pointer"
            >
              <h4 className="whitespace-nowrap">Others</h4>
              <FontAwesomeIcon
                className={`${isOther ? "rotate-180" : ""} duration-1000`}
                icon={faChevronUp}
              />
            </div>
            <div className="w-full duration-1000 border-b-2 border-cyan-800 dark:border-gray-400" />
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
  );
};

export default AboutMe;
