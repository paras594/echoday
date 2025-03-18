import { Typography } from "@progress/kendo-react-common";

export const NoDataBlock = ({ illustration, caption, imageStyles = {} }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 32,
    }}
  >
    <img src={illustration} width={"70%"} style={imageStyles} />
    <Typography.p textAlign="center" style={{ opacity: 0.8 }}>
      {caption}
    </Typography.p>
  </div>
);
