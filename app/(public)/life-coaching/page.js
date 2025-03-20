import Main from "./Main";

export const metadata = {
  title: "Checking The Gate - Life Coach",
  description:
    "Unlock Your Potential with Expert Life Coaching. Achieve Goals, Enhance Well-Being, and Transform Your Life with Personalised Coaching Sessions. Start Your New Life Today!",
  openGraph: {
    title:
      "Checking The Gate | Life Coach | London, Bedfordshire, Berkshire, Buckinghamshire, Essex, Hertfordshire, Surrey, Kent & Nationwide",
    description:
      "Unlock Your Potential with Expert Life Coaching. Achieve Goals, Enhance Well-Being, and Transform Your Life with Personalised Coaching Sessions. Start Your New Life Today!",
    type: "website",
    locale: "en_GB",
    url: `${process.env.NEXTAUTH_URL}/life-coaching`,
    siteName: "Checking The Gate",
  },
};
const Page = () => {
  return (
    <main>
      <Main />
    </main>
  );
};

export default Page;
