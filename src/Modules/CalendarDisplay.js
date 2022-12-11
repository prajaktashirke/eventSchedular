import React, { useContext } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import CalendarContext from "../context/CalendarContext";
import { deletedButtonCondition } from "./utils";
const localizer = momentLocalizer(moment);

const CalendarDisplay = () => {
  const { onEditShow, calendarState } = useContext(CalendarContext);
  const eventStyleGetter = () => {
    return {
      style: {
        backgroundColor: "#e92b60"
      }
    };
  };
  const onSelectEventHandler = slotInfo => {
    // Edit details
    onEditShow(slotInfo);
  };

  const onSelectEventSlotHandler = slotInfo => {
    deletedButtonCondition(slotInfo?.start) && onEditShow(slotInfo);
  };

  return (
    <div>
      <Calendar
        selectable
        localizer={localizer}
        events={calendarState?.holidayList}
        startAccessor={"start"}
        endAccessor={"end"}
        eventPropGetter={eventStyleGetter}
        views={["month", "week", "day"]}
        style={{ height: 500, margin: "30px" }}
        onSelectEvent={slotInfo => onSelectEventHandler(slotInfo)}
        onSelectSlot={slotInfo => onSelectEventSlotHandler(slotInfo)}
      />
    </div>
  );
};

export default CalendarDisplay;
