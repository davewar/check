import React from "react";
import "./hero1.css";
import Link from "next/link";
import Arrow from "../../arrow/Arrow";

const Hero1 = () => {
  return (
    <section className="hero1-home">
      <div className="main-container border">
        <div className="hero1-section-1">
          <div className="item1-hero1">
            <h2 className="text-xxl text-bolder">Life Coaching With Me</h2>
            <p className="text-lg text-bolder">
              How would you feel if you knew that you were capable of achieving
              all your dreams? Amazing right?
            </p>

            <p className="text-md text-bolder">
              And I believe YOU can. I can help unlock the potential within you
              to achieve the life you’ve imagined and deserve. By collaborating
              with me, we’ll create an action plan that will turn your life
              around and kick start your new adventure
            </p>

            <p className="text-md text-bolder">
              Invest in yourself today and take the lid off your dreams
            </p>
          </div>

          <div className="hero1-button-container">
            <div id="hero1-btn-div">
              <Link id="three" className="hero1-btn" href="/about-me">
                About Me
              </Link>
            </div>

            <div id="hero1-btn-div center">
              <Link id="four" className="hero1-btn" href="/contact">
                CONTACT ME
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Arrow idvalue="hero2-scroll" />
    </section>
  );
};

export default Hero1;
