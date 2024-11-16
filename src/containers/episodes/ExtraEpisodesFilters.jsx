import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const ExtraEpisodesFilters = ({ onApplyFilter, data }) => {
  const [season, setGender] = useState("");

  const handleChange = (season) => {
    if (season) {
      const filteredData = data.filter((episode) => episode.season === season);
      onApplyFilter(filteredData);
    } else {
      onApplyFilter(undefined);
    }
    setGender(season);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Season</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={season}
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
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
