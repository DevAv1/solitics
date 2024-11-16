import { useMemo, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Autocomplete, TextField } from "@mui/material";

export const ExtraEpisodesFilters = ({ onApplyFilter, data }) => {
  const [season, setGender] = useState("");
  const [airDate, setAirDate] = useState("");

  const airDatePicklist = useMemo(() => {
    const distinctAirDates = [...new Set(data.map((item) => item.air_date))];
    return distinctAirDates.map((airDate) => ({
      id: airDate,
      label: airDate,
    }));
  }, [data]);

  const handleSeasonChange = (season) => {
    if (season) {
      const filteredData = data.filter((episode) => episode.season === season);
      onApplyFilter(filteredData);
    } else {
      onApplyFilter(undefined);
    }
    setGender(season);
  };

  const handleAirDateChange = (_event, airDateValue) => {
    if (airDateValue) {
      const filteredData = data.filter(
        (episode) => episode.air_date === airDateValue.id
      );
      onApplyFilter(filteredData);
    } else {
      onApplyFilter(undefined);
    }
    setAirDate(airDateValue);
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 800 }}>
        <div className="filter-wrapper">
          <InputLabel id="demo-simple-select-autowidth-label">
            Season
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={season}
            onChange={(event) => handleSeasonChange(event.target.value)}
            autoWidth
            label="GENDER"
            sx={{
              width: 200,
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
          <Autocomplete
            disablePortal
            onChange={handleAirDateChange}
            value={airDate}
            options={airDatePicklist}
            sx={{ width: 200 }}
            renderInput={(params) => (
              <TextField {...params} label="Air Dates" />
            )}
          />
        </div>
      </FormControl>
    </div>
  );
};
