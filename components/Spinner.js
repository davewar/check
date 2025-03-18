// "use client";
import { BeatLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="spinner" style={{ backgroundColor: "#0c2752" }}>
      <BeatLoader color="#FFFFFF" speedMultiplier={1} />
    </div>
  );
};

export default Spinner;
