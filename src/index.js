import React from "react";
import ReactDOM from "react-dom";
import WeatherSearch from "./WeatherSearch";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
    </div>
  );
}
<small>
  <a href="https://github.com/Jessw1988/weather-react"> Open-sourced code </a>{" "}
  by Jessica Wolski
</small>;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
