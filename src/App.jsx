import { Component, useState } from "react";
import "./App.css";
import Navbar from "./components/navigationbar"
import Home from "./components/home";
import About from "./components/about"
import { Routes,Route } from "react-router-dom";


function App() {
  const [logo, setlogo] = useState("TextUtils");
  const [navMenu, setNavMenu] = useState(["Home", "About"]);

  const [home, about] = navMenu;

  return (
    <>
      <Navbar logo={logo} home={home} about={about} />
      {/* <Navbar /> */}
      
      

    </>
  );
}

<Routes>
  <Route path="/Home" element = {<Home/>}></Route>
  <Route path="/About" element = {<About/>}></Route>
  {/* <Route path="*" element = {<Error404/>}></Route> */}
</Routes>



export default App;
