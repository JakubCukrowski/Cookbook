import { Box, Typography, Modal } from "@mui/material";
import styled from "styled-components";
import { OrangeButton } from "../../assets/styles/Buttons";

const ModalContentWrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  -webkit-box-shadow: 0 0 6px 4px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0 0 6px 4px rgba(66, 68, 90, 1);
  box-shadow: 0 0 6px 4px rgba(66, 68, 90, 1);
  background-color: white;
  border-radius: 8px;
`;

const CustomizedModal = ({ modalOpen, handleCloseModal, recipeName, handleDelete, handleCancel }) => {
  return (
    <>
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <ModalContentWrapper>
          <Typography>Jesteś pewien, że chcesz usunąć {recipeName}?</Typography>
          <Box
            sx={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <OrangeButton
              variant="error"
              sx={{ backgroundColor: "tomato !important" }}
              onClick={handleDelete}
            >
              Tak
            </OrangeButton>
            <OrangeButton onClick={handleCancel}>Anuluj</OrangeButton>
          </Box>
        </ModalContentWrapper>
      </Modal>
    </>
  );
};

export default CustomizedModal;
