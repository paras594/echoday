import React from "react";
import { Card } from "@progress/kendo-react-layout";
import { heartIcon } from "@progress/kendo-svg-icons";
import { CardHeader } from "./card-header";

export const AboutMyDayBlock = () => {
  return (
    <Card className="full-height">
      <CardHeader
        title="About My Day"
        icon={heartIcon}
        onActionClick={() => {}}
      />
    </Card>
  );
};
