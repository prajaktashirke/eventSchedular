import React, { Fragment, useContext } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Modals from "../Components/Modals";
import CalendarContext from "../context/CalendarContext";
import PickDate from "../Components/PickDate";
import DisplayHolidayDetails from "./DisplayHolidayDetails";
import moment from "moment";
import AddHolidayButton from "./AddHolidayButton";
import { deletedButtonCondition } from "./utils";

const AddHoliday = () => {
  const {
    calendarState,
    setCalendarState,
    onClickShow,
    onSaveHoliday,
    onCancel,
    deleteHoliday
  } = useContext(CalendarContext);
  const { Group, Label, Control } = Form;
  const { formValue, show } = calendarState;
  const onChange = (name, value) => {
    const formValueAdded = {
      ...formValue,
      [name]: value
    };

    if (name === "start") {
      formValueAdded.end = deletedButtonCondition(value)
        ? new Date(moment(value))
        : formValue?.end;
    } else if (name === "end") {
      formValueAdded.end = new Date(moment(value));
    }
    setCalendarState(data => {
      return {
        ...data,
        formValue: formValueAdded
      };
    });
  };

  // pastDateCanot be deleted

  return (
    <Fragment>
      <AddHolidayButton />
      <Modals
        show={show}
        label={`${formValue?.id ? "Edit" : "Add"} holiday`}
        onClickShow={formValue?.edit && onClickShow}
        isDisable={formValue?.title && formValue?.description ? true : false}
        onSaveHoliday={(formValue?.edit || !formValue?.id) && onSaveHoliday}
        onCancel={onCancel}
        deleteHoliday={
          deletedButtonCondition(formValue?.start) && formValue?.id
            ? () => deleteHoliday(formValue?.id)
            : null
        }
      >
        {formValue?.edit || !formValue?.id ? (
          <Form>
            <Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Label>Holiday</Label>
              <Control
                type="text"
                placeholder="Please enter holiday"
                autoFocus
                value={formValue?.title}
                onChange={e => onChange("title", e.target.value)}
              />
            </Group>
            <Group className="mb-3">
              <Label>Description</Label>
              <Control
                placeholder="Please enter description"
                as="textarea"
                rows={3}
                value={formValue?.description}
                onChange={e => onChange("description", e.target.value)}
              />
            </Group>
            <Row>
              <Col>
                <Group className="mb-3">
                  <Label>Start date</Label>
                  <PickDate
                    selectedDate={formValue?.start}
                    onChange={onChange}
                    disabled={!deletedButtonCondition(formValue?.start)}
                    name="start"
                  />
                </Group>
              </Col>
              <Col>
                <Group className="mb-3">
                  <Label>End date</Label>
                  <PickDate
                    selectedDate={formValue?.end}
                    minDate={formValue?.start}
                    onChange={onChange}
                    disabled={!deletedButtonCondition(formValue?.start)}
                    name="end"
                  />
                </Group>
              </Col>
            </Row>
          </Form>
        ) : (
          <DisplayHolidayDetails details={formValue} />
        )}
      </Modals>
    </Fragment>
  );
};

export default AddHoliday;
