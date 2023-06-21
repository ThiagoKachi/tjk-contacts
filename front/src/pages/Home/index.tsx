import { useEffect, useState } from "react";
import { Box, Button, Divider } from "@mui/material";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import { SearchInput } from "../../components/SearchInput";
import { NewContact } from "../../components/NewContact";
import { ContactCard } from "../../components/ContactCard";
import { EmptyContacts } from "../../components/EmptyContacts";
import { BackdropLoading } from "../../components/BackdropLoading";
import { NoResults } from "../../components/NoResults";
import Toast from "../../components/Toast";

import { BaseLayout } from "../../layout/BaseLayout";
import { Contact } from "../../types/contact";
import api from "../../services/api";

interface HomeProps {
  toggleDarkMode: () => void;
}

export function Home({ toggleDarkMode }: HomeProps) {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [searchContact, setSearchContact] = useState("");
  const [isSorted, setIsSorted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDeleteContact, setIsLoadingDeleteContact] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState({
    open: false,
    message: "",
  });

  const sortedContacts = contacts.sort((a, b) => (
    isSorted ? a.attributes.name < b.attributes.name
      ? 1 : -1 : a.attributes.name > b.attributes.name ? 1 : -1
  ));

  const filteredContacts =
    searchContact.length > 0
      ? contacts.filter((contact) =>
          contact.attributes.name
            .toLowerCase()
            .includes(searchContact.toLowerCase())
        )
      : sortedContacts;

  async function getContacts() {
    try {
      setIsLoading(true);

      const { data } = await api.get("/api/contacts");

      setContacts(data.data);
    } catch (error) {
      setFeedbackMessage({
        open: true,
        message: "Erro ao carregar contatos!",
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getContacts();
  }, []);

  async function handleDeleteContact(contactId: number) {
    try {
      setIsLoadingDeleteContact(true);

      await api.delete(`/api/contacts/${contactId}`);

      setFeedbackMessage({
        open: true,
        message: "Contato excluído com sucesso!",
      });

      setContacts((prevState) =>
        prevState.filter((contact) => contact.id !== contactId)
      );
    } catch (error) {
      setFeedbackMessage({
        open: true,
        message: "Erro ao excluir contato!",
      });
    } finally {
      setIsLoadingDeleteContact(false);
    }
  }

  function handleSortContacts() {
    setIsSorted(!isSorted);
  }

  return (
    <BaseLayout isLoading={isLoading} toggleDarkMode={toggleDarkMode}>
      {isLoadingDeleteContact && (
        <BackdropLoading isLoading={isLoadingDeleteContact} />
      )}

      {feedbackMessage && (
        <Toast
          open={feedbackMessage.open}
          setOpen={setFeedbackMessage}
          message={feedbackMessage.message}
        />
      )}

      {contacts.length === 0 ? (
        <Box mt="32px">
          <NewContact
            hasContacts={contacts.length > 0}
            contactsLength={contacts.length}
          />
          <Divider />
          <EmptyContacts />
        </Box>
      ) : (
        <>
          <SearchInput
            searchContact={searchContact}
            setSearchContact={setSearchContact}
          />
          <NewContact contactsLength={contacts.length} />

          <Divider />

          {filteredContacts.length > 0 && (
            <Button sx={{ mt: "8px" }} onClick={handleSortContacts}>
              {isSorted ? (
                <ArrowUpwardIcon fontSize="small" sx={{ mr: '4px' }} />
              ) : (
                <ArrowDownwardIcon fontSize="small" sx={{ mr: '4px' }} />
              )}
              Nome
            </Button>
          )}

          <Box
            sx={{
              "& > :last-child": {
                marginBottom: "32px",
              },
            }}
          >
            {filteredContacts.length > 0 ? (
              filteredContacts.map((contact) => (
                <ContactCard
                  key={contact.id}
                  contact={contact}
                  onDeleteContact={handleDeleteContact}
                />
              ))
            ) : (
              <NoResults filterName={searchContact} />
            )}
          </Box>
        </>
      )}
    </BaseLayout>
  );
}
