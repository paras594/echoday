import { checkIcon } from "@progress/kendo-svg-icons";
import React from "react";
import illustration from "../assets/illustration.svg";
import { SvgIcon, Typography } from "@progress/kendo-react-common";

export const LoginIllustrationBlock = () => {
  return (
    <>
      <div>
        <div style={{ display: "flex", gap: 16, marginBottom: "12px" }}>
          <SvgIcon icon={checkIcon} size="xlarge" className="success" />
          <Typography.p fontSize="large" className="semibold">
            Plan your day
          </Typography.p>
        </div>
        <div style={{ display: "flex", gap: 16, marginBottom: "12px" }}>
          <SvgIcon icon={checkIcon} size="xlarge" className="success" />
          <Typography.p fontSize="large" className="semibold">
            Capture your thoughts
          </Typography.p>
        </div>
        <div style={{ display: "flex", gap: 16, marginBottom: "12px" }}>
          <SvgIcon icon={checkIcon} size="xlarge" className="success" />
          <Typography.p fontSize="large" className="semibold">
            Relive Your Best Moments
          </Typography.p>
        </div>
        <div style={{ display: "flex", gap: 16, marginBottom: "12px" }}>
          <SvgIcon icon={checkIcon} size="xlarge" className="success" />
          <Typography.p fontSize="large" className="semibold">
            Stay on Track
          </Typography.p>
        </div>
      </div>
      <img src={illustration} width={"50%"} />
    </>
  );
};
