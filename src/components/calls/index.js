import React from "react";
import Header from "../common/header";
import Sidebar from "../common/sidebar";
import LeftFold from "./leftFold/index";
import RightFold from "./rightFold/index";
import './calls.css';
export default function Calls() {
  return (
    <div className="calls-container">
      <Header />
      <div className="calls-body">
        <div className="calls-sidebar">
          <Sidebar />
        </div>
        <div className="calls-leftFold">
          <LeftFold />
        </div>
        <div className="calls-rightFold">
          <RightFold />
        </div>
      </div>
    </div>
  );
}
