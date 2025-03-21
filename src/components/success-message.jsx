import { SvgIcon, Typography } from "@progress/kendo-react-common";
import { checkIcon } from "@progress/kendo-svg-icons";

export const SuccessMessage = () => {
  return (
    <div
      style={{
        marginTop: 16,
        display: "flex",
        alignItems: "center",
        borderRadius: 4,
        gap: 16,
        padding: "16px",
        border: "1.5px solid var(--kendo-color-success)",
        background: "#dcf0d38c",
      }}
    >
      <SvgIcon icon={checkIcon} size="xlarge" />
      <Typography.p style={{ marginBottom: 0 }}>
        Thank you. Feedback submitted successfully.
      </Typography.p>
    </div>
  );
};
