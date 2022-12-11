import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import CalendarContext from "../context/CalendarContext";

const AddHolidayButton = () => {
  const { onClickShow } = useContext(CalendarContext);

  return (
    <Button variant="primary" onClick={onClickShow} className="mt-4">
      Add holiday(s)
    </Button>
  );
};

export default AddHolidayButton;
