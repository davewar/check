"use client";
import { useState } from "react";
import Link from "next/link";
import "./navbar.css";

import { usePathname } from "next/navigation";

import { GiHamburgerMenu } from "react-icons/gi";

import { ImCross } from "react-icons/im";
import Image from "next/image";
// import logoimg from "../../public/Capture (1).jpg";
import logoimg from "../../public/logo-120.webp";

import { useRouter } from "next/navigation";

import { myFont } from "../../app/layout";

import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  // console.log("data", session);
  const pname = usePathname();
  // console.log(pname);

  const router = useRouter();

  const [show, setShow] = useState(false);

  const handleToggle = (e) => {
    setShow((prev) => !prev);
  };

  const handleLogo = () => {
    if (pname !== "/") {
      router.push("/");
    }
  };

  return (
    <>
      <nav className="nav-menu">
        <div className="telephone-number">
          {" "}
          <FaPhoneAlt className="svg-icon" />
          <a className="white " href="tel:+447956243954">
            07979 470 966
          </a>
        </div>
        <div className="nav-container ">
          <div className="website-name" onClick={() => handleLogo()}>
            {/* <a href="/" className="nav-brand">
              LOGO
            </a> */}

            {/* <div className="nav-brand">LOGO</div> */}

            <Image
              src={logoimg}
              alt="company logo which shows a camera len outline in white with green background"
              className="logo"
              priority={true}
            />
            <h1 className="website-title  ">CHECKING THE GATE</h1>
            <p className="website-line">CHECK YOUR LENS, RESET AND REFRAME</p>
          </div>
          <button
            type="button"
            className="nav-button"
            onClick={() => handleToggle()}
          >
            {/* <i className="fas fa-bars"></i> */}
            {!show && (
              <GiHamburgerMenu
                id="cf-bar"
                aria-label="open nav menu button to show list of links"
              />
            )}
          </button>

          {/*  */}

          <div className={show ? "nav-overlay show-overlay" : "nav-overlay"}>
            <div className="nav-overlay-container">
              <button
                type="button"
                // className="nav-button"
                id="menu-hide-btn"
                onClick={() => handleToggle()}
              >
                {show && (
                  <ImCross id="cf-cross" aria-label="close nav menu button" />
                )}
              </button>

              <ul className={`nav-links ${myFont.className}              `}>
                <li onClick={() => handleToggle()}>
                  <Link
                    href="/"
                    className="nav-link link-item underline"
                    aria-label="link to the services page"
                  >
                    Home
                  </Link>
                </li>

                <li onClick={() => handleToggle()}>
                  <Link
                    href="/life-coaching"
                    className="nav-link link-item underline"
                    aria-label="link to the working with me page"
                  >
                    Life Coaching
                  </Link>
                </li>

                {/* <li onClick={handleToggle}>
                  <Link
                    href="/test2"
                    className="nav-link link-item underline"
                    aria-label="link to the services page"
                  >
                    TEST
                  </Link>
                </li> */}

                <li onClick={() => handleToggle()}>
                  <Link
                    href="/services"
                    className="nav-link link-item underline"
                    aria-label="link to the services page"
                  >
                    Services
                  </Link>
                </li>

                <li onClick={() => handleToggle()}>
                  <Link
                    href="/about-me"
                    className="nav-link link-item underline"
                    aria-label="link to the services page"
                  >
                    About Me
                  </Link>
                </li>
                <li onClick={() => handleToggle()}>
                  <Link
                    href="/testimonials"
                    className="nav-link link-item underline"
                    aria-label="link to the testimonals page"
                  >
                    Testimonials
                  </Link>
                </li>

                <li onClick={() => handleToggle()}>
                  <Link
                    href="/contact"
                    className="nav-link link-item underline"
                    aria-label="link to contact us page"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
