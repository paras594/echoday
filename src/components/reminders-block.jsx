import { clockIcon } from "@progress/kendo-svg-icons";
import React from "react";
import { Card, CardBody } from "@progress/kendo-react-layout";
import { CardHeader } from "./card-header";
import { NoDataBlock } from "./no-data-block";
import eventsIllustration from "../assets/events-illustration.svg";

export const RemindersBlock = () => {
  return (
    <Card className="full-height">
      <CardHeader title="Reminders" icon={clockIcon} onActionClick={() => {}} />
      <CardBody>
        <NoDataBlock
          illustration={eventsIllustration}
          caption="Stay on track—set your reminders!"
          imageStyles={{ width: "60%" }}
        />
      </CardBody>
    </Card>
  );
};
