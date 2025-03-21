import React from "react";
import "./test.css";

import PriceBox from "./Services.js";
import Help from "../../../components/help/Help";
import Link from "next/link";
import Arrow from "../../../components/arrow/Arrow";

const Test = () => {
  return (
    <>
      <section className="container">
        <PriceBox />
        <Arrow idvalue="#services2-scroll" />
      </section>

      <section className="container2" id="services2-scroll">
        <div className="main-container">
          <div className="center-container">
            <Help />
            {/* 
          <div className="services-button-container"> */}
            <div id="services-btn1-div">
              <Link id="five" className="hero1-btn" href="/contact">
                CONTACT ME
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Test;
