import React from "react";
import Clients from "./Clients";

import Intro from "./Intro";
import Link from "next/link";
import { myLunaFont } from "../../../app/layout";

export const metadata = {
  title: "Testimonials",
};

const Page = () => {
  return (
    <main className="review-page">
      <Intro />
      <Clients />

      <div className="bottom-container-div">
        <div className={`contact-quoter ${myLunaFont.className} `}>
          <p className="center text-bolder text-lg">
            "You can be great just by being yourself ~ Spielberg"
          </p>
          {/* <p className="center text-bolder text-lg">
            "Negativity is the enemy of creativity ~ David Lynch"
          </p>
          <p className="center text-bolder text-lg">
            "Life isn’t black and white, it’s a million grey areas ~ Ridley
            Scott"
          </p>

          <p className="center text-bolder text-lg">
            "you can’t do it unless you imagine it ~ George Lucas"
          </p>

          <p className="center text-bolder text-lg">
            "The only safe thing to do is take a chance ~ Mike Nichols"
          </p> */}
        </div>
      </div>
      <p className="dw-underline text-sm center">Useful Resources</p>
      <div className="usefull-links-container">
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
    </main>
  );
};

export default Page;
