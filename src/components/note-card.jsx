import { Button } from "@progress/kendo-react-buttons";
import { Typography } from "@progress/kendo-react-common";
import { trashIcon } from "@progress/kendo-svg-icons";

const colorArray = [
  "#F9F9F98C",
  "#D6EAD68C",
  "#FAF3CC8C",
  "#D7E8F68C",
  "#E8DAEF8C",
];

export const NoteCard = ({ text, onDelete, onClick, index }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        border: "1px solid var(--kendo-color-border)",
        gap: 16,
        padding: "8px 8px 8px 16px",
        background: colorArray[index % colorArray.length],
        borderRadius: 4,
        height: 80,
        alignItems: "flex-start",
      }}
    >
      <Typography.p
        style={{
          margin: 0,
          height: "100%",
          cursor: "pointer",
        }}
        className="text-container"
        onClick={onClick}
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
