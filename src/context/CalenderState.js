import React, { useState } from "react";
import { events, initialToast, initialValue } from "../Constants/constants";
import CalendarContext from "./CalendarContext";
import { v4 as uuidv4 } from "uuid";

const CalenderState = ({ children }) => {
  const [toaster, setToaster] = useState(initialToast);
  const [calendarState, setCalendarState] = useState({
    show: false,
    holidayList: events,
    formValue: { ...initialValue }
  });

  const onClickShow = () => {
    setCalendarState(data => {
      return {
        ...data,
        show: !data?.show,
        formValue: { ...data?.formValue }
      };
    });
  };

  const deleteHoliday = id => {
    setCalendarState(data => {
      return {
        ...data,
        show: false,
        formValue: { ...initialValue },
        holidayList: data?.holidayList?.filter(res => res.id !== id)
      };
    });
    setToaster({
      display: true,
      label: "Holiday deleted successfully."
    });
  };

  const editMode = () => {
    setCalendarState(data => {
      return {
        ...data,
        formValue: { ...data.formValue, edit: !data.formValue.edit }
      };
    });
  };

  const onEditShow = slotInfo => {
    const formValue = {
      id: slotInfo?.id,
      title: slotInfo?.title,
      description: slotInfo?.description,
      allDay: true,
      start: slotInfo?.start,
      end: slotInfo?.end
    };
    setCalendarState(data => {
      return { ...data, show: !data?.show, formValue };
    });
  };

  const onCancel = () => {
    setCalendarState(data => {
      return {
        formValue: { ...initialValue },
        holidayList: data.holidayList,
        show: false
      };
    });
  };

  const onSaveHoliday = () => {
    let list = [...calendarState?.holidayList];
    if (calendarState?.formValue?.id) {
      const index = list.findIndex(
        res => res.id === calendarState?.formValue?.id
      );
      list[index] = {
        ...calendarState?.formValue
      };
      setCalendarState({
        show: false,
        holidayList: list,
        formValue: { ...initialValue }
      });
      setToaster({
        display: true,
        label: "Holiday updated successfully."
      });
    } else {
      list.push({ ...calendarState.formValue, id: uuidv4() });
      setCalendarState({
        show: false,
        holidayList: list,
        formValue: { ...initialValue }
      });
      setToaster({
        display: true,
        label: "Holiday added successfully."
      });
    }
  };
  return (
    <CalendarContext.Provider
      value={{
        calendarState,
        setCalendarState,
        toaster,
        setToaster,
        onClickShow,
        onSaveHoliday,
        onCancel,
        onEditShow,
        deleteHoliday,
        editMode
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export default CalenderState;
