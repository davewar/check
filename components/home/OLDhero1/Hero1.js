import React from "react";
import "./hero1.css";
import Link from "next/link";
import Discovery from "../../../components/discoveryCall/Discovery";

const Hero1 = () => {
  return (
    <section className="hero1">
      <div className="main-container border">
        <div className="hero1-section-1">
          <div className="item1">
            <h2 className="text-lg">
              I am a Life Coach, Certified Advanced NLP Practitioner & Mentor
            </h2>
            <p className="">
              No matter your past or the challenges you face, together we can
              create a present and future you&#39;ve always envisioned
            </p>

            <p>
              I specialise in the Entertainment Industry however I’ve coached
              people from all walks of life so I can help you regardless of your
              industry or background
            </p>
          </div>

          <div className="hero1-button-container">
            <div id="hero1-btn-divv">
              <Link id="one" className="hero1-btn" href="/about-me">
                About Me
              </Link>
            </div>

            <div id="hero1-btn-div center">
              <Link id="two" className="hero1-btn" href="/contact">
                CONTACT ME
              </Link>
            </div>
          </div>

          <div className="item3">
            <div className="middle">
              <Discovery />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
