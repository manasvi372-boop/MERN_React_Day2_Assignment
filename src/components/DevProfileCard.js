import React, { useState } from "react";

const DevProfileCard = ({ developerIdentity }) => {
  const [devStatusTracker, setDevStatusTracker] = useState("Available");

  const anubratSkillMatrix = [
    "React",
    "Node.js",
    "MongoDB",
    "JavaScript",
    "Express"
  ];

  const handleStatusSwitch = () => {
    let updatedState;

    if (devStatusTracker === "Available") {
      updatedState = "Busy";
    } else {
      updatedState = "Available";
    }

    console.log("Status updated -> " + updatedState + " 💡");
    setDevStatusTracker(updatedState);
  };

  return (
    <div style={{
      width: "320px",
      padding: "25px",
      borderRadius: "15px",
      background: "#ffffff",
      boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
      textAlign: "center",
      color: "#222"
    }}>
      <h2 style={{ marginBottom: "10px", color: "#333" }}>
        👨‍💻 {developerIdentity}
      </h2>

      <p style={{ fontSize: "16px" }}>
        Status: <strong style={{ color: "#007bff" }}>
          {devStatusTracker}
        </strong>
      </p>

      <button
        onClick={handleStatusSwitch}
        style={{
          marginTop: "10px",
          padding: "10px 18px",
          border: "none",
          borderRadius: "8px",
          background: "linear-gradient(135deg, #007bff, #00c6ff)",
          color: "#fff",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Toggle Status
      </button>

      <h3 style={{ marginTop: "20px", color: "#444" }}>
        💡 Skills
      </h3>

      <ul style={{
        listStyle: "none",
        padding: 0
      }}>
        {anubratSkillMatrix.map((skillItem, indexKey) => (
          <li
            key={indexKey}
            style={{
              padding: "6px",
              margin: "5px 0",
              background: "#f1f5f9",
              borderRadius: "6px"
            }}
          >
            {skillItem}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DevProfileCard;