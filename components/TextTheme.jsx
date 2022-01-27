import React from "react";

const TextTheme = ({ isDark, children }) => {
  return (
    <div
      className={`${
        isDark ? "text-light" : "text-dark"
      } tracking-wider duration-1000`}
    >
      {children}
    </div>
  );
};

export default TextTheme;
