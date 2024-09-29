import React from "react";
import { Navbar } from "../components/Navbar/index";
import { Footer } from "../components/Footer";
import {AnimatedCircuitBackground} from "../components/AnimatedCircuitBackground/index"
import {GradientCircuitBoardBackground} from "../components/GradientCircuitBoardBackground/index"
import "../styles/homepage.css";
import { OurMoments } from "../components/OurMoments";

const Home = () => {
  return (
    <>
    <AnimatedCircuitBackground/>
    
      <div className="home-page">
        <Navbar />
        <div className="welcoming-home">
          <OurMoments title = "Welcome to IEEE RAS MUJ"/>
        </div>
        {/* <div className="vedio-container-homepage"></div> */}
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
