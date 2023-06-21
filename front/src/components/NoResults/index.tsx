import { Box, Typography } from "@mui/material";
import SearchOffIcon from '@mui/icons-material/SearchOff';

interface NoResultsProps {
  filterName: string;
}

export function NoResults({ filterName }: NoResultsProps) {
  return (
    <Box mt="32px" display="flex" alignItems="center" justifyContent="center">
      <SearchOffIcon fontSize="large" color="error" />
      <Typography
        fontSize="16px"
        align="center"
        color="text.secondary"
        ml="24px"
      >
        Nenhum resultado foi encontrado para{' '}
        <strong>"{filterName}"</strong>
      </Typography>
    </Box>
  )
}
