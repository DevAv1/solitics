import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEpisodesByPage } from "../../../redux/episodes/episodesActions";

export const useEpisodesScroll = (query) => {
  const {
    episodesMeta,
    status,
    error: serverError,
  } = useSelector((state) => state.episodes);
  const [page, setPage] = useState(2);

  const hasMore = useMemo(() => {
    return episodesMeta.last_page > page;
  }, [episodesMeta, page]);
  const dispatch = useDispatch();

  const observer = useRef(null);

  useEffect(() => {
    if (query && page !== 2) setPage(2);
  }, [query, page]);

  const lastEpisodeRef = useCallback(
    (node) => {
      if (status === "loading") return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore && !query) {
          dispatch(fetchEpisodesByPage(page));
          if (page < episodesMeta.last_page) setPage((p) => p + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [status, hasMore]
  );

  return {
    episodesMeta,
    lastEpisodeRef,
    page,
    serverError,
  };
};
