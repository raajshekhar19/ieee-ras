import React, { useEffect, useRef } from 'react';
import "../../styles/ourmoments.css";

export const OurMoments = ({ title }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('our-moments__container--visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
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
        <div ref={containerRef} className="our-moments__container">
            <div className="our-moments__content">
                <h2 className="our-moments__title">{title}</h2>
            </div>
            <div className="our-moments__corner our-moments__corner--tl"></div>
            <div className="our-moments__corner our-moments__corner--tr"></div>
            <div className="our-moments__corner our-moments__corner--bl"></div>
            <div className="our-moments__corner our-moments__corner--br"></div>
            <div className="our-moments__pulse our-moments__pulse--1"></div>
            <div className="our-moments__pulse our-moments__pulse--2"></div>
            <div className="our-moments__pulse our-moments__pulse--3"></div>
            <div className="our-moments__pulse our-moments__pulse--4"></div>
        </div>
    );
};