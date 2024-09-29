import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const expandHeight = keyframes`
  0% {
    max-height: 2px;
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    max-height: 30vh;
    opacity: 1;
  }
`;

const pulseAnimation = keyframes`
  0%, 100% { 
    opacity: 0.5; 
    transform: scale(1);
  }
  50% { 
    opacity: 1; 
    transform: scale(1.5);
  }
`;

const Container = styled.div`
  background-color: rgba(0, 20, 40, 0.9);
  color: #fff;
  font-family: 'Orbitron', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  text-transform: uppercase;
  margin: 0;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  max-width: 600px;
  aspect-ratio: 16 / 9;
  position: relative;
  overflow: hidden;
  animation: ${expandHeight} 1.5s ease forwards;
`;

const Content = styled.div`
  overflow: hidden;
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  background-color: rgba(0, 30, 60, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  border: 1px solid rgba(0, 255, 255, 0.3);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  color: rgb(0, 255, 255);
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.7);
  margin: 0;
  padding: 20px;
  background: linear-gradient(45deg, transparent 10px, rgba(0, 255, 255, 0.1) 10px);
  background-size: 100% 100%;
  border: 1px solid rgba(0, 255, 255, 0.3);
  clip-path: polygon(0 0, 100% 0, 95% 50%, 100% 100%, 0 100%, 5% 50%);
`;

const Corner = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid rgb(0, 255, 255);
  z-index: 3;

  &.top-left {
    top: 0;
    left: 0;
    border-right: none;
    border-bottom: none;
  }

  &.top-right {
    top: 0;
    right: 0;
    border-left: none;
    border-bottom: none;
  }

  &.bottom-left {
    bottom: 0;
    left: 0;
    border-right: none;
    border-top: none;
  }

  &.bottom-right {
    bottom: 0;
    right: 0;
    border-left: none;
    border-top: none;
  }
`;

const Pulse = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: rgb(0, 255, 255);
  border-radius: 50%;
  animation: ${pulseAnimation} 2s infinite;

  &.pulse-1 { top: 10%; left: 5%; }
  &.pulse-2 { top: 20%; right: 8%; animation-delay: 0.5s; }
  &.pulse-3 { bottom: 15%; left: 7%; animation-delay: 1s; }
  &.pulse-4 { bottom: 25%; right: 6%; animation-delay: 1.5s; }
`;

const CircuitLine = styled.div`
  position: absolute;
  background-color: rgba(0, 255, 255, 0.3);
  z-index: 1;

  &.line-1 {
    top: 30%;
    left: -10%;
    width: 120%;
    height: 1px;
    transform: rotate(15deg);
  }

  &.line-2 {
    top: 60%;
    right: -10%;
    width: 120%;
    height: 1px;
    transform: rotate(-15deg);
  }

  &.line-3 {
    top: -10%;
    left: 20%;
    width: 1px;
    height: 120%;
    transform: rotate(15deg);
  }

  &.line-4 {
    bottom: -10%;
    right: 30%;
    width: 1px;
    height: 120%;
    transform: rotate(-15deg);
  }
`;

export const OurMoments = ({ title }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <Container ref={containerRef}>
      <Content>
        <Title>{title}</Title>
      </Content>
      <Corner className="top-left" />
      <Corner className="top-right" />
      <Corner className="bottom-left" />
      <Corner className="bottom-right" />
      <Pulse className="pulse-1" />
      <Pulse className="pulse-2" />
      <Pulse className="pulse-3" />
      <Pulse className="pulse-4" />
      <CircuitLine className="line-1" />
      <CircuitLine className="line-2" />
      <CircuitLine className="line-3" />
      <CircuitLine className="line-4" />
    </Container>
  );
};

