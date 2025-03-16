import { Typography } from "@progress/kendo-react-common";
import { StackLayout } from "@progress/kendo-react-layout";
import { LoginIntroBlock } from "../components/login-intro-block";
import { LoginIllustrationBlock } from "../components/login-illustration-block";
import { LoginForm } from "../components/login-form";
import "../styles/login-page.scss";

const Login = () => {
  return (
    <StackLayout
      orientation="horizontal"
      className="login-wrapper"
      style={{ background: "#fff" }}
    >
      <div className="surface" style={{ padding: "40px 80px" }}>
        <LoginIntroBlock />
        <StackLayout orientation={"horizontal"} align={{ vertical: "middle" }}>
          <LoginIllustrationBlock />
        </StackLayout>
      </div>
      <div style={{ padding: "80px" }}>
        <Typography.h3>Log In to Your Space</Typography.h3>
        <Typography.p fontSize="large">
          Let's make today count. Sign in to access your notes, reminders, and
          memories
        </Typography.p>
        <div style={{ height: "40px" }} />
        <LoginForm />
      </div>
    </StackLayout>
  );
};

export default Login;
