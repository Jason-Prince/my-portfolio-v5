import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="grid w-full grid-cols-3">
      {/* logo */}
      <div className="grid items-center w-12 grid-cols-2 text-cyan-800 dark:text-gray-400">
        <FontAwesomeIcon className="" icon={faTerminal} />
        <p className="whitespace-nowrap">Jason Prince</p>
      </div>
      {/* copywrite */}
      <div className="text-xs whitespace-nowrap">
        <p className="pt-1">© 2022 Jason Prince All rights reserved.</p>
      </div>
      {/* social */}
      <div className="grid grid-cols-2 text-xl w-14 pb-0.5 place-self-end text-cyan-800 dark:text-gray-400">
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faGithub} />
      </div>
    </footer>
  );
};

export default Footer;
