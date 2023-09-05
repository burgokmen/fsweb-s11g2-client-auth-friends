import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import FriendContextProvider from "./contexts/FriendContext";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <FriendContextProvider>
      <App />
    </FriendContextProvider>
  </BrowserRouter>
);
