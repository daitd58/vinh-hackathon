import { useState } from "react";
import Banner from "./components/Banner";
import ComponentEight from "./components/ComponentEight";
import ComponentEleven from "./components/ComponentEleven";
import ComponentFive from "./components/ComponentFive";
import ComponentFour from "./components/ComponentFour";
import ComponentNine from "./components/ComponentNine";
import ComponentOne from "./components/ComponentOne";
import ComponentSeven from "./components/ComponentSeven";
import ComponentSix from "./components/ComponentSix";
import ComponentTen from "./components/ComponentTen";
import ComponentThree from "./components/ComponentThree";
import ComponentTwo from "./components/ComponentTwo";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Header open={open} setOpen={setOpen}/>
      <Banner setOpen={setOpen}/>
      <ComponentOne setOpen={setOpen}/>
      <ComponentTwo setOpen={setOpen}/>
      <ComponentThree setOpen={setOpen}/>
      <ComponentFour setOpen={setOpen}/>
      <ComponentFive setOpen={setOpen}/>
      <ComponentSix setOpen={setOpen}/>
      <ComponentSeven setOpen={setOpen}/>
      <ComponentEight setOpen={setOpen}/>
      <ComponentNine setOpen={setOpen}/>
      <ComponentTen setOpen={setOpen}/>
      <ComponentEleven setOpen={setOpen}/>
      <Footer setOpen={setOpen}/>
    </>
  );
}

export default App;
