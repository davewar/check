import React from "react";
import "./hero2.css";

import Arrow from "../../arrow/Arrow";
import { myLunaFont } from "../../../app/layout.js";

const Hero2 = () => {
  return (
    <>
      <section className="hero-page2" id="hero2-scroll">
        <div className="parallax-home2">
          <div className="parallax-inner2">
            <div className="main-container  ">
              <div className="hero2-box">
                <div className={`hero2-quote ${myLunaFont.className} `}>
                  <div className="bottom-container-div">
                    <div className="container-word ">
                      <div className="word w1 text-bolder text-xxl">
                        "You can be great just by being yourself ~ Spielberg"
                      </div>
                      <div className="word w2 text-bolder text-xxl">
                        {" "}
                        "Negativity is the enemy of creativity ~ David Lynch"
                      </div>
                      <div className="word w3 text-bolder text-xxl">
                        {" "}
                        "Life isn’t black and white, it’s a million grey areas ~
                        Ridley Scott"
                      </div>
                      <div className="word w4 text-bolder text-xxl">
                        {" "}
                        "you can’t do it unless you imagine it ~ George Lucas"
                      </div>
                      {/* <div className="word w5 text-bolder text-xxl">
                        {" "}
                        "The only safe thing to do is take a chance ~ Mike
                        Nichols"
                      </div> */}

                      <div className="word w5 text-bolder text-xxl">
                        "However Vast the Darkness we must supply our own light
                        ~ Kubric"
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Arrow idvalue="#hero3-scroll" />
      </section>
    </>
  );
};

export default Hero2;
