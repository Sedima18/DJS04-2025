/**
 * SearchBar.jsx
 * Input component for searching podcasts by title.
 */

import { useContext, useEffect, useState } from "react";
import { PodcastContext } from "../context/PodcastContext";

/**
 * Search bar with debounced input handling.
 * @returns {JSX.Element}
 */
const SearchBar = () => {
  const { setSearch, setCurrentPage } = useContext(PodcastContext);
  const [term, setTerm] = useState("");

  /**
   * Debounce search input to reduce unnecessary updates.
   */
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearch(term);
      setCurrentPage(1);
    }, 300);

    return () => clearTimeout(timeout);
  }, [term, setSearch, setCurrentPage]);

  return (
    <input
      type="text"
      value={term}
      onChange={(e) => setTerm(e.target.value)}
      placeholder="Search podcasts..."
      className="border p-2 rounded w-full sm:w-80"
    />
  );
};

export default SearchBar;