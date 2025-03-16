import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./styles/main.scss";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

/**
<Routes>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />

  <Route element={<AuthLayout />}>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Route>

  <Route path="concerts">
    <Route index element={<ConcertsHome />} />
    <Route path=":city" element={<City />} />
    <Route path="trending" element={<Trending />} />
  </Route>
</Routes>
*/
