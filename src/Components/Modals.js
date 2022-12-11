import React from "react";
import { Button, Modal } from "react-bootstrap";

const Modals = ({
  show,
  label,
  onSaveHoliday,
  onCancel,
  isDisable,
  deleteHoliday,
  children
}) => {
  const { Header, Title, Body, Footer } = Modal;

  return (
    <Modal show={show} onHide={onCancel}>
      <Header closeButton>
        <Title>{label}</Title>
      </Header>
      <Body>{children}</Body>
      <Footer>
        <Button variant="secondary" onClick={onCancel}>
          Close
        </Button>
        {onSaveHoliday ? (
          <Button
            disabled={!isDisable}
            variant="primary"
            onClick={onSaveHoliday}
          >
            Save Changes
          </Button>
        ) : null}

        {deleteHoliday ? (
          <Button variant="outline-danger" onClick={deleteHoliday}>
            Delete holiday
          </Button>
        ) : null}
      </Footer>
    </Modal>
  );
};

export default Modals;
