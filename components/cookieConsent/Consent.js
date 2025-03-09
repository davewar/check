"use client";
import React, { useEffect, useState } from "react";
import CookieConsent, {
  getCookieConsentValue,
  Cookies,
} from "react-cookie-consent";
import Link from "next/link";

import ReactGA from "react-ga4";
import "./consent.css";
// import { useLocation } from "react-router-dom";

import { usePathname } from "next/navigation";

const Consent = () => {
  const id = "G-4PYMHNSQY3";

  const pname = usePathname();

  // set to true for testing or live
  const ga4Live = true;
  const [showCookieCompo, setShowCookieComp] = useState(false); //
  const [show, setShow] = useState(true); //show cookie policy
  // cookie consent
  const [consent, setConsent] = useState({
    necessary: true,
    analytical: true,
  });

  const handleAccept = () => {
    if (ga4Live) {
      // add marketing later
      // console.log("here2");
      // console.log(consent.analytical);
      if (consent.analytical) {
        ReactGA.initialize(id);
        // console.log("here3");
        // ReactGA.send({ hitType: "pageview", page: pname });
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
      }
    }
  };

  const handleDecline = () => {
    //remove google analytics cookies if any
    Cookies.remove(`_ga_${id}`);
    Cookies.remove("_gat");
    Cookies.remove("_gid");
    Cookies.remove("_gtag");
  };

  // let location = useLocation();

  useEffect(() => {
    let isConsent = getCookieConsentValue();

    // if true then Ga4 is live
    if (ga4Live) {
      if (isConsent === true) {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
      }
    }
  }, [pname, ga4Live]);

  const onChange = (e, name) => {
    if (name === "analytical") {
      setConsent((prevState) => {
        return {
          ...prevState,
          analytical: !prevState.analytical,
        };
      });
    } else if (name === "marketing") {
      setConsent((prevState) => {
        return {
          ...prevState,
          marketing: !prevState.marketing,
        };
      });
    }
  };

  //delay the consent component
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCookieComp(true);
    }, 30000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="consent">
      <div className="main-container">
        {showCookieCompo && (
          <CookieConsent
            enableDeclineButton={false}
            onAccept={handleAccept}
            onDecline={handleDecline}
            buttonText="Okay"
            buttonStyle={{
              color: "white",
              background: "black",
              padding: "0.25em 0.5em",
            }}
            // declineButtonText="Reject"
            // declineButtonStyle={{
            //   color: "white",
            //   opacity: "0.4",
            //   padding: "0.25em 0.5em",
            // }}
            overlay={true}
          >
            This website uses cookies to ensure you get the best experience on
            our website.
            <button
              className="bob"
              aria-label="link to cookie page"
              onClick={() => setShow((prev) => !prev)}
            >
              Settings
            </button>
            {show && (
              <div className="consent-form">
                <div className="form-check">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    value=""
                    id="necessary"
                    name="necessary"
                    checked={consent.necessary}
                    onChange={(e) => onChange(e, "necessary")}
                  />
                  <label className="form-check-label" htmlFor="necessary">
                    <strong>Necessary cookies</strong>
                    <p>
                      Help with the basic functionality of our website, e.g
                      remember if you gave consent to cookies.
                    </p>
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="analytical"
                    checked={consent.analytical}
                    name="analytical"
                    onChange={(e) => onChange(e, "analytical")}
                  />
                  <label className="form-check-label" htmlFor="analytical">
                    <strong>Analytical cookies</strong>
                    <p>
                      Make it possible to gather statistics about the use and
                      trafiic on our website, so we can make it better.
                    </p>
                  </label>
                </div>
                {/* 
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="marketing"
                    checked={consent.marketing}
                    name="marketing"
                    onChange={(e) => onChange(e, "marketing")}
                  />
                  <label className="form-check-label" htmlFor="marketing">
                    <strong>Marketing cookies</strong>
                    <p>
                      Make it possible to show you more relevant social media
                      content and advertisements on our website and other
                      platforms.
                    </p>
                  </label>
                </div> */}
              </div>
            )}
            <Link
              href="/policy"
              className="private-btn"
              aria-label="link to the home page"
            >
              Privacy-Policy
            </Link>
          </CookieConsent>
        )}
      </div>
    </div>
  );
};

export default Consent;
