import "./main.css";

import Coaching from "./Coaching";
import LifeSectionOne from "./LifeSectionOne";
const Main = () => {
  return (
    <>
      <section className="hero-image">
        <LifeSectionOne />
      </section>
      <section>
        <Coaching />
      </section>
    </>
  );
};

export default Main;
