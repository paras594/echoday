import { Card, CardBody } from "@progress/kendo-react-layout";
import { heartIcon } from "@progress/kendo-svg-icons";
import { TextArea } from "@progress/kendo-react-inputs";
import { CardHeader } from "./card-header";
import "../styles/about-my-day-block.scss";

export const AboutMyDayBlock = () => {
  return (
    <Card className="full-height">
      <CardHeader title="About My Day" icon={heartIcon} />
      <CardBody className="card-body scrollable">
        <TextArea
          id="about-textarea"
          className="about-textarea"
          resizable="none"
        />
      </CardBody>
      <div style={{ height: 20 }} />
    </Card>
  );
};
