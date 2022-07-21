import React from "react";
import { contactData } from "../../../data/contactCards";
import RightFoldCards from "./rightFoldCards";
import "./rightFold.css";
export default function RightFold() {
  const contactOptions=contactData;
  return (
    <div className="rightFold-container">
      <div className="rightFold-header">
        <label className="rightFold-label">Contacts</label>
      </div>
      <div className="rightFold-options">
        <div className="rightFold-search">
          <i class="fi fi-bs-search"></i>
          <input placeholder="Find a contact"></input>
        </div>
        <div className="rightFold-addContact">
          <i class="fi fi-bs-user-add"></i>
            <button className="rightFold-addBtn">Add contact</button>
        </div>
      </div>
      <div className="contactList">
      {
        contactOptions.map((option)=>{
          return<RightFoldCards option = {option}></RightFoldCards>
        })
      }
      </div>
    </div>
  );
}
