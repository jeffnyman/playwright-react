import { useState } from "react";
import playwrightLogo from "./assets/playwright.svg";
import typescriptLogo from "./assets/typescript.svg";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import upArrow from "./assets/up-arrow.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.typescriptlang.org/">
          <img
            src={typescriptLogo}
            className="logo typescript"
            alt="TypeScript logo"
          />
        </a>
        <a href="https://playwright.dev" target="_blank">
          <img
            src={playwrightLogo}
            className="logo playwright"
            alt="Playwright logo"
          />
        </a>
      </div>
      <h1>Jeff's Vite + React + TS + Playwright</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          <img src={upArrow} className="arrow" />
        </p>
        <p>Click that button to increase the count.</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite, React and Playwright logos to learn more!
      </p>
    </>
  );
}

export default App;
