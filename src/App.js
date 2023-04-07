import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";


function App() {
  const [logo, setlogo] = useState("TextUtils");
  const [navMenu, setNavMenu] = useState(["Home", "About"]);

  const [home, about] = navMenu;

  return (
    <>
      <Navbar logo={logo} home={home} about={about} />
      {/* <Navbar /> */}
      <Textarea textArea = "Enter Your Text Below"
      
      />
    </>
  );
}

export default App;
