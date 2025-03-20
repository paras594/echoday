import { useState } from "react";
import { clockIcon } from "@progress/kendo-svg-icons";
import { Popup } from "@progress/kendo-react-popup";
import { Card, CardBody } from "@progress/kendo-react-layout";
import { CardHeader } from "./card-header";
import { NoDataBlock } from "./no-data-block";
import { useRemindersStore } from "../store/use-reminders-store";
import { useCalendarStore } from "../store/use-calendar-store";
import { ReminderCard } from "./reminder-card";
import { ReminderDetails } from "./reminder-details";
import eventsIllustration from "../assets/events-illustration.svg";

export const RemindersBlock = ({ onActionClick }) => {
  const activeDate = useCalendarStore((state) => state.activeDate);
  const { reminders, removeReminder } = useRemindersStore((state) => state);
  const [element, setElement] = useState(null);
  const [show, setShow] = useState(false);
  const [reminder, setReminder] = useState(null);

  const handleDelete = (reminder) => {
    removeReminder(activeDate, reminder);
  };

  const togglePopup = (reminder) => (event) => {
    setElement(event.target);
    setReminder(reminder);
    setShow(!show);
  };

  return (
    <Card className="full-height">
      <CardHeader
        title="Reminders"
        icon={clockIcon}
        onActionClick={onActionClick}
      />
      <CardBody
        className="scrollable"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        {!reminders?.[activeDate]?.length ? (
          <NoDataBlock
            illustration={eventsIllustration}
            caption="Stay on track—set your reminders!"
            imageStyles={{ width: "60%" }}
          />
        ) : (
          <div style={{ display: "grid", gap: 8 }}>
            {reminders?.[activeDate]?.map((reminder) => (
              <ReminderCard
                reminder={reminder}
                key={reminder.id}
                onDelete={() => handleDelete(reminder)}
                onClick={(e) => togglePopup(reminder)(e)}
              />
            ))}
          </div>
        )}
      </CardBody>
      <div style={{ height: 20 }} />
      <Popup
        anchor={element}
        show={show}
        collision={{
          horizontal: "fit",
          vertical: "flip",
        }}
        animate={{ openDuration: 200, closeDuration: 100 }}
      >
        {reminder && <ReminderDetails reminder={reminder} />}
      </Popup>
    </Card>
  );
};
