import { imagesIcon } from "@progress/kendo-svg-icons";
import React, { useRef } from "react";
import { Card, CardBody } from "@progress/kendo-react-layout";
import { CardHeader } from "./card-header";
import { ImageCard } from "./image-card";
import { useMemoriesStore } from "../store/use-memories-store";
import { useCalendarStore } from "../store/use-calendar-store";
import imagesIllustration from "../assets/images-illustration.svg";
import { NoDataBlock } from "./no-data-block";
import { uniqueId } from "../utils/unique-id";

export const MemoriesBlock = () => {
  const ref = useRef(null);
  const zeroOr1 = Math.floor(Math.random() * 2);
  const activeDate = useCalendarStore((state) => state.activeDate);
  const { memories, addMemory, removeMemory } = useMemoriesStore(
    (state) => state
  );

  const handleUploadImage = () => {
    if (ref.current) ref.current.click();
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      addMemory(activeDate, {
        id: uniqueId(),
        src: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleDelete = (memory) => {
    removeMemory(activeDate, memory);
  };

  return (
    <>
      <Card className="full-height">
        <CardHeader
          title="Memories"
          icon={imagesIcon}
          onActionClick={handleUploadImage}
        />
        <CardBody
          className="scrollable"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          {!memories?.[activeDate]?.length ? (
            <NoDataBlock
              illustration={imagesIllustration}
              caption="Your gallery is waiting—let's fill it up!"
              imageStyles={{
                maxWidth: 180,
              }}
            />
          ) : (
            memories?.[activeDate]?.map((image, i) => (
              <div
                key={image.id}
                style={{
                  flex: "1 1 120px",
                  maxWidth: "120px",
                  transformOrigin: "center",
                  rotate: `${
                    Math.floor(Math.random() * 3 + 2) *
                    (i % 2 === zeroOr1 ? -1 : 1)
                  }deg`,
                }}
              >
                <ImageCard
                  src={image.src}
                  alt="memories"
                  onDelete={() => handleDelete(image)}
                />
              </div>
            ))
          )}
        </CardBody>
        <div style={{ height: 20 }} />
      </Card>
      <input
        ref={ref}
        type="file"
        hidden
        name="memories"
        id="memories"
        onChange={handleChange}
      />
    </>
  );
};
