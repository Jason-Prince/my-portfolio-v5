import React, { useEffect, useState } from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DarkMode = ({ toggleDark, isDark }) => {
  console.log("isDark (DarkMode): ", isDark);
  return (
    <div className="col-end-11 row-start-1 md:col-end-13 flex w-[90px] justify-around items-center">
      <FontAwesomeIcon icon={faSun} />
      <div
        onClick={() => toggleDark(!isDark)}
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
  );
};

export default DarkMode;
