import { Box, Typography, Link, useMediaQuery } from "@mui/material";

export default function Logo() {
  const sizeMedia = useMediaQuery('(max-width: 400px)');

  return (
    <Link href="/" style={{ textDecoration: 'none' }}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        pt="64px"
      >
        <Typography
          component="h1"
          fontSize={sizeMedia ? '2.5em' : '3em'}
          fontWeight="900"
          color="text.primary"
        >
          Tjk
        </Typography>
        <Typography
          component="h1"
          fontSize={sizeMedia ? '2.5em' : '3em'}
          fontWeight="900"
          color="primary.main"
          ml="-2px"
        >
          Contacts
        </Typography>
      </Box>
    </Link>
  );
}
