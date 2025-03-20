import { Typography } from "@progress/kendo-react-common";
import "../styles/reminder-details.scss";
import { convertTo12HourFormat } from "../utils/date-formatters";

export const ReminderDetails = ({ reminder }) => {
  return (
    <div className="reminder-details">
      <Typography.h5 className="reminder-details-title">
        {reminder.title}
      </Typography.h5>
      <Typography.p fontSize="small">{reminder.type.text}</Typography.p>
      <hr />
      <Typography.h6>
        {convertTo12HourFormat(reminder.startTime)} -{" "}
        {convertTo12HourFormat(reminder.endTime)}
      </Typography.h6>
      <Typography.p>Location: {reminder.location || "N/A"}</Typography.p>
      <Typography.p>
        Meet:{" "}
        {!reminder.link ? (
          "N/A"
        ) : (
          <a href={reminder.link} target="_blank">
            {reminder.link}
          </a>
        )}
      </Typography.p>
      <Typography.p
        fontSize="small"
        fontWeight="bold"
        style={{ marginBottom: 4, marginTop: 16 }}
      >
        Description
      </Typography.p>
      <Typography.p>{reminder.description || "N/A"}</Typography.p>
    </div>
  );
};
