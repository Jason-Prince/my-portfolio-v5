import React from "react";

const ProjectText = ({ text }) => {
  const { title, body } = text;
  return (
    <div className="grid grid-cols-12 col-start-1 gap-3 col-span-full">
      <h2 className="col-start-1 text-4xl font-Poppins text-cyan-800 dark:text-gray-400 col-span-full md:col-span-6 md:text-center">
        {title}
      </h2>
      <p className="col-start-1 text-xl text-cyan-800 dark:text-gray-400 font-Poppins col-span-full md:col-start-7">
        {body}
      </p>
    </div>
  );
};

export default ProjectText;
