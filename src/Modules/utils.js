import moment from "moment";

export const deletedButtonCondition = start => {
  let current_time = moment().format("YYYY MM DD");
  let event_time = moment(start).format("YYYY MM DD");
  return current_time <= event_time ? true : false;
};
