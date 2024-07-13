import { Modal, Typography } from "@mui/material";
import { ModalContent } from "../../assets/styles/ModalStyle";
import { OrangeButton } from "../../assets/styles/Buttons";
import { useNavigate } from "react-router-dom";

const CustomSignUpModal = ({ isOpen, isClose }) => {
    const navigate = useNavigate()


  return (
    <>
      <Modal open={isOpen} onClose={isClose}>
        <ModalContent sx={{textAlign: "center", lineHeight: 5}}>
            <Typography>Musisz być zalogowany, żeby zaobserwować użytkownika.</Typography>
            <OrangeButton onClick={() => navigate('/signin')}>Przejdź do logowania</OrangeButton>
            <Typography>Lub</Typography>
            <OrangeButton onClick={() => navigate('/signup')}>Załóż konto</OrangeButton>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomSignUpModal;
