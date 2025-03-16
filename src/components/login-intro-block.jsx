import React from "react";
import { Typography } from "@progress/kendo-react-common";
import logo from "../assets/logo.svg";

export const LoginIntroBlock = () => {
  return (
    <div style={{ marginBottom: "40px" }}>
      <img src={logo} width={140} />
      <div style={{ height: "40px" }} />
      <Typography.h1 className="semibold">
        Take It One Day <br />
        at a Time
      </Typography.h1>
      <Typography.p fontSize="xlarge" style={{ lineHeight: "1.5" }}>
        Every day holds a story — your wins, your lessons, your moments. Let's
        capture them, organize them, and make each day meaningful.
      </Typography.p>
    </div>
  );
};
