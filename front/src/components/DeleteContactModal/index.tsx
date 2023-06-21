import { Modal, Box, Typography, Button } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
};

interface DeleteContactModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleDeleteContact: () => void;
  contactName: string;
}

export function DeleteContactModal({
  open,
  setOpen,
  handleDeleteContact,
  contactName,
}: DeleteContactModalProps) {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 300,
        },
      }}
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          color="primary"
          fontWeight="600"
          fontSize="22px"
          lineHeight="32px"
        >
          Tem certeza que deseja remover o contato ”{contactName}”?
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 1 }} color="text.secondary">
          Esta ação não poderá ser desfeita!
        </Typography>

        <Box
          width="100%"
          mt="32px"
          display="flex"
          justifyContent="flex-end"
          gap="8px"
        >
          <Button onClick={handleClose} variant="text">
            Cancelar
          </Button>
          <Button onClick={handleDeleteContact} variant="contained">
            Deletar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
