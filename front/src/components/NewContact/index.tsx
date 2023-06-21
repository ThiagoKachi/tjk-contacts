import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

interface NewContactProps {
  hasContacts?: boolean;
  contactsLength: number;
}

export function NewContact({ contactsLength, hasContacts = true }: NewContactProps) {
  const directionMedia = useMediaQuery("(max-width: 400px)");

  return (
    <Box
      display="flex"
      alignItems={directionMedia ? "flex-start" : "center"}
      justifyContent={hasContacts ? 'space-between' : 'center'}
      flexDirection={directionMedia ? "column" : "row"}
      width="100%"
      mb="24px"
      mt={hasContacts ? 0 : '40px'}
    >
      {hasContacts && (
        <Typography
          variant="h1"
          fontSize="24px"
          fontWeight="600"
          mb={directionMedia ? "8px" : 0}
        >
          {contactsLength > 1 ? `${contactsLength} Contatos` : `${contactsLength} Contato`}
        </Typography>
      )}
      <Link to="/register">
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          sx={{
            ":hover": {
              bgcolor: "primary.main",
              color: "white",
              border: 2,
            },
            border: 2,
            paddingY: "8px",
          }}
        >
          <Typography component="span" fontWeight="500">
            Novo Contato
          </Typography>
        </Button>
      </Link>
    </Box>
  );
}
