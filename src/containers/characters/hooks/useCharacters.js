import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCharacters } from "../../../redux/characters/charactersActions";

export const useCharacters = () => {
  const { allCharacters } = useSelector((state) => state.characters);
  const [currentCharacter, setCurrentCharacter] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [filteredData, setFilteredData] = useState();

  const dispatch = useDispatch();

  const onResetQuery = () => {
    dispatch(fetchAllCharacters());
  };

  return {
    allCharacters,
    onResetQuery,
    currentCharacter,
    setCurrentCharacter,
    showModal,
    setShowModal,
    filteredData,
    setFilteredData,
  };
};
