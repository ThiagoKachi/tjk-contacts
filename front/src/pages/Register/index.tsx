import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Box,
  Button,
  FormControl,
  FormGroup,
  FormHelperText,
  InputLabel,
  Link,
  NativeSelect,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { BaseLayout } from "../../layout/BaseLayout";
import {
  handlePhone,
  phoneMask,
  removePhoneMask,
} from "../../utils/masks/phone";
import api from "../../services/api";
import Toast from "../../components/Toast";
import { ErrorState } from "../../types/snackBar";
import { BackdropLoading } from "../../components/BackdropLoading";

const contactSchema = z.object({
  name: z.string().nonempty("Nome obrigatório"),
  email: z
    .string()
    .email({ message: "E-mail inválido" })
    .nonempty("E-mail obrigatório"),
  phone: z
    .string()
    .nonempty("Telefone obrigatório")
    .min(14, "Telefone inválido"),
  category: z.string().nonempty("Categoria obrigatória"),
});

type Contact = z.infer<typeof contactSchema>;

interface RegisterProps {
  toggleDarkMode: () => void;
}

export function Register({ toggleDarkMode }: RegisterProps) {
  const navigate = useNavigate();
  const { id: contactId } = useParams();

  const [contact, setContact] = useState<Contact>({} as Contact);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<ErrorState>({
    open: false,
    message: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<Contact>({
    resolver: zodResolver(contactSchema),
    defaultValues: contact,
  });


  useEffect(() => {
    async function getContact() {
      try {
        setIsLoading(true);
        const { data } = await api.get(`/api/contacts/${contactId}`);
        setContact({ ...data.data.attributes, category: "Escola" });
        reset({
          ...data.data.attributes,
          phone: phoneMask(data.data.attributes.phone.toString()),
        });
        setValue("category", data.data.attributes.category);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    if (contactId) {
      getContact();
    }
  }, [contactId, reset, setValue]);

  async function onSubmit(contactData: Contact) {
    try {
      setIsLoading(true);

      if (!contactId) {
        await api.post("/api/contacts", {
          data: {
            ...contactData,
            phone: Number(removePhoneMask(contactData.phone)),
          },
        });
      } else {
        await api.put(`/api/contacts/${contactId}`, {
          data: {
            ...contactData,
            phone: Number(removePhoneMask(contactData.phone)),
          },
        });
      }

      navigate("/");
    } catch (error: any) {
      setIsError({
        open: true,
        message: error?.response?.data.error.message,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <BaseLayout toggleDarkMode={toggleDarkMode}>
      {isLoading && <BackdropLoading isLoading={isLoading} />}

      {isError && (
        <Toast
          open={isError.open}
          setOpen={setIsError}
          message={isError.message}
        />
      )}

      <Link href="/" sx={{ textDecoration: "none" }}>
        <Typography
          variant="h1"
          fontSize="16px"
          fontWeight="600"
          color="primary"
          display="flex"
          alignItems="center"
          mt="32px"
        >
          <ArrowBackIcon fontSize="small" sx={{ marginRight: "4px" }} />
          Voltar
        </Typography>
      </Link>

      <Typography
        variant="h1"
        fontSize="24px"
        fontWeight="600"
        color="text.primary"
        mt="16px"
        mb="24px"
      >
        {contactId ? "Editar contato" : "Novo contato"}
      </Typography>

      <FormGroup>
        <Box display="flex" flexDirection="column" gap="24px">
          <FormControl>
            <TextField
              {...register("name")}
              name="name"
              error={!!errors.name}
              label="Nome"
              color="primary"
              sx={{
                bgcolor: "primary.100",
                "& fieldset": { border: "1px solid #eceff1" },
                borderRadius: "4px",
                boxShadow: "0px 1px 4px rgba(0,0,0,0.1)",
              }}
              InputLabelProps={{ shrink: true, color: "success" }}
            />
            {errors.name?.message && (
              <FormHelperText
                id="component-helper-text"
                sx={{ m: "8px 0", p: 0, height: "1px", color: "#ef5350" }}
              >
                {errors.name?.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl>
            <TextField
              label="E-mail"
              color="primary"
              error={!!errors.email}
              sx={{
                bgcolor: "primary.100",
                "& fieldset": { border: "1px solid #eceff1" },
                borderRadius: "4px",
                boxShadow: "0px 1px 4px rgba(0,0,0,0.1)",
              }}
              {...register("email")}
              name="email"
              InputLabelProps={{ shrink: true }}
            />
            {errors.email?.message && (
              <FormHelperText
                id="component-helper-text"
                sx={{ m: "8px 0", p: 0, height: "1px", color: "#ef5350" }}
              >
                {errors.email?.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl>
            <TextField
              label="Telefone"
              color="primary"
              error={!!errors.phone}
              sx={{
                bgcolor: "primary.100",
                "& fieldset": { border: "1px solid #eceff1" },
                borderRadius: "4px",
                boxShadow: "0px 1px 4px rgba(0,0,0,0.1)",
              }}
              {...register("phone")}
              name="phone"
              onKeyUp={handlePhone}
              inputProps={{ maxLength: 14 }}
              InputLabelProps={{ shrink: true }}
            />

            {errors.phone?.message && (
              <FormHelperText
                id="component-helper-text"
                sx={{ m: "8px 0", p: 0, height: "1px", color: "#ef5350" }}
              >
                {errors.phone?.message}
              </FormHelperText>
            )}
          </FormControl>
        </Box>

        <FormControl
          fullWidth
          sx={{
            mt: "32px",
            bgcolor: "primary.100",
            "& fieldset": { border: "1px solid #eceff1" },
            borderRadius: "4px",
            boxShadow: "0px 1px 4px rgba(0,0,0,0.1)",
          }}
        >
          <InputLabel>Categoria</InputLabel>
          <NativeSelect
            {...register("category")}
            name="category"
            defaultValue={contact.category || "Discord"}
            sx={{
              height: "40px",
              padding: "0 16px",
              pb: "8px",
              ".MuiSvgIcon-root ": {
                marginTop: "-4px",
              },
            }}
          >
            <option value={"Discord"}>Discord</option>
            <option value={"Facebook"}>Facebook</option>
            <option value={"Instagram"}>Instagram</option>
            <option value={"Twitter"}>Twitter</option>
            <option value={"Faculdade"}>Faculdade</option>
            <option value={"Escola"}>Escola</option>
            <option value={"Familia"}>Familia</option>
            <option value={"Outro"}>Outro</option>
          </NativeSelect>
        </FormControl>

        <Button
          sx={{
            mt: "24px",
            height: "56px",
            textTransform: "none",
            bgcolor: "#2e7d32",
            color: "#fff",
          }}
          variant="contained"
          type="button"
          onClick={handleSubmit(onSubmit)}
        >
          <Typography component="span" fontWeight="700">
            {contactId ? "Salvar" : "Criar contato"}
          </Typography>
        </Button>
      </FormGroup>
    </BaseLayout>
  );
}
