import React from "react";
import "./NavButton.scss";

export const NavButton = (props) => {
  return (
    <div className="NavButtonContainer">
      <button className="NavButton">{props.path}</button>
    </div>
  );
};
