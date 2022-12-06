import React from "react";
import Destenation from "./Component/Destenation";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";
import ImgSlider from "./Component/ImgSlider";
import Nav from "./Component/Nav";
import Search from "./Component/Search";
import Select from "./Component/Select";
function App() {
  return (
   <>
      <Nav/>
      <Hero/>
      <Destenation/>
      <Search/>
      <Select/>
      <ImgSlider/>
      <Footer/>
   </>
  );
}

export default App;
