"use client";
import { ClipLoader, BeatLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="spinner2">
      <BeatLoader color="#000000" speedMultiplier={1} />
    </div>
  );
};

export default Spinner;
