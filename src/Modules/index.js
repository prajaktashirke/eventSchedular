import React, { useContext } from "react";
import Toaster from "../Components/Toaster";
import CalendarContext from "../context/CalendarContext";
import AddHoliday from "./AddHoliday";
import CalendarDisplay from "./CalendarDisplay";

const Modules = () => {
  const { toaster, setToaster } = useContext(CalendarContext);
  return (
    <div>
      <AddHoliday />
      <CalendarDisplay />
      <Toaster toaster={toaster} setToaster={setToaster} />
    </div>
  );
};

export default Modules;
