import { clockIcon } from "@progress/kendo-svg-icons";
import React from "react";
import { Card } from "@progress/kendo-react-layout";
import { CardHeader } from "./card-header";

export const RemindersBlock = () => {
  return (
    <Card className="full-height">
      <CardHeader title="Reminders" icon={clockIcon} onActionClick={() => {}} />
    </Card>
  );
};
