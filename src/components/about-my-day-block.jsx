import { Card, CardBody } from "@progress/kendo-react-layout";
import { heartIcon } from "@progress/kendo-svg-icons";
import { TextArea } from "@progress/kendo-react-inputs";
import { CardHeader } from "./card-header";
import { useAboutMyDayStore } from "../store/use-about-my-day-store";
import { useCalendarStore } from "../store/use-calendar-store";
import { useEffect, useMemo, useState } from "react";
import { getRandomArrayValue } from "../utils/get-random-array-value";
import { ABOUT_MY_DAY_PROMPTS } from "../utils/placeholders";
import "../styles/about-my-day-block.scss";
import { Typography } from "@progress/kendo-react-common";

export const AboutMyDayBlock = () => {
  const activeDate = useCalendarStore((state) => state.activeDate);
  const { aboutMyDay, updateAboutMyDay } = useAboutMyDayStore((state) => state);
  const [value, setValue] = useState("");
  const prompt = useMemo(
    () => getRandomArrayValue(ABOUT_MY_DAY_PROMPTS),
    [activeDate]
  );

  useEffect(() => {
    setValue(aboutMyDay[activeDate] || "");
  }, [aboutMyDay, activeDate]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleBlur = () => {
    updateAboutMyDay(activeDate, value);
    setValue(value);
  };

  return (
    <Card className="full-height">
      <CardHeader title="About My Day" icon={heartIcon} />
      <div className="about-prompt">
        <Typography.p>{prompt}</Typography.p>
      </div>
      <CardBody className="card-body scrollable">
        <TextArea
          id="about-textarea"
          className="about-textarea"
          resizable="none"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </CardBody>
      <div style={{ height: 20 }} />
    </Card>
  );
};
