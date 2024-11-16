import { useState } from "react";
import "./App.scss";
import { HeaderTitle } from "./components/HeaderTitle";
import { Characters } from "./containers/characters";
import { Episodes } from "./containers/episodes";
import { CategoryHelper } from "./utils/categoryHelper";
import { CategoryNav } from "./components/CategoryNav";
import { Loader } from "./components/Loader";
import { BasicSnackbar } from "./components/BasicSnackbar";
import { Welcome } from "./containers/welcome";

export const App = () => {
  const [category, setCategory] = useState(CategoryHelper.CHARACTERS);
  return (
    <div className="app">
      <HeaderTitle />
      <CategoryNav
        onSelectedCategory={(categoryValue) => setCategory(categoryValue)}
        category={category}
      />
      {!category && <Welcome />}
      {category === CategoryHelper.CHARACTERS && <Characters />}
      {category === CategoryHelper.EPISODES && <Episodes />}
      <Loader />
      <BasicSnackbar />
    </div>
  );
};
