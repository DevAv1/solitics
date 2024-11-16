import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const ExtraCharactersFilters = ({ onApplyFilter, data }) => {
  const [gender, setGender] = useState("");

  const handleChange = (gender) => {
    if (gender) {
      const filteredData = data.filter((character) => character.sex === gender);
      onApplyFilter(filteredData);
    } else {
      onApplyFilter(undefined);
    }
    setGender(gender);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={gender}
          onChange={(event) => handleChange(event.target.value)}
          autoWidth
          label="GENDER"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#ED6C02", // Default border color
              },
              "&:hover fieldset": {
                borderColor: "#ED6C02", // Border color when hovering
              },
              "&.Mui-focused fieldset": {
                borderColor: "#ED6C02", // Border color when focused
              },
            },
            "& .MuiInputLabel-root": {
              color: "#ED6C02", // Label color
            },
            "& .MuiInputBase-root": {
              color: "#ED6C02", // Text color in the input
            },
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
