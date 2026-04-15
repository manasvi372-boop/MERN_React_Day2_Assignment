import React from "react";
import DevProfileCard from "./components/DevProfileCard";

const App = () => {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #12093a, #000000)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff"
    }}>
      <h1 style={{ marginBottom: "20px" }}>
        🚀 My Developer Portfolio
      </h1>

      <DevProfileCard developerIdentity="Manasvi" />

      <p style={{ marginTop: "20px", opacity: 0.8 }}>
        Built uniquely using React + custom logic ✨
      </p>
    </div>
  );
};

export default App;
