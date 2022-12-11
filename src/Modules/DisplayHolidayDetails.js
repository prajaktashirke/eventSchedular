import moment from "moment";
import React, { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CalendarContext from "../context/CalendarContext";

const DisplayHolidayDetails = ({ details }) => {
  const { editMode } = useContext(CalendarContext);
  return (
    <Container>
      <div className="editButton">
        <Button variant="outline-primary" onClick={editMode}>
          Edit
        </Button>
      </div>
      <Row className="mt-2">
        <Col sm="3">
          <b>Holiday:</b>{" "}
        </Col>
        <Col>{details?.title}</Col>
      </Row>
      <Row className="mt-2">
        <Col sm="3">
          <b>Description:</b>{" "}
        </Col>
        <Col>{details?.description}</Col>
      </Row>
      <div className="mt-2">
        <Row>
          <Col sm="3">
            <b>Start Date:</b>
          </Col>
          <Col sm="3">{moment(details?.start).format("MM/DD/YYYY")}</Col>
        </Row>
      </div>
      <div className="mt-2">
        <Row>
          <Col sm="3">
            <b>End Date:</b>
          </Col>
          <Col sm="3">{moment(details?.end).format("MM/DD/YYYY")}</Col>
        </Row>
      </div>
    </Container>
  );
};

export default DisplayHolidayDetails;
