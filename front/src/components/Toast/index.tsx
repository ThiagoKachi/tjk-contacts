import { Button, Snackbar, Typography } from "@mui/material";
import { ErrorState } from "../../types/snackBar";

interface ToastProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<ErrorState>>;
  message: string;
}

export default function Toast({ open, setOpen, message }: ToastProps) {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen({
      open: false,
      message: "",
    });
  };

  const action = (
    <>
      <Button
        color="secondary"
        size="small"
        onClick={handleClose}
        sx={{ height: "56px" }}
      >
        <Typography fontSize="14px" color="primary" mt="2px">
          Fechar
        </Typography>
      </Button>
    </>
  );

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={action}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      />
    </div>
  );
}
