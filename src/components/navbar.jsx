import React, { useRef, useState } from "react";
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  Avatar,
} from "@progress/kendo-react-layout";
import { bellIcon } from "@progress/kendo-svg-icons";
import { Button } from "@progress/kendo-react-buttons";
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import { SvgIcon, Typography } from "@progress/kendo-react-common";
import { Popup } from "@progress/kendo-react-popup";
import { useNavigate } from "react-router";
import { useUserStore } from "../store/use-user-store";
import logo from "../assets/logo.svg";

import "../styles/navbar.scss";

export const Navbar = () => {
  const anchor = useRef(null);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { userName, reset } = useUserStore((state) => state);

  const onClick = () => {
    setShow(!show);
  };

  const handleLogout = () => {
    reset();

    navigate("/");
  };

  return (
    <>
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
          <div ref={anchor}>
            <button type="button" onClick={onClick} className="avatar-button">
              <Avatar type="text" style={{ cursor: "pointer" }}>
                <span className="k-avatar-initials">
                  {userName.slice(0, 1) || "?"}
                </span>
              </Avatar>
            </button>
            <Popup
              anchor={anchor.current}
              show={show}
              style={{ marginTop: 16 }}
            >
              <div style={{ padding: "12px", width: 160 }}>
                <Typography.h6 fontSize="large">{userName}</Typography.h6>
                <Button
                  fillMode={"outline"}
                  themeColor={"error"}
                  style={{ width: "100%" }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            </Popup>
          </div>
        </AppBarSection>
      </AppBar>
    </>
  );
};
