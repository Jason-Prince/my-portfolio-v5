import React, { useState } from "react";

const PageContainer = ({ isDark, children }) => {
  const [theme, setTheme] = useState("");
  //   isDark ? setTheme("bg-dark") : setTheme("bg-light");
  if (isDark == true) return setTheme("bg-dark");

  return (
    <div
      className={`${theme} grid grid-cols-1 h-screen w-screen place-items-center place-content-center duration-1000`}
    >
      {children}
    </div>
  );
};

export default PageContainer;
