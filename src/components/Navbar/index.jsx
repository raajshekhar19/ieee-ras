import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import Sidebar from "../Slidebar";
import "../../styles/navbar.css";
import "../../styles/Slidebar.css";

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 835);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 835);
      if (window.innerWidth > 835) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
        {!isWideScreen && (
          
          <div className="forsmall">
          <header className="nav-header">
          <Link to="/">
            <img className="nav-logo-header" src={logo} alt="logo" />
          </Link>
        </header>
          <button onClick={toggleSidebar} className="menu-btn">
            ☰
          </button>
          </div>
        )}
      {isWideScreen ? (
        <div className="sliced-corner">
          <header className="nav-header">
            <Link to="/">
              <img className="nav-logo-header" src={logo} alt="logo" />
            </Link>
          </header>
          <nav className="to-row">
            <Link to="/">
              <div className="button-n">
                <div className="button-inner">Home</div>
              </div>
            </Link>
            <Link to="/about">
              <div className="button-n">
                <div className="button-inner">About</div>
              </div>
            </Link>
            <Link to="/events">
              <div className="button-n">
                <div className="button-inner">Events</div>
              </div>
            </Link>
            <Link to="/gallery">
              <div className="button-n">
                <div className="button-inner">Gallery</div>
              </div>
            </Link>
            <Link to="/contact">
              <div className="button-n">
                <div className="button-inner">Contact</div>
              </div>
            </Link>
            <Link to="/login">
              <div className="button-n">
                <div className="button-inner">Login</div>
              </div>
            </Link>
          </nav>
        </div>
      ) : (
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      )}
    </>
  );
};

export default Navbar;
