import React from "react";
import "./hero4.css";

import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const Hero4 = () => {
  return (
    <section className="container-hero4" id="hero4-scroll">
      <div className="main-container">
        <h2 className="hero-4-text text-xxl text-bolder center">
          Checking the Gate
        </h2>

        <div className="hero2-page-main">
          <p className=" text-lg text-bolder center">
            In the world of filmmaking, &quot;checking the gate&quot; is a
            crucial step to ensure that the film gate is clear of any debris
            before moving on to the next shot. This practice prevents hairs or
            fragments from ruining or distorting the film
          </p>

          <p className="text-lg text-bolder center">
            Similarly, NLP (Neuro-Linguistic Programming) eliminates the mental
            &quot;stray hairs&quot; that cloud our perception. By clearing these
            cognitive obstructions NLP enhances our thinking, paving the way for
            a clearer brighter dynamic future
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero4;
