import TextField from "@mui/material/TextField";

export const SearchTool = ({ query, onQueryChange }) => {
  return (
    <div>
      <TextField
        sx={{
          "& .MuiInputLabel-root": {
            color: "#ED6C02",
          },
          "& .MuiInputBase-root": {
            color: "white",
          },
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          borderRadius: "4px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#ED6C02",
            },
            "&:hover fieldset": {
              borderColor: "#ED6C02",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#ED6C02",
            },
          },
        }}
        id="outlined-basic"
        label="Search Keyword"
        variant="outlined"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
    </div>
  );
};
