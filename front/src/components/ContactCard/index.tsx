import { useState } from "react";
import { Box, Chip, Stack, Typography, useMediaQuery } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

import { DeleteContactModal } from "../DeleteContactModal";
import { phoneMask } from "../../utils/masks/phone";
import { Contact } from "../../types/contact";
import { useNavigate } from "react-router-dom";

interface ContactCardProps {
  contact: Contact;
  onDeleteContact: (contactId: number) => void;
}

export function ContactCard({ contact, onDeleteContact }: ContactCardProps) {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const directionMedia = useMediaQuery("(max-width: 400px)");

  const handleOpen = () => setOpen(true);

  function handleDeleteContact() {
    onDeleteContact(contact.id);
    setOpen(false);
  }

  function handleEditContact() {
    navigate(`/edit/${contact.id}`);
  }

  return (
    <Box
      bgcolor="primary.100"
      padding="24px"
      borderRadius="4px"
      display="flex"
      alignItems={directionMedia ? "flex-start" : "center"}
      mt="8px"
      flexDirection={directionMedia ? "column" : "row"}
    >
      <Stack spacing="4px" sx={{ flex: 1 }}>
        <Box display="flex" alignItems="center" gap="8px">
          <Typography color="text.primary" fontWeight="600">
            {contact.attributes.name}
          </Typography>
          <Chip
            color="primary"
            size="small"
            label={contact.attributes.category}
            sx={{
              borderRadius: "4px",
              fontWeight: "600",
              color: "primary.main",
              bgcolor: "primary.50",
            }}
          />
        </Box>

        <Typography
          display="flex"
          alignItems="center"
          pt="4px"
          color="text.secondary"
          fontWeight="500"
          fontSize="14px"
          component={"a"}
          href={`mailto:${contact.attributes.email}`}
          sx={{ textDecoration: "none" }}
        >
          {contact.attributes.email}
          <EmailOutlinedIcon sx={{ fontSize: "16px", ml: "6px", mt: '2px' }} />
        </Typography>

        <Typography
          display="flex"
          alignItems="center"
          pt= "2px"
          color="text.secondary"
          fontWeight="500"
          fontSize="14px"
          component={"a"}
          href={`https://api.whatsapp.com/send?phone=${contact.attributes.phone}`}
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: "none" }}
        >
          {phoneMask(String(contact.attributes.phone))}
          <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: "16px", ml: "6px", mt: '2px' }} />
        </Typography>
      </Stack>

      <Box
        width="15%"
        display="flex"
        gap="16px"
        mt={directionMedia ? "8px" : "0"}
      >
        <BorderColorOutlinedIcon
          color="primary"
          cursor="pointer"
          onClick={handleEditContact}
        />
        <DeleteOutlineOutlinedIcon
          color="error"
          cursor="pointer"
          onClick={handleOpen}
        />
      </Box>

      <DeleteContactModal
        open={open}
        setOpen={setOpen}
        handleDeleteContact={handleDeleteContact}
        contactName={contact.attributes.name}
      />
    </Box>
  );
}
