import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css";
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from "./context/context";

ReactDOM.render(
  <SpeechProvider appId='30441997-1d09-4867-ab91-ad8852429e04' language='en-US'>
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
