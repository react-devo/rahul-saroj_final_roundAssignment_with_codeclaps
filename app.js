import React, { useState, useEffect } from "react";
import "./styles.css";

function App() {
  const [lightStatus, setLightStatus] = useState("");
  const [color, setColor] = useState("red");
  const [time, setTime] = useState(4000);

  // ● Red light: 4000ms
  // ● Yellow light: 500ms
  // ● Green light: 3000ms

  useEffect(() => {
    let timeId = "";
    timeId = setTimeout(() => {
      if (color === "red") {
        setTime(500);
        setColor("green");
      }

      if (color === "yellow") {
        setTime(3000);
        setColor("red");
      }

      if (color === "green") {
        setTime(4000);
        setColor("yellow");
      }
    }, time);

    return () => clearTimeout(timeId);
  }, [color]);

  return (
    <div className="App">
      <h1>Trafic light.</h1>
      <div className="trafic_light">
        <div
          className="green_ligth"
          style={{ background: time === 3000 ? color : "" }}
        ></div>
        <div
          className="yellow_ligth"
          style={{ background: time === 500 ? color : "" }}
        ></div>
        <div
          className="red_ligth"
          style={{ background: time === 4000 ? color : "" }}
        ></div>
      </div>
    </div>
  );
}

export default App;
