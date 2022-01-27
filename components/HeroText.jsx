import React from "react";

const HeroText = ({ children }) => {
  return (
    <div>
      <h1 className="text-3xl mx-4">{children}</h1>
    </div>
  );
};

export default HeroText;
