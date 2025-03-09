import React from "react";
import "./test.css";

import PriceBox from "./Services.js";
import Help from "../../../components/help/Help";
import Link from "next/link";

const Test = () => {
  return (
    <>
      <section className="container">
        <PriceBox />
      </section>

      <section className="container2">
        <div className="main-container">
          <Help />
          {/* 
          <div className="services-button-container"> */}
          <div id="services-btn-div">
            <Link id="two" className="hero1-btn" href="/contact">
              CONTACT ME
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Test;
