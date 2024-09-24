import React from "react";
import logo from "../../assets/images/logo.jpg";
import insta from "../../assets/images/instagram.png"
import linkedin from "../../assets/images/linkedin.png"
import medium from "../../assets/images/medium.png"
import twitter from "../../assets/images/twitter.png"
import "../../styles/footer.css";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="sliced-corner ">
      <footer className="foo-footer">
        <a href="https://www.ieee-ras.org/">
        <div className="button">
              <div className="button-inner">
              <img className="imagefooter" src={logo} alt="logo" />
            </div>
         </div>
         </a>

        <a href="https://www.instagram.com/ieeerasmuj/" className="for-redirect-to-sm">
        <div className="button">
              <div className="button-inner">
        <span className="for-footer-flex"><img className="for-footer" src={insta}></img>@ieeerasmuj</span>
        </div>
        </div>
        </a>
        <a href="https://www.linkedin.com/company/ieee-ras-muj/mycompany/" className="for-redirect-to-sm">
        <div className="button">
              <div className="button-inner">
        <span className="for-footer-flex"><img className="for-footer" src={linkedin}></img>IEEE RAS MUJ</span>
        </div>
        </div></a>
        <a href="https://medium.com/@ieeerasmuj" className="for-redirect-to-sm">
        <div className="button">
              <div className="button-inner">
                <span className="for-footer-flex"><img className="for-footer" src={medium}></img>IEEE RAS MUJ</span>
                </div>
                </div>
                </a>
        <a href="https://x.com/IEEERASMUJ" className="for-redirect-to-sm">
        <div className="button">
        <div className="button-inner">
        <span className="for-footer-flex"><img className="for-footer" src={twitter}></img>@IEEERASMUJ</span>
        </div>
        </div>
        </a>
      </footer>
      </div>
    </div>
  );
};