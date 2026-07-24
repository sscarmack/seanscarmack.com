import React, { Component, type ErrorInfo, type ReactNode } from "react";
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
// GitHub Pages serves only the Scarmack Productions workspace. The separate
// Vendor Book product is intentionally paused and no longer participates here.
const appModule = Promise.all([import("./App"), import("./styles.css")]).then(
  ([module]) => module,
);

function StartupFailure({ message }: { message: string }) {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "24px",
        background: "#edf6f4",
        color: "#17263c",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <section style={{ maxWidth: "560px", padding: "32px", background: "#fff", border: "1px solid #d8e4e3" }}>
        <p style={{ margin: "0 0 8px", color: "#287d7d", fontWeight: 700 }}>Scarmack Productions</p>
        <h1 style={{ margin: "0 0 12px" }}>The workspace could not start.</h1>
        <p style={{ margin: 0, color: "#52677b" }}>{message}</p>
      </section>
    </main>
  );
}

class AppErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state: { error: Error | null } = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("The workspace failed while rendering.", error, errorInfo);
  }

  render() {
    return this.state.error ? <StartupFailure message={this.state.error.message} /> : this.props.children;
  }
}

appModule
  .then(({ default: App }) => {
    ReactDOM.createRoot(document.getElementById("root")!).render(
      <React.StrictMode>
        <AppErrorBoundary>
          <App />
        </AppErrorBoundary>
      </React.StrictMode>,
    );
  })
  .catch((error: unknown) => {
    console.error("Unable to start the application.", error);

    const message = error instanceof Error ? error.message : "Unexpected module loading failure.";
    ReactDOM.createRoot(document.getElementById("root")!).render(<StartupFailure message={message} />);
  });

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .getRegistrations()
    .then((registrations) => registrations.forEach((registration) => registration.unregister()))
    .catch(() => undefined);
}
