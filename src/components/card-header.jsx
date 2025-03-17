import { Button } from "@progress/kendo-react-buttons";
import { SvgIcon } from "@progress/kendo-react-common";
import {
  CardTitle,
  CardHeader as KendoCardHeader,
} from "@progress/kendo-react-layout";
import { plusIcon } from "@progress/kendo-svg-icons";
import React from "react";

export const CardHeader = ({ title, icon, onActionClick }) => {
  return (
    <KendoCardHeader
      className="k-hbox"
      style={{
        alignItems: "center",
        gap: "8px",
      }}
    >
      <div
        style={{
          background: "#CBCBCB1F",
          borderRadius: 4,
          width: "32px",
          height: "32px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SvgIcon
          icon={icon}
          size="large"
          color="color: var(--kendo-color-on-app-surface, #3D3D3D)"
        />
      </div>
      <CardTitle style={{ fontWeight: 700 }}>{title}</CardTitle>
      <div style={{ flexGrow: 1 }} />
      {onActionClick && (
        <Button
          themeColor={"primary"}
          svgIcon={plusIcon}
          type="button"
          fillMode={"outline"}
          onClick={onActionClick}
        />
      )}
    </KendoCardHeader>
  );
};
