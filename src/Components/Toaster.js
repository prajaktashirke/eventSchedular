import React from "react";
import { Col, Row, Toast, ToastContainer } from "react-bootstrap";

const Toaster = ({ toaster, setToaster }) => {
  return (
    <Row>
      <Col xs={6}>
        <ToastContainer className={"mt-4"} position={"top-end"}>
          <Toast
            onClose={() => setToaster({ display: false, label: "" })}
            show={toaster?.display}
            bg={"success"}
            delay={5000}
            autohide
          >
            <Toast.Header>
              <strong className="me-auto">{toaster?.label}</strong>
            </Toast.Header>
          </Toast>
        </ToastContainer>
      </Col>
    </Row>
  );
};

export default Toaster;
