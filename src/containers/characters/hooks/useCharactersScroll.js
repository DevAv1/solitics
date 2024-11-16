import { useState, useRef, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharactersByPage } from "../../../redux/characters/charactersActions";

export const useCharactersScroll = (query) => {
  const {
    charactersMeta,
    status,
    error: serverError,
  } = useSelector((state) => state.characters);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(false);

  const dispatch = useDispatch();

  const observer = useRef(null);

  useEffect(() => {
    if (charactersMeta.last_page > page) {
      setHasMore(true);
    } else {
      setHasMore(false);
    }
  }, [charactersMeta, page]);

  useEffect(() => {
    if (query && page !== 2) setPage(2);
  }, [query, page]);

  const lastCharacterRef = useCallback(
    (node) => {
      if (status === "loading") return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore && !query) {
          dispatch(fetchCharactersByPage(page));
          if (page < charactersMeta.last_page) setPage((p) => p + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [status, hasMore]
  );

  return {
    charactersMeta,
    lastCharacterRef,
    page,
    serverError,
  };
};
