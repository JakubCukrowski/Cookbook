import React from "react";
import { ProgressBar, Button, ModalHeader } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export const BootstrapModal = ({ title, progress, withTitle, modalTitle, onCancel, onConfirm }) => {
  return (
    <div className="modal modal_styles">
      <Modal.Dialog>
        {withTitle ? (
          <ModalHeader>
            <Modal.Title>{modalTitle}</Modal.Title>
          </ModalHeader>
        ) : null}
        <Modal.Body>
          <p>{title}</p>
          {withTitle ? null : <ProgressBar now={progress} />}
        </Modal.Body>
        {withTitle ? (
          <Modal.Footer>
            <Button onClick={onCancel} variant="dark">Anuluj</Button>
            <Button onClick={onConfirm} variant="danger">Usuń</Button>
          </Modal.Footer>
        ) : null}
      </Modal.Dialog>
    </div>
  );
};
