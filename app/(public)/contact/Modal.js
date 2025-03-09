"use client";

import "./contact.css";
import React, { useState, useRef, useEffect } from "react";
import Form from "./Form";

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className="modal-backdrop"
      style={{ display: showModal ? "inline-block" : "none" }}
      aria-modal="true"
      aria-hidden={!showModal}
    >
      <div
        className="modal-content"
        role="dialog"
        aria-labelledby="modalTitle"
        ref={modalRef}
      >
        <Form closeModal={closeModal} />
      </div>
    </div>
  );
};

export default Modal;
