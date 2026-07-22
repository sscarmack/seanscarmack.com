import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/open-sans/latin-300.css";
import "@fontsource/open-sans/latin-300-italic.css";
import "@fontsource/open-sans/latin-400.css";
import "@fontsource/open-sans/latin-400-italic.css";
import "@fontsource/open-sans/latin-500.css";
import "@fontsource/open-sans/latin-500-italic.css";
import "@fontsource/open-sans/latin-600.css";
import "@fontsource/open-sans/latin-600-italic.css";
import "@fontsource/open-sans/latin-700.css";
import "@fontsource/open-sans/latin-700-italic.css";
import "@fontsource/open-sans/latin-800.css";
import "@fontsource/open-sans/latin-800-italic.css";
import "@fontsource/oswald/latin-300.css";
import "@fontsource/oswald/latin-400.css";
import "@fontsource/oswald/latin-500.css";
import "@fontsource/oswald/latin-600.css";
import "@fontsource/oswald/latin-700.css";
import App from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .getRegistrations()
    .then((registrations) => registrations.forEach((registration) => registration.unregister()))
    .catch(() => undefined);
}
