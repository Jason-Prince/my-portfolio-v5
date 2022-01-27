import React, { useState } from "react";

const Text = ({ isDark, children }, size, style) => {
  const [theme, setTheme] = useState("");
  const [fontStyle, setFontStyle] = useState("");
  console.log("size: ", size);

  isDark ? setTheme("text-light") : setTheme("text-dark");
  if (style == "section")
    return setFontStyle("font-Poppins text-4xl tracking-normal duration-1000");
  //   if (size == "p") return setFontSize("text-3xl");
  //   if (size == "hero") return setFontSize("text-4xl");

  return <div className={`${theme} ${fontStyle}`}>{children}</div>;
};

export default Text;
