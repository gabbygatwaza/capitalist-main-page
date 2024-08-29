import React from "react";

const ComingSoon = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#282c34",
        color: "#ffffff",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Coming Soon</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        We're on this Feature Soon Updates are on the Way. Stay tuned!
      </p>
    </div>
  );
};

export default ComingSoon;
