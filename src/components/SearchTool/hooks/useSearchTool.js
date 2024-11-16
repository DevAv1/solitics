import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
import { useDispatch } from "react-redux";

export const useSearchTool = (fetchAction, resetQueryAction) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const debouncedQuery = useDebounce(query, 500);

  const dispatch = useDispatch();

  const fetchResults = async () => {
    dispatch(fetchAction(query));
  };

  useEffect(() => {
    if (debouncedQuery) {
      fetchResults();
    } else {
      resetQueryAction();
    }
  }, [debouncedQuery]);

  return {
    query,
    results,
    setQuery,
    setResults,
  };
};
