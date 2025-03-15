import React from "react";
import "./LifeSectionOne.css";
import Link from "next/link";
import Arrow from "../../../components/arrow/Arrow";

const LifeSectionOne = () => {
  return (
    <section className="life-coach-section">
      <div className="main-container border">
        <div className="lf-section-1">
          <div className="item1">
            <h2 className="text-xxl text-bolder">
              I am a Life Coach, Certified Advanced NLP Practitioner & Mentor
            </h2>
            <p className="text-lg text-bolder">
              No matter your past or the challenges you face, together we can
              create a present and future you&#39;ve always envisioned
            </p>

            <p className="text-md text-bolder">
              I specialise in the Entertainment Industry however I’ve coached
              people from all walks of life so I can help you regardless of your
              industry or background
            </p>
          </div>

          <div className="hero1-button-container">
            <div id="hero1-btn-div">
              <Link id="one" className="hero1-btn" href="/about-me">
                About Me
              </Link>
            </div>

            <div id="hero1-btn-div">
              <Link id="two" className="hero1-btn" href="/contact">
                CONTACT ME
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Arrow idvalue="#coaching-scroll" />
    </section>
  );
};

export default LifeSectionOne;
