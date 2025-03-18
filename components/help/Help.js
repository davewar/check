import React from "react";
import "./help.css";

const Help = () => {
  return (
    <>
      <p className="hero3-header center help-text-lg text-bolder">
        {" "}
        I am a Life Coach, Certified Advanced NLP Practitioner & Mentor
      </p>

      <p className="hero3-header center help-text-lg text-bolder">
        I can help with:
      </p>
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
        If you work in the Film & Television Industry, I can help empower you to
        raise issues with Production/your HoD. I offer support to HoD’s to
        manage their departments/crews effectively & with confidence. I can also
        help with Imposter Syndrome when switching departments and moving up to
        higher grades
      </p>

      <p className="hero3-header text-md text-bolder">
        Life Coaching also available for Artistes, Writers, Directors &
        Executives with blocked creativity, confidence issues and any other
        areas where you would like to feel more motivated or empowered
      </p>
    </>
  );
};

export default Help;
