import React from "react";
import "./contactfooter.css";

import img from "../../public/static/icons/whatsapp.svg";
import Image from "next/image";

// import { FaSms } from "react-icons/fa";

import { BsFillTelephoneFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

const ContactFooter = () => {
  return (
    <div id="cf-container">
      <a
        className="cf-box"
        id="cf-box-1"
        href="tel:+447956243954"
        aria-label="press phone link to call us"
      >
        <BsFillTelephoneFill id="cf-phone" aria-label="phone icon" /> Call
      </a>

      <a
        className="cf-box"
        id="cf-box-2"
        href="https://wa.me/7956243954"
        aria-label="press chat link to send chat message"
      >
        {/* <FaWhatsapp id="cf-wa" aria-label="sms chat icon" /> */}
        <Image
          src={img}
          aria-label="whatsapp icon"
          alt="whatsapp icon"
          id="cf-wa"
        />
        Chat
      </a>

      <a
        className="cf-box"
        id="cf-box-3"
        href="https://wa.me/7956243954"
        aria-label="press chat link to send chat message"
        target="_blank"
      >
        <Image
          src={img}
          aria-label="whatsapp icon"
          alt="whatsapp icon"
          id="cf-wa"
        />
        {/* <FaWhatsapp id="cf-wa" aria-label="sms chat icon" /> */}
      </a>
    </div>
  );
};

export default ContactFooter;
