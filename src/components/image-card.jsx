import { Card, CardBody } from "@progress/kendo-react-layout";
import "../styles/image-card.scss";
import { Button } from "@progress/kendo-react-buttons";
import { xIcon } from "@progress/kendo-svg-icons";

export const ImageCard = ({ src, onDelete }) => {
  return (
    <Card className="image-card">
      <Button
        type="button"
        svgIcon={xIcon}
        className="image-card-delete-btn"
        size="small"
        onClick={onDelete}
      />
      <CardBody className="image-card-body">
        <img src={src} alt="memories" />
      </CardBody>
    </Card>
  );
};
