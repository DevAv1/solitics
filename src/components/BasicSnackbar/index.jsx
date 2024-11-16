import { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { useSelector } from "react-redux";

export const BasicSnackbar = () => {
  const [open, setOpen] = useState(false);

  const { error: characterError } = useSelector((state) => state.characters);
  const { error: episodesError } = useSelector((state) => state.episodes);

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (characterError) setErrorMessage(characterError.message);
    if (episodesError) setErrorMessage(episodesError.message);
  }, [characterError, episodesError]);

  useEffect(() => {
    if (errorMessage) {
      setOpen(true);
      setTimeout(() => {
        handleClose();
        setErrorMessage("");
      }, 6000);
    }
  }, [errorMessage]);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={errorMessage}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#f44336",
            color: "#fff",
            fontWeight: "bold",
            border: "2px solid white",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
          },
        }}
      />
    </div>
  );
};
