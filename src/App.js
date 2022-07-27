import React, { useContext } from "react";
import { ThemeContext } from "./components/ContextApi";
import SecondWeather from "./components/SecondWeather";
// import WordApp from "./src/WordConvertor/WordApp";

export default function App() {
  const { temps, setTemps } = useContext(ThemeContext);
  return (
    <>
      <SecondWeather />
    </>
  );
}
