import Image from "next/image";
import React from "react";

const projects = [
  {
    name: "Griffin EnerG Consulting",
    src: "/griffin.png",
    width: 1893,
    height: 863,
  },
  {
    name: "Latitude Study",
    src: "/chart.png",
    width: 1911,
    height: 882,
  },
  {
    name: "Cooking With React",
    src: "/cooking-with-react.png",
    width: 1246,
    height: 916,
  },
  {
    name: "Pixabay Image Search",
    src: "/pixabay-image-search.png",
    width: 1540,
    height: 1120,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="grid grid-cols-12 gap-4 pb-10 text-2xl bg-gray-100 font-Poppins dark:bg-black "
    >
      <h2 className="col-start-1 text-cyan-800 dark:text-gray-400">Projects</h2>
      <div className="col-span-12 col-start-1 duration-1000 border-b-2 border-cyan-800 dark:border-gray-400" />
      <div className="grid w-full grid-cols-1 gap-4 col-span-full md:grid-cols-2 xl:grid-cols-4">
        {projects.map(({ name, src, width, height }, index) => (
          <div
            key={index}
            className="p-2 duration-500 border-2 rounded cursor-pointer shadow-cardDown hover:shadow-cardUp dark:shadow-white text-cyan-800 border-cyan-800 dark:text-gray-400 dark:border-gray-400"
          >
            <h3>{name}</h3>
            <Image
              src={src}
              width={width}
              height={height}
              layout="intrinsic"
              alt={name}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
