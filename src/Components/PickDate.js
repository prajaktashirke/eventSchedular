import React from "react";
import DatePicker from "react-datepicker";

const PickDate = ({
  selectedDate,
  disabled,
  onChange,
  name,
  minDate = new Date()
}) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={date => onChange(name, date)}
      minDate={minDate}
      className="form-control"
      customInput={
        <input type="text" id="validationCustom01" placeholder="First name" />
      }
      disabled={disabled}
      showMonthDropdown
      showYearDropdown
      yearDropdownItemNumber={15}
      scrollableYearDropdown
    />
  );
};

export default PickDate;
