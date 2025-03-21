import { Button } from "@progress/kendo-react-buttons";
import { Typography } from "@progress/kendo-react-common";
import { Rating, TextArea } from "@progress/kendo-react-inputs";
import { StackLayout } from "@progress/kendo-react-layout";
import { Fade } from "@progress/kendo-react-animation";
import { SuccessMessage } from "./success-message";
import "../styles/user-review-widget.scss";
import { useState } from "react";
import { ErrorMessage } from "./error-message";

const API_URL =
  "https://app.formbricks.com/api/v1/client/cm8itw1qf0007kz033umwjc6t/responses";

const UserReviewWidget = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const createReview = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          surveyId: "cm8iyc1820000jm032tozhppn",
          finished: true,
          data: {
            rating,
            review,
          },
        }),
        redirect: "follow",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      await response.json();

      setStatus("success");

      setTimeout(() => {
        setStatus("");
      }, 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setRating(0);
      setReview("");
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createReview();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        alignItems: "center",
        padding: "64px 0",
        maxWidth: 400,
        margin: "0 auto",
      }}
    >
      <div>
        <Typography.h4 style={{ marginBottom: 0 }} textAlign="center">
          Tell Us What You Think
        </Typography.h4>
        <Typography.p textAlign="center" style={{ marginBottom: 0 }}>
          Love it? Let us know, and we'll take it to the next level!
        </Typography.p>
      </div>
      <Fade>
        {status === "success" && <SuccessMessage />}
        {status === "error" && <ErrorMessage />}
      </Fade>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          width: "100%",
        }}
      >
        <Rating
          className="user-review-rating"
          value={rating}
          onChange={(e) => setRating(e.value)}
        />
        <TextArea
          placeholder="Type your review here..."
          rows={6}
          resizable="none"
          onChange={(e) => setReview(e.target.value)}
          value={review}
          style={{ padding: "8px" }}
        />
        <StackLayout>
          <Button
            type="submit"
            size={"large"}
            themeColor={"primary"}
            style={{ padding: "8px 32px" }}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </StackLayout>
      </form>
    </div>
  );
};

export default UserReviewWidget;
