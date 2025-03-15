"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import Link from "next/link";

import { myLunaFont } from "../../../app/layout";

const Page = () => {
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
              <span className="desktop">Click </span>on “start now” below to get
              in touch to find out how I can help you
            </p>
          </div>

          <div className="bottom-container-div">
            <div className={`contact-quoter ${myLunaFont.className} `}>
              <h4 className="text-lg center text-bolder">
                "You can be great just by being yourself"
              </h4>
              <h4 className="text-lg center text-bolder">~ Spielberg</h4>
            </div>
            <h4 className="dw-underline ">Useful Resources</h4>

            <div className="usefull-links-container ">
              <div className="text-sm">
                
                <Link
                  className="outside-link"
                  href="https://filmtvcharity.org.uk/"
                  target="_blank"
                  rel="me"
                  aria-label="link to filmtvcharity.org.uk"
                >
                  filmtvcharity.org.uk
                </Link>{" "}
              </div>
              <div className="text-sm">
                <Link
                  className="outside-link"
                  href="https://wholepicturetoolkit.org.uk/"
                  target="_blank"
                  rel="me"
                  aria-label="link to filmtvcharity.org.uk"
                >
                  wholepicturetoolkit.org.uk
                </Link>
              </div>
            </div>
          </div>
        </div>

        {showModal && (
          <Modal showModal={showModal} setShowModal={setShowModal} />
        )}
      </div>
    </div>
  );
};

export default Page;
