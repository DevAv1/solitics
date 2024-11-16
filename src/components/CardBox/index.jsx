import "./style.scss";
import Card from "@mui/material/Card";
import { styled } from "@mui/system";

const DarkCard = styled(Card)(() => ({
  backgroundColor: "#333",
  color: "#fff",
  borderRadius: "8px",
  transition: "transform 0.3s ease, opacity 0.6s ease",

  opacity: 0,
  animation: "fadeIn 0.6s forwards",

  "&:hover": {
    transform: "scale(1.05)",
  },

  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
}));

export const CardBox = ({ children }) => {
  return (
    <DarkCard className="dark-card" sx={{ minWidth: 250, maxHeight: 300 }}>
      {children}
    </DarkCard>
  );
};
