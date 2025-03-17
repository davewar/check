import React from "react";
import "./services.css";
import Link from "next/link";
import Help from "../../../components/help/Help";
import { special } from "../../layout";
import Arrow from "../../../components/arrow/Arrow";

const PriceBox = () => {
  return (
    <section className="priceBox-new">
      {/* <div className={`main-container ${special.className}`}> */}
      <div className="main-container">
        <div className="prices">
          <div className="first-section">
            <h2 className="text-xxl">My Services</h2>

            <p className="">
              I am a Life Coach, Certified Advanced NLP Practitioner and Mentor
              offering a variety of packages as well as one off sessions. By
              removing self-limiting beliefs, I can empower you to create goals
              that will lead you to your true purpose in life. I can help you
              regardless of your situation, background, age or any obstacle you
              believe is holding you back because I believe you&#39;re not
              broken, only that you&#39;re temporarily stuck
            </p>
          </div>

          <div className="price-container">
            <div className="price-card-new">
              <h2 className="price-h2 ">The Bigger Picture Call</h2>

              <p className="">
                This is your first step into changing your life. Book a free 20
                minute phone call with me to discuss how coaching can help with
                what’s happening in your life
              </p>

              {/* <p className="text-bold text-md price"> */}
              <p className="">Book a free 20 minute Call today! </p>
            </div>

            <div className="price-card-new">
              <h2 className="price-h2">
                One off or Emergency sessions available
              </h2>
              <p className="">
                Emergency one off sessions available for personal or work place
                issues that require immediate attention. These 45 minute
                sessions are for relieving stress &amp; tension and can also be
                geared for conflict resolution
              </p>
            </div>

            <div className="price-card-new">
              <h2 className="price-h2">3 Session Transformation Package</h2>
              <p className="">
                3 Sessions packages available for immediate short term issues.
                Sessions last between 45 minutes to 1 hour. Ongoing support
                available in between sessions
              </p>
            </div>

            <div className="price-card-new">
              <h2 className=" price-h2">6 Session Transformation Packages</h2>
              <p className="">
                6 Sessions packages available for big life changes such as
                starting up a new business, career changes, relationship issues
                or a new direction in life. Sessions last between 45 minutes to
                1 hour. Ongoing support available in between sessions
              </p>
            </div>
          </div>
          <div className="discount">
            <p>
              Prices between £75 and £150 per session. Contact me to discuss
              prices for transformation packages
            </p>

            <p>
              Discounted rates available for Students, Runners &amp;, Trainees
            </p>
          </div>

          <p className="price-h2 text-md text-bolder center">
            Ongoing Support Packages Also Available – Contact me for further
            info
          </p>

          <p className="price-h2 text-md text-bolder center last-paragraph">
            If you are a production company or a broadcaster, contact me to
            discuss how we can support our valuable crews and enhance mental
            health & productivity on your production
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriceBox;
