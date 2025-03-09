import React from "react";

const Denied = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <h1 style={{ color: "red" }} className="text-bold">
        Access Denied!
      </h1>
    </div>
  );
};

export default Denied;
