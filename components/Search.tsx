import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";

export const Search: React.FC<{
  label: string;
  handleChange: (value: string) => void;
}> = ({ label, handleChange }) => {
  return (
    <TextField
      label={label}
      onChange={(event: { target: { value: string } }) => {
        handleChange(event.target.value);
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
