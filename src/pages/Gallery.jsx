import React from 'react';
import { Navbar } from "../components/Navbar/index";
import { Footer } from "../components/Footer";
import {AnimatedCircuitBackground} from "../components/AnimatedCircuitBackground/index"
import {GradientCircuitBoardBackground} from "../components/GradientCircuitBoardBackground/index"
import "../styles/gallery.css";


const Gallery = () => {
  return(
    <>
    <AnimatedCircuitBackground/>
    <div className="gallery-page">
      <Navbar/>
      <div className="our-gallery">
      Our Moments
      </div>
      <Footer/>
    </div>
    </>
  )
};

export default Gallery;