import React from "react";
import { callMenuData, DialerList } from "../../../data/calls";
import Dailer from "./dialer";
import "./LeftFold.css";
import LeftFoldOption from "./leftFoldOption";
export default function LeftFold() {
  const menuOption = callMenuData;
  const dialerOption = DialerList;
  return (
    <div className="leftFold-container">
      <div className="leftFold-menu">
        <label className="menu-label">Calls</label>
        <div>
          {menuOption.map((option) => {
            return (
              <LeftFoldOption
                option={option}
                isActive={option.name === "calls" ? true : false}
              />
            );
          })}
        </div>
      </div>
      <div className="leftFold-dailer">
        <label className="dailer-label">Suggested</label>
        <div className="dailer-search">
          <input placeholder="Search by name" />
        </div>
        <div>
          {dialerOption.map((option) => {
            return (
              <Dailer
                option={option}
                isActive={option.name === "calls" ? true : false}
              />
            );
          })}
        </div>
        <div className="dailer-bottom">
          <i className=" mic fi fi-sr-microphone"></i>
          <i className="cam fi fi-sr-video-camera-alt"></i>
        </div>
      </div>
    </div>
  );
}
