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
      <button onClick={() => setstate(!state)}>{state ? "Less" : "More"}</button>
    </p>
  );
};

export default ExtentableText;
