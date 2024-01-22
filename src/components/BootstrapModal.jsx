import React from "react";
import { ProgressBar } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

export const BootstrapModal = ({title, progress}) => {
  return (
    <div
      className="modal"
      style={{ display: "block", position: "fixed", top: '10%' }}
    >
      <Modal.Dialog>
    
        <Modal.Body>
          <p>{title}</p>
          <ProgressBar now={progress} />
        </Modal.Body>

      </Modal.Dialog>
    </div>
  );
};
