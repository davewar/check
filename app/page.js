import Hero3 from "../components/home/hero3/Hero3";
import Hero4 from "../components/home/hero4/Hero4";
import First from "../components/home/first/First";
import Hero2 from "../components/home/hero2/Hero2";

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
