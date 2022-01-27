import React, { useState } from "react";

const TextSize = ({ size, children }) => {
  const [fontSize, setFontSize] = useState("");
  if (size == "p") {
    setFontSize("text-xl");
  }

  return <div className={fontSize}>{children}</div>;
};

export default TextSize;
