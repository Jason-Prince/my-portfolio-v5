import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";

const GriffinEnergConsulting = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("isDark");
    const initialValue = JSON.parse(saved);
    setIsDark(initialValue || false);
  }, []);

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  const handleIsDark = () => {
    setIsDark(!isDark);
  };
  const handleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div
      className={`${isDark ? "dark bg-black" : "bg-gray-100"} relative px-4`}
    >
      <div className="sticky top-0 z-50">
        <Header
          handleIsDark={handleIsDark}
          handleIsMenuOpen={handleIsMenuOpen}
          isMenuOpen={isMenuOpen}
          isDark={isDark}
        />
      </div>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-start-1 col-span-full">
          <Image
            className="rounded"
            src="http://placekitten.com/2000/1000"
            width={2000}
            height={1000}
            alt="..."
          />
        </div>
        <div className="grid grid-cols-12 col-start-1 gap-3 col-span-full">
          <h2 className="col-start-1 text-4xl font-Poppins text-cyan-800 col-span-full md:col-span-6 md:text-center">
            Griffin EnerG Consulting
          </h2>
          <p className="col-start-1 text-xl text-cyan-800 font-Poppins col-span-full md:col-start-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            autem. Possimus in non veritatis, molestiae iure, at nulla sequi
            tempore repudiandae voluptates corporis reiciendis. Ipsum nostrum
            accusantium molestias labore autem.
          </p>
        </div>
        <div className="col-start-1 col-span-full">
          <Image
            className="rounded"
            src="http://placekitten.com/2000/1000"
            width={2000}
            height={1000}
            alt="..."
          />
        </div>
        <div className="grid grid-cols-12 col-start-1 gap-3 col-span-full">
          <div className="col-start-1 col-span-full md:col-span-6">
            <Image
              className="rounded"
              src="http://placekitten.com/1000/2000"
              width={1000}
              height={2000}
              alt="..."
            />
          </div>
          <div className="col-start-1 col-span-full md:col-start-7 md:col-span-6">
            <Image
              className="rounded"
              src="http://placekitten.com/1000/2000"
              width={1000}
              height={2000}
              alt="..."
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GriffinEnergConsulting;
