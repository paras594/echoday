import React from "react";
import { WelcomeUser } from "./welcome-user";
import { MoodSelector } from "./mood-selector";
import { StackLayout } from "@progress/kendo-react-layout";
import "../styles/home-header.scss";

export const HomeHeader = () => {
  return (
    <div className="wrapper">
      <WelcomeUser />
      <MoodSelector />
    </div>
  );
};
