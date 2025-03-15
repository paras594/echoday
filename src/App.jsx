import { Typography } from "@progress/kendo-react-common";
import "./app.css";
import { StackLayout } from "@progress/kendo-react-layout";
import { useUserStore } from "./store/use-user-store";

function App() {
  const userName = useUserStore((state) => state.userName);
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const setUserName = useUserStore((state) => state.setUserName);
  const setIsLoggedIn = useUserStore((state) => state.setIsLoggedIn);

  return (
    <>
      <h1>
        Hello, {userName} {isLoggedIn ? "logged in" : "logged out"}
      </h1>
      <button onClick={() => setUserName("Jane Doe")}>Change Name</button>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Change Loggedin
      </button>
    </>
  );
}

export default App;
