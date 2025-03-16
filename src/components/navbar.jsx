import React from "react";
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  Avatar,
} from "@progress/kendo-react-layout";
import { bellIcon } from "@progress/kendo-svg-icons";
import { Button } from "@progress/kendo-react-buttons";
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import "../styles/navbar.scss";

import logo from "../assets/logo.svg";
import { SvgIcon } from "@progress/kendo-react-common";
import { useUserStore } from "../store/use-user-store";

export const Navbar = () => {
  const userName = useUserStore((state) => state.userName);

  return (
    <AppBar className="navbar" themeColor="inherit">
      <AppBarSection>
        <img src={logo} width={120} />
      </AppBarSection>
      <AppBarSpacer />
      <AppBarSection className="actions">
        <Button type="button" fillMode="flat">
          <BadgeContainer>
            <SvgIcon icon={bellIcon} size="large" />
            <Badge
              rounded="full"
              themeColor="primary"
              size="small"
              align={{ vertical: "top", horizontal: "right" }}
            />
          </BadgeContainer>
        </Button>
      </AppBarSection>
      <AppBarSection style={{ marginLeft: "12px", marginRight: "16px" }}>
        <span className="k-appbar-separator" />
      </AppBarSection>
      <AppBarSection>
        <Avatar type="text">
          <span className="k-avatar-initials">
            {userName.slice(0, 1) || "?"}
          </span>
        </Avatar>
      </AppBarSection>
    </AppBar>
  );
};
