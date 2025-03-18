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
