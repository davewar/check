import React from "react";
import Test from "./Test";

export const metadata = {
  title: "Checking The Gate - My Services",
  description:
    "I’m Susan Warwicker, a Life Coach and certified Advanced NLP Practitioner.  I coach people from all walks of life and industries but specialise in the Entertainment Sector with over 25 years experience working on film and tv productions. This is your first step into changing your life. Book a free 20 minute phone call with me to discuss how coaching can help. To get in contact with Susan Warwicker, call on 07979 470 966 or email checkingthegateltd@gmail.com",
  openGraph: {
    title:
      "Checking The Gate | Life Coach | London, Bedfordshire, Berkshire, Buckinghamshire, Essex, Hertfordshire, Surrey, Kent & Nationwide",
    description:
      "Unlock Your Potential with Expert Life Coaching. Achieve Goals, Enhance Well-Being, and Transform Your Life with Personalised Coaching Sessions. Start Your New Life Today!",
    type: "website",
    locale: "en_GB",
    url: `${process.env.NEXTAUTH_URL}/services`,
    siteName: "Checking The Gate",
  },
};
const Page = () => {
  return <Test />;
};

export default Page;
