import { Card } from "@progress/kendo-react-layout";
import { pencilIcon } from "@progress/kendo-svg-icons";
import React from "react";
import { CardHeader } from "./card-header";

export const NotesBlock = () => {
  return (
    <Card className="full-height">
      <CardHeader title="Notes" icon={pencilIcon} onActionClick={() => {}} />
    </Card>
  );
};
