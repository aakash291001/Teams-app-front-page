import React from "react";
import "./header.css";
export default function Header() {
  return (
    <div className="header-container">
      <div className="header-menu">
        <i class="fi fi-sr-apps-add"></i>
      </div>
      <div className="header-leftFold">
        <div className="header-label">Microsoft Teams</div>
      </div>
      <div className="header-rightFold">
        <div className="header-search">
          <i class="fi fi-bs-search">
            <input placeholder="Search"></input>
          </i>
        </div>
        <div className="header-profile">
          <div className="header-options">
            <i class="fi fi-br-menu-dots"></i>
          </div>
          <img
            className="header-avatar"
            src="https://cdn-icons-png.flaticon.com/512/236/236832.png"
          />
        </div>
      </div>
    </div>
  );
}
