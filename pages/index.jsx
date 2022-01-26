import { useEffect, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("isDark");
    const initialValue = JSON.parse(saved);
    setIsDark(initialValue || false);
  }, []);

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);
  return (
    <div
      className={`${
        isDark ? "bg-[#282828]" : "bg-[#E5E5E5]"
      } grid grid-cols-1 h-screen w-screen place-items-center place-content-center duration-1000`}
    >
      <h2
        className={`${
          isDark ? "text-[#E5E5E5]" : "text-[#282828]"
        } font-Poppins text-4xl text-center tracking-normal duration-1000`}
      >
        Almost before we knew it, we had left the ground.
      </h2>
      <div className="grid grid-cols-3 content-center items-center text-center uppercase">
        <p
          className={`${
            isDark ? "text-[#E5E5E5]" : "text-[#282828]"
          } tracking-wider duration-1000`}
        >
          light
        </p>
        <div
          onClick={() => setIsDark(!isDark)}
          className="w-14 h-4 bg-slate-600 rounded-lg cursor-pointer"
        >
          <div
            className={`${
              isDark ? "translate-x-10 " : ""
            } duration-1000  h-4 w-4 text-center rounded-full text-3xl bg-purple-500 text-black`}
          ></div>
        </div>
        <p
          className={`${
            isDark ? "text-[#E5E5E5]" : "text-[#282828]"
          } tracking-wider duration-1000`}
        >
          dark
        </p>
      </div>
    </div>
  );
}
