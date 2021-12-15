import Form from "./components/Form";
import { useState } from "react";
import "./App.css";

function App() {
  const [colorMode, setThemeMode] = useState("black");

  const [bgColorMode, setbgColorMode] = useState("white");

  const colorThemeSelector = (color) => {
    var bodyStyle = document.body.style;
    if (color === "dark") {
      setThemeMode("white");
      setbgColorMode("#19191a");
      bodyStyle.backgroundColor = "black";
    } else if (color === "blue") {
      setThemeMode("white");
      setbgColorMode("#103454");
      bodyStyle.backgroundColor = "#070636";
    } else {
      setThemeMode("black");
      setbgColorMode("white");
      bodyStyle.backgroundColor = "white";
    }
  };

  return (
    <>
      <div className="btnContainer my-4">
        <button
          className="btn btn-dark m-1"
          id="darkModeSwitch"
          onClick={() => {
            colorThemeSelector("dark");
          }}
        >
          Dark Mode
        </button>
        <button
          className="btn btn-primary m-1"
          style={{ backgroundColor: "#020269" }}
          id="blueNightModeSwitch"
          onClick={() => colorThemeSelector("blue")}
        >
          Blue Night
        </button>
        <button
          className="btn btn-light m-1"
          id="lightModeSwitch"
          onClick={() => colorThemeSelector("light")}
        >
          Light Mode
        </button>
      </div>
      <Form color={colorMode} bgColor={bgColorMode} />
    </>
  );
}

export default App;
