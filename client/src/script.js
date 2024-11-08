import { createRoot } from "react-dom/client";
import React from "react";
import App from "./components/App";
import "./style.css";
import { Provider } from "react-redux";
import store from "./configureStore";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
