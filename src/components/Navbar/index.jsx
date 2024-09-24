import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import Sidebar from "../Slidebar";
import "../../styles/navbar.css";
import "../../styles/Slidebar.css";

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 768);
      if (window.innerWidth > 768) {
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
      <div className="sliced-corner">
        <header className="nav-header">
          <Link to="/">
            <img className="nav-logo-header" src={logo} alt="logo" />
          </Link>
          {!isWideScreen && (
            <button onClick={toggleSidebar} className="menu-btn">
              ☰
            </button>
          )}
        </header>

        {isWideScreen ? (
          <nav className="to-row">
            <Link to="/">
            <div className="button">
              <div className="button-inner">
              Home
              </div>
            </div>
            </Link>
            <Link to="/about">
            <div className="button">
              <div className="button-inner">
                About
              </div>
            </div>
            </Link>
            <Link to="/events">
            <div className="button">
              <div className="button-inner">
                Events
              </div>
            </div>
            </Link>
            <Link to="/gallery">
            <div className="button">
              <div className="button-inner">
               Gallery
              </div>
            </div>
            </Link>
            <Link to="/contact">
            <div className="button">
              <div className="button-inner">
                Contact
              </div>
            </div>
            </Link>
          </nav>
        ) : (
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        )}
      </div>
    </>
  );
};

export default Navbar;

