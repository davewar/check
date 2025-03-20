import Contact from "./Contact";

export const metadata = {
  title: "Checking The Gate - Contact Me",
  description:
    "Contact me  - This is your first step into changing your life. Book a free 20 minute phone call with me to discuss how coaching can help. To get in contact with Susan Warwicker, call on 07979 470 966 or email checkingthegateltd@gmail.com",
  openGraph: {
    title:
      "Checking The Gate | Life Coach | London, Bedfordshire, Berkshire, Buckinghamshire, Essex, Hertfordshire, Surrey, Kent & Nationwide",
    description:
      "Unlock Your Potential with Expert Life Coaching. Achieve Goals, Enhance Well-Being, and Transform Your Life with Personalised Coaching Sessions. Start Your New Life Today!",
    type: "website",
    locale: "en_GB",
    url: `${process.env.NEXTAUTH_URL}/contact`,
    siteName: "Checking The Gate",
  },
};

const Page = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default Page;
