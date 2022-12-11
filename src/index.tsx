import "./index.css";
import "./global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CharactersTable } from "./components/CharactersTable";

const root = createRoot(document.getElementById("root") as Element);

root.render(
  <StrictMode>
    <main className={"p-8 bg-gray-50 w-screen min-h-screen"}>
      <CharactersTable />
    </main>
  </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
