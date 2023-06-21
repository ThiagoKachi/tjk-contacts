import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import Logo from "../components/Logo";
import { SkeletonCard } from "../components/SkeletonCard";
import { ThemeSwitchButton } from "../components/ThemeSwitchButton";

interface BaseLayoutProps {
  children: React.ReactNode;
  toggleDarkMode: () => void;
  isLoading?: boolean;
}

export function BaseLayout({ children, isLoading, toggleDarkMode }: BaseLayoutProps) {
  const paddingMedia = useMediaQuery("(max-width: 560px)");

  return (
    <Box
      flex="1"
      bgcolor="primary.50"
      minHeight="100vh"
      width="100%"
      display="flex"
      alignItems="center"
      flexDirection="column"
      px={paddingMedia ? "32px" : "0px"}
    >
      <Box
        width="100%"
        display="flex"
        alignItems="flex-end"
        justifyContent="flex-end"
        padding="16px"
      >
        <ThemeSwitchButton toggleDarkMode={toggleDarkMode} />
      </Box>

      <Box width="100%" maxWidth="500px">
        <Logo />

        {isLoading ? <SkeletonCard /> : children}
      </Box>
    </Box>
  );
}
