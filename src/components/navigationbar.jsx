import React from "react";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
// console.log(props.mode)
// console.log(props.greenMode)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme={`${props.mode?"dark":"light"}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.logo}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="/"> */}
                <Link className="nav-link active" to="/Home">
                  {props.home}
                </Link>
                {/* </a> */}
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/"> */}
                <Link className="nav-link" to="/About">
                  {props.about}
                </Link>
                {/* </a> */}
              </li>
            </ul>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.handleChangeMode}
              />
              <label className={`form-check-label ${props.mode?"my-txt-color-white":"my-txt-color-black"}`} HTMLfor="flexSwitchCheckDefault">
                {`Enable ${props.mode?"light":"dark"} Mode`}
              </label>
            </div>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.handleGreenMode}
              />
              <label className={`form-check-label ${props.mode?"my-txt-color-white":"my-txt-color-black"}`} HTMLfor="flexSwitchCheckDefault">
                {`Enable ${props.greenMode?"light":"green"} Mode`}
              </label>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit" style={{borderColor:props.mode?"white":"green",color:props.mode?"white":"green"}}>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// Navbar.defaultProps = {
//     logo: "set logo",
//     navMenu : ["set nav menu(Home)","set nav menu(About)"]
//   }
