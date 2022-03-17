import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css";

import { Provider } from "./context/context";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
