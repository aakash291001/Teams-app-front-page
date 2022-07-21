import React from "react";
import SideBarOption from "./sideBarOption";
import { SidebarBottom, SidebarData, SidebarMore } from "../../../data/sidebar";
import "./sidebar.css";
export default function Sidebar() {
  const topOptions = SidebarData;
  const moreOption = SidebarMore;
  const bottomOptions = SidebarBottom;
  return (
    <div className="sidebar-container">
      <div className="sidebar-top">
        <div>
          {topOptions.map((option) => {
            return <SideBarOption option={option}  isActive={option.name==="calls"?true:false}/>;
          })}
        </div>
        <div className="sidebar-more">
          <div>
            {moreOption.map((option) => {
              return <SideBarOption option={option} isActive={true}/>;
            })}
          </div>
        </div>
        <div className="sidebar-bottom">
          <div>
            {bottomOptions.map((option) => {
              return <SideBarOption option={option} isActive={true}/>;
            })}
          </div>
        </div>
      </div>
      <div className="sidebar-bottom"></div>
    </div>
  );
}
