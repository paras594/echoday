import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import "../styles/calendar-block.scss";
import { useCalendarStore } from "../store/use-calendar-store";
import { formatDate, parseDate } from "../utils/date-formatters";

export const CalendarBlock = () => {
  const { activeDate, setActiveDate } = useCalendarStore();

  console.log({ activeDate });

  const handleChange = (date) => {
    setActiveDate(formatDate(date));
  };

  return (
    <Calendar
      calendarType="gregory"
      className="calendar"
      tileClassName="calendar-tile"
      onChange={handleChange}
      value={parseDate(activeDate)}
    />
  );
};
