import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";

interface SearchInputProps {
  searchContact: string;
  setSearchContact: (value: string) => void;
}

export function SearchInput({ searchContact, setSearchContact }: SearchInputProps) {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
      my="32px"
      bgcolor="white"
      borderRadius="4px"
    >
      <FormControl
        variant="outlined"
        fullWidth
        sx={{
          bgcolor: "primary.100",
          "& fieldset": { border: "1px solid #eceff1" },
          borderRadius: "4px",
          boxShadow: "0px 1px 4px rgba(0,0,0,0.1)",
        }}
      >
        <InputLabel htmlFor="input-with-icon-adornment">
          <Typography color="text.secondary">
            Pesquisar contato..
          </Typography>
        </InputLabel>
        <OutlinedInput
          type="text"
          fullWidth
          value={searchContact}
          sx={{ color: "text.primary" }}
          onChange={(event) => setSearchContact(event.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="search" edge="start">
                <SearchIcon sx={{ color: "#9e9e9e" }} />
              </IconButton>
            </InputAdornment>
          }
          label="Pesquisar contato.."
        />
      </FormControl>
    </Box>
  );
}
