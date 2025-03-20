import { Card, CardBody } from "@progress/kendo-react-layout";
import { pencilIcon } from "@progress/kendo-svg-icons";
import React from "react";
import { CardHeader } from "./card-header";
import { NoDataBlock } from "./no-data-block";
import notesIllustration from "../assets/notes-illustration.svg";
import { useNotesStore } from "../store/use-notes-store";
import { useCalendarStore } from "../store/use-calendar-store";
import { NoteCard } from "./note-card";

export const NotesBlock = ({ onActionClick }) => {
  const activeDate = useCalendarStore((state) => state.activeDate);
  const { notes, removeNote } = useNotesStore((state) => state);

  const handleDelete = (note) => {
    removeNote(activeDate, note);
  };

  return (
    <Card className="full-height">
      <CardHeader
        title="Notes"
        icon={pencilIcon}
        onActionClick={onActionClick}
      />
      <CardBody className="scrollable">
        {!notes?.[activeDate]?.length ? (
          <NoDataBlock
            illustration={notesIllustration}
            caption="Organize your thoughts by adding notes!"
            imageStyles={{ maxWidth: "120px" }}
          />
        ) : (
          <div style={{ display: "grid", gap: 8 }}>
            {notes?.[activeDate]?.map((note) => (
              <NoteCard
                key={note.id}
                text={note.text}
                onDelete={() => handleDelete(note)}
              />
            ))}
          </div>
        )}
      </CardBody>
    </Card>
  );
};
