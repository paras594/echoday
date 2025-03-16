import React from "react";
import { Typography } from "@progress/kendo-react-common";
import { useUserStore } from "../store/use-user-store";
import "../styles/welcome-user.scss";

export const WelcomeUser = () => {
  const userName = useUserStore((state) => state.userName);
  return (
    <div>
      <Typography.h3 fontWeight="bold" className="title">
        Welcome, {userName}
      </Typography.h3>
      <Typography.p fontSize="large" className="subtitle">
        “Capture and reflect on your day”
      </Typography.p>
    </div>
  );
};
