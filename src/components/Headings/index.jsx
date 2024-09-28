import React from 'react';
import '../../styles/heading.css' // Assuming you choose to use an external CSS file

export const Headings = ({ headingname } ) => {
    return (
        <div className="our-moments-container">
            <div className="our-moments-content">
                <h2 className="text-5xl" >{headingname}</h2>
            </div>
            <div className="corner corner-tl"></div>
            <div className="corner corner-tr"></div>
            <div className="corner corner-bl"></div>
            <div className="corner corner-br"></div>
            <div className="pulse pulse-1"></div>
            <div className="pulse pulse-2"></div>
            <div className="pulse pulse-3"></div>
            <div className="pulse pulse-4"></div>
        </div>
    );
};

 
