"use client";
import React from "react";
import "./first.css";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Hero1 from "../hero1/Hero1";
import { myFont } from "../../../app/layout";

const First = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();

      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(
          [
            "#title-4",
            "#title-1",
            "#title-2",
            "#title-2A",
            "#title-3",
            "#title-3A",
          ],
          {
            opacity: 0,
            // y: "+=50",
            // stagger: 0.5,
          }
        )
        .to(
          [
            "#title-4",
            "#title-1",
            "#title-2",
            "#title-2A",
            "#title-3",
            "#title-3A",
          ],
          {
            opacity: 1,
            y: "-=50",

            stagger: 0.5,
          }
        )
        .to(
          [
            "#title-4",
            "#title-1",
            "#title-2",
            "#title-2A",
            "#title-3",
            "#title-3A",
          ],
          {
            opacity: 0,
            y: "-=50",
            // delay: 0.3,
            stagger: 0.5,
          }
        )
        .to("#intro-slider", {
          xPercent: "-100",
          // delay: 0.5,
          delay: 0,
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <div className="first">
      <div className="relative" ref={comp}>
        <div id="intro-slider" className={`section-1 ${myFont.className} `}>
          <h1 className=" intro" id="title-4">
            I AM A{" "}
          </h1>
          <h1 className="text-9xl" id="title-1">
            LIFE COACH
          </h1>
          <h1 className="text-9xl" id="title-2">
            CERTIFIED
          </h1>
          <h1 className="text-9xl" id="title-2A">
            NLP PRACTIONER
          </h1>
          <h1 className="text-9xl" id="title-3">
            <span className="title-long">FILMING INDUSTRY EXPERT</span>
            <span className="title-short">ACCREDITED</span>
          </h1>
          <h1 className="text-9xl" id="title-3A">
            MENTOR
            {/* <span className="title-long">MENTOR</span> */}
            {/* <span className="title-short">SHORT TEXT HERE 2</span> */}
          </h1>
        </div>

        <div id="welcome">
          <Hero1 />
        </div>
      </div>
    </div>
  );
};

export default First;
