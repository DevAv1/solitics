import { useDispatch, useSelector } from "react-redux";
import { fetchAllEpisodes } from "../../../redux/episodes/episodesActions";
import { useState } from "react";

export const useEpisodes = () => {
  const { allEpisodes } = useSelector((state) => state.episodes);
  const [currentEpisode, setCurrentEpisode] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [filteredData, setFilteredData] = useState();

  const dispatch = useDispatch();

  const onResetQuery = () => {
    dispatch(fetchAllEpisodes());
  };

  const cleanImageUrl = (url) => {
    const jpgIndex = url.indexOf(".jpg");
    const pngIndex = url.indexOf(".png");

    if (jpgIndex !== -1) {
      return url.slice(0, jpgIndex + 4);
    }
    if (pngIndex !== -1) {
      return url.slice(0, pngIndex + 4);
    }
  };

  return {
    allEpisodes,
    onResetQuery,
    cleanImageUrl,
    currentEpisode,
    setCurrentEpisode,
    showModal,
    setShowModal,
    filteredData,
    setFilteredData
  };
};
