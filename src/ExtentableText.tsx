import React, { useState } from "react";
interface Probs {
  children: string;
  maxChar?: number;
}
const ExtentableText = ({ children, maxChar = 100 }: Probs) => {
  const [state, setstate] = useState(false);
  if (children.length <= maxChar) return <p>{children}</p>;
  const text = state ? children : children.substr(0, maxChar);
  return (
    <p>
      {text}...
      <a style={{ cursor: "pointer" }} onClick={() => setstate(!state)}>
        {state ? "Read Less" : "Read More"}
      </a>
    </p>
  );
};

export default ExtentableText;
