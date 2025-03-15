import React from "react";
import "./help.css";

const Help = () => {
  return (
    <>
      <h2 className="hero3-header center text-xl text-bolder">
        {" "}
        I am a Life Coach, Certified Advanced NLP Practitioner & Mentor
      </h2>

      <h2 className="text-bolder hero3-header  text-xl center">
        I can help with:
      </h2>
      <div className="ul-container">
        <div className="card">
          <div className="ul-part">
            <ul className="points text-md font-bolder">
              <li>Goal Achievement</li>
              <li>Starting Up A New Business</li>
              <li>Growing A Business</li>
              <li>Career Trajectory</li>
              <li>Change of Career</li>
              <li>Managing Businesses Effectively</li>
            </ul>
          </div>{" "}
        </div>

        <div className="card">
          <div className="ul-part">
            <ul className="points text-md font-bolder">
              <li>Life Transitions</li>
              <li>Confidence Building</li>
              <li>Breaking Bad Habits</li>
              <li>Improving Relationships</li>
              <li>Removing Self Limiting Beliefs</li>
              <li>Overcoming Fears</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="hero3-header text-md text-bolder">
        I can also help empower you to overcome Bullying and Harassment /
        Grievances / Raising Workplace Issues / Imposter Syndrome / Blocked
        Creativity / Mentoring
      </p>

      <p className="hero3-header text-md text-bolder">
        If you work in the Film &amp; Television Industry, I can help empower
        you to raise issues with Production/your HoD and help artistes/actors
        with blocked creativity. Life Coaching also available for HoD’s to help
        manage their departments/crews effectively &amp; with confidence
      </p>
    </>
  );
};

export default Help;
