import React from "react";
import Clients from "./Clients";

import Intro from "./Intro";
import Link from "next/link";
import { myLunaFont } from "../../../app/layout";

export const metadata = {
  title: "Checking The Gate - Testimonials",
  description:
    "Life coaching clients have shared their success stories. To book a session please call Susan Warwicker on 07979 470 966.",
  openGraph: {
    title: "Checking The Gate | Life Coach | London and South East Kent",
    description:
      "Unlock Your Potential with Expert Life Coaching. Achieve Goals, Enhance Well-Being, and Transform Your Life with Personalized Coaching Sessions. Start Your Journey Today!",
    type: "website",
    locale: "en_GB",
    url: `${process.env.NEXTAUTH_URL}/testimonials`,
    siteName: "Checking The Gate",
  },
};

const Page = () => {
  return (
    <main className="review-page">
      <Intro />
      <Clients />

      <div className="bottom-container-div">
        <div className="main-container">
          <div className={`contact-quoter ${myLunaFont.className} `}>
            <div className="container-word ">
              <div className="word w1 text-bolder text-lg">
                "You can be great just by being yourself ~ Spielberg"
              </div>
              <div className="word w2 text-bolder text-lg">
                {" "}
                "Negativity is the enemy of creativity ~ David Lynch"
              </div>
              <div className="word w3 text-bolder text-lg">
                {" "}
                "Life isn’t black and white, it’s a million grey areas ~ Ridley
                Scott"
              </div>
              <div className="word w4 text-bolder text-lg">
                {" "}
                "you can’t do it unless you imagine it ~ George Lucas"
              </div>
              <div className="word w5 text-bolder text-lg">
                {" "}
                "The only safe thing to do is take a chance ~ Mike Nichols"
              </div>
            </div>
            {/* <p className="center text-bolder text-lg">
              "You can be great just by being yourself ~ Spielberg"
            </p> */}
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
      </div>
      <p className="dw-underline text-sm center">Useful Resources</p>
      <div className="main-container">
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
      </div>
    </main>
  );
};

export default Page;
