import { Card, CardBody } from "@progress/kendo-react-layout";
import { pencilIcon } from "@progress/kendo-svg-icons";
import React, { useMemo } from "react";
import { CardHeader } from "./card-header";
import { NoDataBlock } from "./no-data-block";
import notesIllustration from "../assets/notes-illustration.svg";
import { useNotesStore } from "../store/use-notes-store";
import { useCalendarStore } from "../store/use-calendar-store";
import { NoteCard } from "./note-card";
import { useAppStore } from "../store/use-app-store";

const randomValue = (num) => Math.floor(Math.random() * num);

export const NotesBlock = ({ onActionClick }) => {
  const activeDate = useCalendarStore((state) => state.activeDate);
  const { notes, removeNote } = useNotesStore((state) => state);
  const { setActiveDialog } = useAppStore((state) => state);
  const val = useMemo(() => randomValue(100), [activeDate]);

  const handleDelete = (note) => {
    removeNote(activeDate, note);
  };

  const onClick = (note) => {
    setActiveDialog("edit-note", { note });
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
            {notes?.[activeDate]?.map((note, i) => (
              <NoteCard
                index={i + val}
                key={note.id}
                text={note.text}
                onDelete={() => handleDelete(note)}
                onClick={() => onClick(note)}
              />
            ))}
          </div>
        )}
      </CardBody>
    </Card>
  );
};
