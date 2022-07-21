import React from "react";
import "./dailer.css";
export default function Dailer({ option, isActive }) {
  const classList = isActive ? "dailer-option active" : "dailer-option";
  return (
    <div className="dailer-container">
      <div className="dailer-avatar">{option.icon}</div>
      {option.name && <label className="dailer-name">{option.name}</label>}
      <div className="dailer-icon">
      <i className="dailer-mic fi fi-sr-microphone"></i>
      <i className="dailer-cam fi-sr-video-camera-alt"></i>
      </div>
    </div>
  );
}
