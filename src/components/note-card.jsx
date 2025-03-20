import { Button } from "@progress/kendo-react-buttons";
import { Typography } from "@progress/kendo-react-common";
import { trashIcon } from "@progress/kendo-svg-icons";
import React from "react";

export const NoteCard = ({ text, onDelete }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: 16,
        padding: "8px 8px 8px 16px",
        background: "#F9F9F98C",
        borderRadius: 4,
        height: 80,
        alignItems: "flex-start",
      }}
    >
      <Typography.p
        style={{
          margin: 0,
        }}
        className="text-container"
      >
        {text}
      </Typography.p>
      <Button
        svgIcon={trashIcon}
        themeColor={"error"}
        fillMode="flat"
        onClick={onDelete}
      />
    </div>
  );
};
