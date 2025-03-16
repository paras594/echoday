import { imagesIcon } from "@progress/kendo-svg-icons";
import React from "react";
import { Card } from "@progress/kendo-react-layout";
import { CardHeader } from "./card-header";

export const MemoriesBlock = () => {
  return (
    <Card className="full-height">
      <CardHeader title="Memories" icon={imagesIcon} onActionClick={() => {}} />
    </Card>
  );
};
