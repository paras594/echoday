import React, { useState } from "react";
import { useNavigate } from "react-router";

import { Input } from "@progress/kendo-react-inputs";
import { Error, Label } from "@progress/kendo-react-labels";
import { Button } from "@progress/kendo-react-buttons";
import { Loader } from "@progress/kendo-react-indicators";
import { Typography } from "@progress/kendo-react-common";
import "../styles/login-form.scss";
import { useUserStore } from "../store/use-user-store";

export const LoginForm = () => {
  const navigate = useNavigate();
  const { setUserName, setUserPassword, setIsLoggedIn } = useUserStore();

  const [formValues, setFormValues] = useState({
    username: "John Doe",
    password: "123",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setError({ username: "", password: "" });
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = { username: "", password: "" };

    if (!formValues.username) {
      errors.username = "Username is required";
    }

    if (!formValues.password) {
      errors.password = "Password is required";
    }

    if (errors.username || errors.password) {
      setError(errors);
      return;
    }

    setLoading(true);

    setError({ username: "", password: "" });

    setFormValues({
      username: "",
      password: "",
    });

    // save values in store

    setUserName(formValues.username);
    setUserPassword(formValues.password);
    setIsLoggedIn(true);

    // simulate loading
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);

    // move to home
    navigate("/home");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <Label editorId="username" className="label">
        Username
      </Label>
      <Input
        id="username"
        name="username"
        onChange={handleChange}
        value={formValues.username}
        className="input"
      />
      {error.username && <Error id={"username"}>{error.username}</Error>}
      <div style={{ height: "24px" }} />
      <Label editorId="password" className="label">
        Password
      </Label>
      <Input
        id="password"
        name="password"
        type="password"
        onChange={handleChange}
        value={formValues.password}
        className="input"
      />
      {error.password && <Error id={"password"}>{error.password}</Error>}
      <div style={{ height: "32px" }} />
      <Button
        type="submit"
        themeColor={"primary"}
        size="large"
        className="submit-button"
        disabled={loading}
      >
        {loading ? (
          <Loader size="small" themeColor={"light"} type={"infinite-spinner"} />
        ) : (
          <span>Log In</span>
        )}
      </Button>
      <div className="disclaimer surface">
        <Typography.p>
          This is a dummy login. Type any username and password and you'll be
          able to login. Thank you :)
        </Typography.p>
      </div>
    </form>
  );
};
