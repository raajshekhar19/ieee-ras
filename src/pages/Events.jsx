import React from "react";
import { Navbar } from "../components/Navbar/index";
import { Footer } from "../components/Footer";
import {AnimatedCircuitBackground} from "../components/AnimatedCircuitBackground/index"
import {GradientCircuitBoardBackground} from "../components/GradientCircuitBoardBackground/index"
/* import {EventCard} from "../components/EventCard/index" */
import "../styles/events.css";
import { OurMoments } from "../components/OurMoments";
const Events = () => {
  return (
    <>
    <AnimatedCircuitBackground/>
    <div className="events-page">
      <Navbar />
      <div className="upcoming-events">
          <OurMoments title="upcoming events"/>
          
        <div className="for-upcoming-events">
          <h1 className="initial-text">
            hover to reveal
          </h1>
          <h1 className="hover-text">Coming soon...</h1>
        </div>
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
