"use client";
import React from "react";
import "./first.css";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Hero1 from "../hero1/Hero1";
import { myFont } from "../../../app/layout";

const First = () => {
  // const comp = useRef(null);

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const t1 = gsap.timeline();
  //     t1.from("#intro-slider", {
  //       xPercent: "-100",
  //       duration: 1.3,
  //       delay: 0.3,
  //     })

  //       .to("#intro-slider", {
  //         xPercent: "-100",
  //         delay: 0.5,
  //         duration: 1.3,
  //       })

  //       .from("#welcome", {
  //         opacity: 0,
  //         duration: 0.5,
  //       });
  //   }, comp);

  //   return () => ctx.revert();
  // }, []);
  return (
    <div className="first">
      <div id="welcome">
        <Hero1 />
      </div>
    </div>
  );
};

export default First;
