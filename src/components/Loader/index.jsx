import { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";

export const Loader = () => {
  const { status: charactersStatus } = useSelector((state) => state.characters);
  const { status: episodesStatus } = useSelector((state) => state.episodes);

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (episodesStatus === "loading" || charactersStatus === "loading") {
      setOpen(true);
    } else {
      handleClose();
    }
  }, [episodesStatus, charactersStatus]);

  return (
    <div>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};
