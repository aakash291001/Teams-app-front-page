import React from "react";
import "./rightFoldCards.css";
export default function rightFoldCards(props) {
  return (
    <div className="rightFoldCards-container">
      <img alt="Error" src={props.option.avatar} className="contact-avatar" />
      <div className="contact-info">
        <div className="contact-name">Name: {props.option.name}</div>
        <div className="contact-type">Profile: {props.option.type}</div>
        <div className="cards-icon">
          <div className="card-mic">
            <i class="fi fi-sr-microphone"></i>
          </div>
          <div className="card-cam">
            <i class="fi fi-sr-video-plus"></i>
          </div>
          <div className="card-more">
            <i class="fi fi-sr-menu-dots"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
