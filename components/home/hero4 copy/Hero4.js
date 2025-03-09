import React from "react";
import "./hero4.css";

import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const Hero4 = () => {
  return (
    <section className="container">
      <div className="background-image1"></div>
      <div className="main-container">
        <div className="text">
          {/* <h1>Your Text Here</h1>
          <p>This text will remain fully opaque.</p> */}

          <div className="main-container1 ">
            <h1 className="hero-4-text">Checking the Gate</h1>

            <div className="hero2-page-main ">
              <p className="start-paragraph ">
                In the world of filmmaking, &quot;checking the gate&quot; is a
                crucial step to ensure that the film gate is clear of any debris
                before moving on to the next shot. This practice prevents hairs
                or fragments from ruining or distorting the film
              </p>

              <p className="start-paragraph ">
                Similarly, NLP (Neuro-Linguistic Programming) eliminates the
                mental &quot;stray hairs&quot; that cloud our perception. By
                clearing these cognitive obstructions NLP enhances our thinking,
                paving the way for a clearer brighter dynamic future
              </p>
            </div>
            {/* 
            <div className="home-page-quot">
              <h4 className="">
        
                "You can be great just by being yourself"
          
              </h4>
              ~ Spielberg
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero4;
