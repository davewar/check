import React from "react";
import "./hero2.css";

// import { FaQuoteLeft } from "react-icons/fa";
// import { FaQuoteRight } from "react-icons/fa";
import { myLunaFont } from "../../../app/layout.js";

const Hero2 = () => {
  return (
    <>
      <section className="hero-page2">
        <div className="parallax-home2">
          <div className="parallax-inner2">
            <div className="main-container  ">
              <div className="hero2-box">
                <div className={`hero2-quote ${myLunaFont.className} `}>
                  <h2 className="text-xxl text-bolder">
                    "However Vast the Darkness we must supply our own light"
                  </h2>
                  <h4 className="text-xl">Kubrick</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero2;
