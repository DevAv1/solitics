import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#242424",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const BasicModal = ({ isShow, onClose, children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(isShow);
  }, [isShow]);

  const handleClose = () => onClose(false);

  return (
    <div>
      <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          {children}
          <Button
            onClick={handleClose}
            sx={{ mt: 3 }}
            variant="contained"
            color="warning"
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
