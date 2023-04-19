import { Component, useState } from "react";
import "./App.css";
import Navbar from "./components/navigationbar"
import Home from "./components/home";
import About from "./components/about";
import Error404 from "./components/error404"
import { Routes,Route } from "react-router-dom";
import Alert from "./components/alert";


function App() {
  const [logo, setlogo] = useState("TextUtils");
  const [navMenu, setNavMenu] = useState(["Home", "About"]);
  const [alert, setAlert] = useState("")

  const [mode, setMode] = useState(false)

  const handleChangeMode = ()=>{
    if(mode === true){
      document.body.style.backgroundColor = "white"
      setAlert("Dark Mode Enabled Successfully")
    }
    else{
      document.body.style.backgroundColor = "#192750"
      setAlert("Light Mode Enabled Successfully")
      
    }
    setMode(!mode)
    // console.log(mode)
  }

  const [home, about] = navMenu;

  return (
    <>
      <Navbar logo={logo} home={home} about={about} handleChangeMode = {handleChangeMode} mode={mode}/>
      <Alert alert = {alert}/>
      {/* <Navbar /> */}
      
      

<Routes>
  <Route path="/" element = {<Home mode = {mode}/>}></Route>
  <Route path="/Home" element = {<Home mode = {mode}/>}></Route>
  <Route path="/About" element = {<About/>}></Route>
  <Route path="*" element = {<Error404/>}></Route>
</Routes>
    </>
  );
}




export default App;
