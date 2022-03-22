import React from "react";
import { Logo } from "../Logo/Logo";
import { NavButton } from "./NavButton/NavButton";
import "./Navigation.scss";

export const Navigation = () => {
  return (
    <div className="Navigation">
      <Logo />
      <div className="NavButtonContainer">
        <NavButton path="Posts" />
        <NavButton path="Log in" />
        <NavButton path="Sign up" />
      </div>
    </div>
  );
};
