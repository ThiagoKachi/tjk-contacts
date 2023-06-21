import { Box, Divider, Skeleton } from "@mui/material";

export function SkeletonCard() {
  return (
    <Box mb="16px">
      <Skeleton
        variant="rectangular"
        width="100%"
        height={50}
        sx={{ my: "32px", borderRadius: "4px" }}
      />

      <Box mt="32px" display="flex" width="100%" justifyContent="space-between">
        <Skeleton variant="text" sx={{ fontSize: '3.5rem' }} width="145px" />
        <Skeleton variant="text" sx={{ fontSize: '3.5rem' }} width="145px" />
      </Box>

      <Divider />

      <Skeleton
        variant="rectangular"
        width="100%"
        height={120}
        sx={{ mt: "16px" }}
      />
      <Skeleton
        variant="rectangular"
        width="100%"
        height={120}
        sx={{ mt: "16px" }}
      />
      <Skeleton
        variant="rectangular"
        width="100%"
        height={120}
        sx={{ mt: "16px" }}
      />
      <Skeleton
        variant="rectangular"
        width="100%"
        height={120}
        sx={{ mt: "16px" }}
      />
      <Skeleton
        variant="rectangular"
        width="100%"
        height={120}
        sx={{ mt: "16px" }}
      />
    </Box>
  );
}
