"use client";
import React, { useState } from "react";
import Modal from "./Modal";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="background">
      <div className="main-container">
        <div className="page-container" onClick={() => setShowModal(true)}>
          <div className="contact-info">
            <h2 className="center text-bolder ">
              <span className="mobile">Press </span>
              <span className="desktop">Click </span>on “start now” to contact
              me
            </h2>
            <p className="center text-bold white">
              Get ready to “Check Your Gate” and make life altering changes
            </p>
          </div>
        </div>

        {showModal && (
          <Modal showModal={showModal} setShowModal={setShowModal} />
        )}
      </div>
    </div>
  );
};

export default Contact;
