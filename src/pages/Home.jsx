import React from "react";
import { Navbar } from "../components/Navbar/index";
import { Footer } from "../components/Footer";
import {AnimatedCircuitBackground} from "../components/AnimatedCircuitBackground/index"
import {GradientCircuitBoardBackground} from "../components/GradientCircuitBoardBackground/index"
import "../styles/homepage.css";

const Home = () => {
  return (
    <>
    <AnimatedCircuitBackground/>
    
      <div className="home-page">
        <Navbar />
        <div className="welcoming-home">
          <h1>Welcome to  <span className="hero-head-ras">IEEE RAS </span> <span className="hero-head-muj" >MUJ !!!</span></h1>
        </div>
        <div className="vedio-container-homepage"></div>
        <div className="hero-about-homepage">
        At <span className="blacky">IEEE RAS MUJ</span>, we believe in the power of collaboration and innovation. Our mission is to cultivate a community of 
        learners and leaders who are passionate about robotics and automation, providing them with the tools, mentorship, and
         opportunities to excel in these cutting-edge fields
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
