import React from "react";
import About from "./About";

export const metadata = {
  title: "About Me",
  description:
    "About me, I’m Susan Warwicker, a Life Coach and certified Advanced NLP Practitioner with over 25 years experience working on film and tv productions",
};

const Page = () => {
  return (
    <main>
      <About />
    </main>
  );
};

export default Page;
