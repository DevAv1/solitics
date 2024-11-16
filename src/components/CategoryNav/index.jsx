import "./style.scss";
import { Button } from "@mui/material";
import { CategoryHelper } from "../../utils/categoryHelper";

export const CategoryNav = ({ onSelectedCategory, category }) => {
  return (
    <div className="category-nav">
      <Button
        variant={`${
          category === CategoryHelper.CHARACTERS ? "contained" : "outlined"
        }`}
        color="warning"
        onClick={() => onSelectedCategory(CategoryHelper.CHARACTERS)}
      >
        characters
      </Button>
      <Button
        variant={`${
          category === CategoryHelper.EPISODES ? "contained" : "outlined"
        }`}
        color="warning"
        onClick={() => onSelectedCategory(CategoryHelper.EPISODES)}
      >
        episodes
      </Button>
    </div>
  );
};
