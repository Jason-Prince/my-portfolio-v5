import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";
import ProjectImage from "../components/ProjectImage";
import ProjectText from "../components/ProjectText";

const LatitudeStudy = () => {
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
  const text = {
    title: "Latitude Study",
    body: "This is the body text",
  };
  const image_1 = {
    name: "Latitude Study Image 1",
    // src: "/ls_img_1.gif",
    src: "http://placekitten.com/2000/1000",
    width: 2000,
    height: 1000,
  };
  const image_2 = {
    name: "Latitude Study Image 2",
    // src: "/ls_img_2.gif",
    src: "http://placekitten.com/2000/1000",
    width: 2000,
    height: 1000,
  };
  const image_3 = {
    name: "Latitude Study Image 3",
    // src: "/ls_img_3.gif",
    src: "http://placekitten.com/1000/2000",
    width: 1000,
    height: 2000,
  };
  const image_4 = {
    name: "Latitude Study Image 4",
    // src: "/ls_img_4.gif",
    src: "http://placekitten.com/1000/2000",
    width: 1000,
    height: 2000,
  };
  return (
    <div
      className={`${
        isDark ? "dark bg-black" : "bg-gray-100"
      } relative px-4 overflow-hidden`}
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
          <ProjectImage image={image_1} />
        </div>
        <ProjectText text={text} />
        <div className="col-start-1 col-span-full">
          <ProjectImage image={image_2} />
        </div>
        <div className="grid grid-cols-12 col-start-1 gap-3 col-span-full">
          <div className="col-start-1 col-span-full md:col-span-6">
            <ProjectImage image={image_3} />
          </div>
          <div className="col-start-1 col-span-full md:col-start-7 md:col-span-6">
            <ProjectImage image={image_4} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LatitudeStudy;
