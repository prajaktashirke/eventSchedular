import "./App.css";
import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import Modules from "./Modules";
import CalenderState from "./context/CalenderState";

function App() {
  return (
    <CalenderState>
      <div className="App">
        <Modules />
      </div>
    </CalenderState>
  );
}

export default App;
