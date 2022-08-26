import { IconButton, Typography } from "@mui/material";
import * as React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const PageButtons: React.FC<{
  pageNumber: number;
  handleLeft: () => void;
  handleRight: () => void;
}> = ({ pageNumber, handleLeft, handleRight }) => {
  return (
    <div>
      <IconButton onClick={handleLeft}>
        <ArrowBackIcon />
      </IconButton>
      <IconButton onClick={handleRight}>
        <ArrowForwardIcon />
      </IconButton>
      <Typography sx={{ fontSize: 14 }} color="text.secondary">
        Page: {pageNumber}
      </Typography>
    </div>
  );
};
