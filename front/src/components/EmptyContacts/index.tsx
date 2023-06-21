import { Box, Typography } from "@mui/material";

import emptyBox from "../../assets/empty-box.svg";

export function EmptyContacts() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      mt="40px"
    >
      <Box
        component="img"
        src={emptyBox}
        alt="Imagem de uma caixa vazia representando que não há contatos cadastrados"
      />

      <Box width="400px" textAlign="center">
        <Typography mt="16px" color="text.secondary">
          Você ainda não tem nenhum contato cadastrado!
        </Typography>

        <Typography color="text.secondary">
          Clique no botão{' '}
          <Typography component="span" fontWeight="600" color="primary">
            ”Novo contato”
          </Typography>
          {' '}à cima para cadastrar o seu primeiro!
        </Typography>
      </Box>

    </Box>
  );
}
