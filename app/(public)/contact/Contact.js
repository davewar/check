"use client";
import React, { useState } from "react";
import Modal from "./Modal";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="background">
      <div className="main-container">
        <div className="page-container" onClick={() => setShowModal(true)}>
          <div id="contact-info">
            <h2 className="text-lg center text-bolder">
              Get ready to “Check Your Gate” and make life altering changes
            </h2>

            <p className="center bolder text-md">
              <span className="mobile">Press </span>
              <span className="desktop">Click </span>on “start now” to find out
              how I can help you
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
