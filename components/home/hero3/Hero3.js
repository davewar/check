import React from "react";
import "./hero3.css";
import Link from "next/link";
import Help from "../../help/Help";

const Hero3 = () => {
  return (
    <section className="hero-3">
      <div className="main-container">
        <Help />
      </div>

      <div id="hero3-btn-div">
        <Link id="service-btn" className="" href="/services">
          MORE INFO
        </Link>
      </div>
    </section>
  );
};

export default Hero3;
