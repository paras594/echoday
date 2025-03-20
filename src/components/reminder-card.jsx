import { hyperlinkOpenIcon, trashIcon } from "@progress/kendo-svg-icons";
import React from "react";
import { convertTo12HourFormat } from "../utils/date-formatters";
import { getMeetPlatform } from "../utils/get-meet-platform";
import { Typography } from "@progress/kendo-react-common";
import { Button } from "@progress/kendo-react-buttons";

export const ReminderCard = ({ reminder, onClick, onDelete }) => {
  return (
    <div
      key={reminder.id}
      style={{
        display: "flex",
        padding: "12px 8px",
        alignItems: "center",
        gap: 8,
        background: "#F9F9F98C",
      }}
    >
      <div style={{ width: 80 }}>
        <Typography.h6 textAlign="center" style={{ margin: 0 }}>
          {convertTo12HourFormat(reminder.startTime)}
        </Typography.h6>
      </div>
      <div
        style={{
          flex: 1,
          display: "grid",
          alignContent: "center",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <Typography.h6
          style={{
            marginBottom: 0,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            display: "block",
            width: "100%",
          }}
        >
          {reminder.title}
        </Typography.h6>
        {reminder.link && (
          <Typography.p fontSize="small" style={{ marginBottom: 0 }}>
            {getMeetPlatform(reminder.link)}
          </Typography.p>
        )}
      </div>
      <div style={{ display: "flex", gap: 4 }}>
        <Button
          type="button"
          onClick={() => {
            window.open(reminder.link, "_blank");
          }}
          fillMode={"flat"}
          svgIcon={hyperlinkOpenIcon}
        />

        <Button
          type="button"
          svgIcon={trashIcon}
          themeColor={"error"}
          fillMode={"flat"}
          onClick={onDelete}
        />
      </div>
    </div>
  );
};
