import Hero3 from "../components/home/hero3/Hero3";
import Hero4 from "../components/home/hero4/Hero4";
import First from "../components/home/first/First";
import Hero2 from "../components/home/hero2/Hero2";

export const metadata = {
  title: {
    default: "Checking The Gate",
    // template: "%s - Life Coach",
  },
  description:
    "Unlock Your Potential with Expert Life Coaching. Achieve Goals, Enhance Well-Being, and Transform Your Life with Personalized Coaching Sessions. Start Your Journey Today!",
  openGraph: {
    title: "Checking The Gate | Life Coach | London and South East Kent",
    description:
      "Unlock Your Potential with Expert Life Coaching. Achieve Goals, Enhance Well-Being, and Transform Your Life with Personalized Coaching Sessions. Start Your Journey Today!",
    type: "website",
    locale: "en_GB",
    url: `${process.env.NEXTAUTH_URL}`,
    siteName: "Checking The Gate",
  },
};

export default function Home() {
  return (
    <>
      <main className="main">
        <First />
        <Hero2 />
        <Hero3 />
        <Hero4 />
      </main>
    </>
  );
}
