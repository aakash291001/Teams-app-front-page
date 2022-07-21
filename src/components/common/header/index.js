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
            src="https://cdn-icons.flaticon.com/png/512/706/premium/706807.png?token=exp=1658355732~hmac=6d4caaa61798d5c5453fbf4be3ea1891"
          />
        </div>
      </div>
    </div>
  );
}
