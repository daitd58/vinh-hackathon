import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Background from "./components/BackGround";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import ComponentThree from "./components/ComponentThree";
import ComponentFour from "./components/ComponentFour";
import ComponentFive from "./components/ComponentFive";
import ComponentSix from "./components/ComponentSix";
import ComponentSeven from "./components/ComponentSeven";
import ComponentEight from "./components/ComponentEight";
import ComponentNine from "./components/ComponentNine";
import Describe from "./components/Describe";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <Background setOpen={setOpen} />
      <ComponentOne setOpen={setOpen} />
      <ComponentTwo setOpen={setOpen} />
      <ComponentThree setOpen={setOpen} />
      <ComponentFour setOpen={setOpen} />
      <ComponentFive setOpen={setOpen} />
      <Describe setOpen={setOpen} />
      <ComponentSix setOpen={setOpen} />
      <ComponentSeven setOpen={setOpen} />
      <ComponentEight setOpen={setOpen} />
      <ComponentNine setOpen={setOpen} />
    </>
  );
}

export default App;
