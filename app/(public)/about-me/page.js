import React from "react";
import About from "./About";

export const metadata = {
  title: "Checking The Gate - About Me",
  description:
    "About me, I’m Susan Warwicker, a Life Coach and certified Advanced NLP Practitioner with over 25 years experience working on film and tv productions. This is your first step into changing your life. Book a free 20 minute phone call with me to discuss how coaching can help with what’s happening in your life. How to get in contact with Susan Warwicker, please call on 07979 470 966.",
  openGraph: {
    title: "Checking The Gate | Life Coach | London and South East Kent",
    description:
      "Unlock Your Potential with Expert Life Coaching. Achieve Goals, Enhance Well-Being, and Transform Your Life with Personalized Coaching Sessions. Start Your Journey Today!",
    type: "website",
    locale: "en_GB",
    url: `${process.env.NEXTAUTH_URL}/about-me`,
    siteName: "Checking The Gate",
  },
};

const Page = () => {
  return (
    <main>
      <About />
    </main>
  );
};

export default Page;
