import { useEffect, useState } from "react";

import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function Home() {
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
  console.log("is  ", isDark);
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
      <Hero />
      <Projects />
      <AboutMe />
      <ContactMe />
      <Footer />
    </div>
  );
}
