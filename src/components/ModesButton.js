import React from "react";
import "../index.css";
import "../styles/ModesButton.css";

export default function ModesButton(props) {
  return (
    <div className="modes-button-container">
      <div
        className="modes-button"
        style={{
          border: props.enabled ? "2px solid #00D2DF" : "2px solid white",
        }}
      >
        <img
          src={props.icon}
          style={{
            filter: props.enabled
              ? "invert(71%) sepia(20%) saturate(6106%) hue-rotate(135deg) brightness(96%) contrast(101%)"
              : "invert(67%) sepia(10%) saturate(124%) hue-rotate(339deg) brightness(95%) contrast(89%)",
          }}
        />
      </div>
      <div className="modes-button-desc-container">
        <h2 className="modes-button-desc">{props.mode}</h2>
        <p className="on-off-toggle">{props.enabled ? "On" : "Off"}</p>
      </div>
    </div>
  );
}
