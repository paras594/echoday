import { SvgIcon, Typography } from "@progress/kendo-react-common";
import { exclamationCircleIcon } from "@progress/kendo-svg-icons";
import React from "react";

export const ErrorMessage = () => {
  return (
    <div
      style={{
        marginTop: 16,
        display: "flex",
        alignItems: "center",
        borderRadius: 4,
        gap: 16,
        padding: "16px",
        border: "1.5px solid var(--kendo-color-error)",
        background: "#fcddda8c",
      }}
    >
      <SvgIcon icon={exclamationCircleIcon} size="xlarge" />
      <Typography.p style={{ marginBottom: 0 }}>
        Oops. Failed to submit feedback.
      </Typography.p>
    </div>
  );
};
