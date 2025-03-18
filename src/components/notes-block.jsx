import { Card, CardBody } from "@progress/kendo-react-layout";
import { pencilIcon } from "@progress/kendo-svg-icons";
import React from "react";
import { CardHeader } from "./card-header";
import { NoDataBlock } from "./no-data-block";
import notesIllustration from "../assets/notes-illustration.svg";

export const NotesBlock = () => {
  return (
    <Card className="full-height">
      <CardHeader title="Notes" icon={pencilIcon} onActionClick={() => {}} />
      <CardBody>
        <NoDataBlock
          illustration={notesIllustration}
          caption="Organize your thoughts by adding notes!"
          imageStyles={{ maxWidth: "120px" }}
        />
      </CardBody>
    </Card>
  );
};
