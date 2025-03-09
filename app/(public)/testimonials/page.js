import React from "react";
import Clients from "./Clients";

import Intro from "./Intro";

export const metadata = {
  title: "Testimonials",
};

const Page = () => {
  return (
    <main className="review-page">
      <Intro />
      <Clients />
    </main>
  );
};

export default Page;
