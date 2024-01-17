import React from "react";
import { ProgressBar } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

export const BootstrapModal = ({title}) => {
  return (
    <div
      className="modal"
      style={{ display: "block", position: "fixed", top: '20%' }}
    >
      <Modal.Dialog>
    
        <Modal.Body>
          <p>{title}</p>
          <ProgressBar now={40} />
        </Modal.Body>

      </Modal.Dialog>
    </div>
  );
};
