import ReactDOM from "react-dom/client";
import App from "./components/App";
import { LocaleProvider } from "./contexts/LocaleContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LocaleProvider defaultValue={"ko"}>
    <App />
  </LocaleProvider>
);
