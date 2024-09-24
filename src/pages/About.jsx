import React from "react";
import { Navbar } from "../components/Navbar/index";
import { Footer } from "../components/Footer";
import {AnimatedCircuitBackground} from "../components/AnimatedCircuitBackground/index"
import {GradientCircuitBoardBackground} from "../components/GradientCircuitBoardBackground/index"
import "../styles/aboutpage.css";

export const About = () => {
  return (
    <>
    <AnimatedCircuitBackground/>
    <div className="about-page">
      <Navbar />
      
      <div className="mission">
        <h1 className="mission-heading">Our Mission</h1>
        <p>
          Our mission is to promote the advancement of technology related to
          robotics and automation through education, research, and community
          engagement. We strive to create an inclusive environment where
          students can learn from each other, share ideas, and work together on
          projects that push the boundaries of what is possible in robotics.
        </p>
      </div>
      <div className="mission">
        <h1 className="mission-heading">Our Vision</h1>
        <p>
          Our vision is to be a leading student chapter recognized for fostering
          creativity and excellence in robotics and automation. We aim to bridge
          the gap between academia and industry, preparing students for
          successful careers and contributing to advancements in the field of
          robotics.
        </p>
      </div>
      <div className="mission">
        <h1 className="mission-heading">What We Do</h1>
        <p>
          At IEEE RAS MUJ, we focus on a range of activities that enhance
          student's learning and practical experience in robotics and
          automation:
        </p>
        <ul>
          <li className="ltmargin" >
            <span className="w-3 h-3  bg-fuchsia-400 ml-1 inline-block transform rotate-45"></span>{" "}
            <strong className="text-fuchsia-300">Workshops : </strong> We
            organize hands-on workshops on robotics, automation, and related
            technologies, providing students with the opportunity to work with
            advanced tools and systems.
          </li>
          <li className="ltmargin">
            <span className="w-3 h-3 bg-fuchsia-400 inline-block ml-1 transform rotate-45"></span>{" "}
            <strong className="text-fuchsia-300">Mentorship Programs :</strong>{" "}
            Our experienced members and faculty advisors mentor students,
            guiding them in their robotics projects, research, and skill
            development.
          </li>
          <li className="ltmargin">
            <span className="w-3 h-3 bg-fuchsia-400 inline-block ml-1 transform rotate-45"></span>{" "}
            <strong className="text-fuchsia-300">Robo-thons : </strong> We host
            competitive robotics challenges that encourage innovation, teamwork,
            and problem-solving.
          </li>
          <li className="ltmargin">
            <span className="w-3 h-3 bg-fuchsia-400 inline-block ml-1 transform rotate-45"></span>{" "}
            <strong className="text-fuchsia-300">
              Research Paper Discussions :{" "}
            </strong>{" "}
            Engaging sessions where students discuss the latest research in
            robotics, fostering a culture of knowledge sharing and
            collaboration.
          </li>
          <li className="ltmargin">
            <span className="w-3 h-3 bg-fuchsia-400 inline-block ml-1 transform rotate-45"></span>{" "}
            <strong className="text-fuchsia-300">Ideathons : </strong>{" "}
            Creativity-focused events where participants brainstorm and develop
            innovative ideas in robotics and automation.
          </li>
        </ul>
      </div>
      <div className="mission">
        <h1 className="mission-heading">Membership Benefits</h1>
        <p>Joining IEEE RAS MUJ offers numerous benefits for students:</p>
        <ul>
          <li className="ltmargin"> <span className="w-3 h-3 bg-fuchsia-400 inline-block ml-1 transform rotate-45"></span>{" "}Opportunities to participate in national and international competitions.</li>
          <li className="ltmargin"> <span className="w-3 h-3 bg-fuchsia-400 inline-block ml-1 transform rotate-45"></span>{" "}Networking with professionals in the field of robotics.</li>
          <li className="ltmargin"> <span className="w-3 h-3 bg-fuchsia-400 inline-block ml-1 transform rotate-45"></span>{" "}Access to resources such as journals, publications, and technical papers.</li>
          <li className="ltmargin"> <span className="w-3 h-3 bg-fuchsia-400 inline-block ml-1 transform rotate-45"></span>{" "}Participation in community service initiatives related to technology education.</li>
        </ul>
      </div>

        <div className="our-team">
          <h1 className="our-team-heading" >Meet Our Team</h1>
        </div>

    <Footer/>

    </div>
    </>
  );
};

export default About;
