import React from "react";
import "./coaching.css";
import Link from "next/link";

const Coaching = () => {
  return (
    <section className="serviceBox" id="coaching-scroll">
      <div className="main-container ">
        <div className="box-service">
          <h1 className="text-xxl text-bolder center">Life Coaching</h1>

          <h4 className="text-bolder text-lg ">How I Can Help</h4>

          <p className="text-md">
            You’re just a phone call away from figuring exactly how to change
            your life and that’s where I can help. I will help by removing your
            self-limiting beliefs, reframing your perceptual maps, helping set
            your goals and by being your accountability partner. You will soon
            begin to realise that your possibilities are endless. So contact me
            to book a free Bigger Picture Call and take the lid of your dreams
          </p>
          <h4 className="text-bolder text-lg ">What is Life Coaching?</h4>
          <p className="text-md">
            Life coaching combined with NLP can radically transform your
            mindset, life and career. By tapping into your personal resources,
            you can create core changes. You have all the answers within you.
            Life Coaching helps bring these to the surface, empowering you to
            make the positive life changes you need
          </p>
          <h4 className="text-lg text-bolder">What is NLP® </h4>
          <p className="text-md">
            NLP, or Neuro-Linguistic Programming, founded in the 1970s, has
            empowered countless individuals to reshape their lives. It analyses
            strategies for achieving goals and highlights how our thoughts and
            language influence our past, present and future. NLP helps reframe
            our limiting beliefs and when paired with S.M.A.R.T. goals and
            strategies, it can transform our present as well as our future
          </p>

          <p className=" text-lg  text-bolder center " id="center-text">
            Life coaching with NLP can radically transform your life
          </p>
          <div id="coaching-btn-div">
            <Link id="services-btn" className="" href="/contact">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coaching;
