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
  const [alert, setAlert] = useState(null)

  const [mode, setMode] = useState(false)
  
  const handleShowAlert = (message,type)=>{
    setAlert({
      message : message,
      type : type
    })
  }
  
  const handleChangeMode = ()=>{
    setMode(!mode)
    if(mode === true){
      // setMode(!mode)
      document.body.style.backgroundColor = "white"
      // setAlert("Light Mode Enabled Successfully")
      handleShowAlert("Light Mode Enabled","success")
    }
    else{
      document.body.style.backgroundColor = "#192750"
      // setAlert("Dark Mode Enabled Successfully")
      handleShowAlert("Dark Mode Enabled","success")
      // setMode(!mode)
      
    }
    // setMode(!mode)
    // console.log(mode)
  }
  
  const [greenMode, setGreenMode] = useState(false)
  const handleGreenMode = ()=>{
    setGreenMode(!greenMode)
    if(greenMode === false){
      document.body.style.backgroundColor = "green"
    }
    else{
      document.body.style.backgroundColor = "white"
    }
    
  }
  
  const [home, about] = navMenu;

  return (
    <>
      <Navbar logo={logo} home={home} about={about} handleChangeMode = {handleChangeMode} handleGreenMode = {handleGreenMode} mode={mode} greenMode = {greenMode}/>
      <Alert alert = {alert}/>
      {/* <Navbar /> */}
      
      

<Routes>
  <Route path="/" element = {<Home mode = {mode}/>}></Route>
  <Route path="/Home" element = {<Home mode = {mode}/>}></Route>
  <Route path="/About" element = {<About mode = {mode}/>}></Route>
  <Route path="*" element = {<Error404/>}></Route>
</Routes>
    </>
  );
}




export default App;
