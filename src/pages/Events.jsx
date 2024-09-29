import React from "react";
import { Navbar } from "../components/Navbar/index";
import { Footer } from "../components/Footer";
import {AnimatedCircuitBackground} from "../components/AnimatedCircuitBackground/index"
import {GradientCircuitBoardBackground} from "../components/GradientCircuitBoardBackground/index"
/* import {EventCard} from "../components/EventCard/index" */
import "../styles/events.css";
import { OurMoments } from "../components/OurMoments";
import { HoverToReveal } from "../components/HoverToReveal";
const Events = () => {
  return (
    <>
    <AnimatedCircuitBackground/>
    <div className="events-page">
      <Navbar />
      <div className="upcoming-events">
          <OurMoments title="upcoming events"/>       
          <HoverToReveal/>      
      </div>

      <div className="upcoming-events">
      <OurMoments title="past events"/>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Events;
