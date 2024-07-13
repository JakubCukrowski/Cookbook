import { Box, Typography, Modal } from "@mui/material";
import { OrangeButton } from "../../assets/styles/Buttons";
import { ModalContent } from "../../assets/styles/ModalStyle";

const CustomizedModal = ({ modalOpen, handleCloseModal, recipeName, handleDelete, handleCancel }) => {
  return (
    <>
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <ModalContent>
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
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomizedModal;
