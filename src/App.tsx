import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ExtentableText from "./ExtentableText";

function App() {
  return (
    <ExtentableText maxChar={200}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ab dolor
      dignissimos, tenetur unde accusantium iste in fugiat, aliquid pariatur
      veniam maxime natus est autem nisi ratione. Nulla sunt, iure sed error
      natus necessitatibus sint deserunt dolore minima maxime blanditiis dolorum
      aliquid ipsum dolor corrupti delectus, quidem exercitationem repellat
      tempora. Perferendis voluptas adipisci, sequi illum qui atque, quod
      repellendus aliquam impedit delectus nihil quas officia in neque
      blanditiis voluptatibus? Maiores, saepe eligendi sint ipsum quis quia
      recusandae dolorum? Odit est minima possimus ipsam facilis maxime
      reiciendis veniam illum modi veritatis velit tempore inventore nobis,
      voluptatum non quasi libero provident officia!
    </ExtentableText>
  );
}

export default App;
