/**
 * PodcastContext.jsx
 * Centralised state management for podcasts, search, sort, filter, and pagination.
 */

import { createContext, useEffect, useState } from "react";

/**
 * Podcast preview object
 * @typedef {Object} Podcast
 * @property {number} id
 * @property {string} title
 * @property {string} image
 * @property {string} updated
 * @property {number[]} genres
 */

export const PodcastContext = createContext();

/**
 * PodcastProvider component
 * Manages global podcast state and derived data.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */
export const PodcastProvider = ({ children }) => {
  const [podcasts, setPodcasts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");
  const [filterGenre, setFilterGenre] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  /**
   * Fetch podcast previews from the API on initial render.
   */
  useEffect(() => {
    fetch("https://podcast-api.netlify.app")
      .then((res) => res.json())
      .then((data) => setPodcasts(data))
      .catch((err) => console.error("Failed to fetch podcasts:", err));
  }, []);

  /**
   * Apply search, filter, and sorting logic to podcast list.
   */
  const filteredPodcasts = podcasts
    .filter(
      (podcast) =>
        podcast.title.toLowerCase().includes(search.toLowerCase()) &&
        (filterGenre ? podcast.genres.includes(filterGenre) : true)
    )
    .sort((a, b) => {
      if (sort === "newest") {
        return new Date(b.updated) - new Date(a.updated);
      }
      if (sort === "title-asc") {
        return a.title.localeCompare(b.title);
      }
      if (sort === "title-desc") {
        return b.title.localeCompare(a.title);
      }
      return 0;
    });

  /**
   * Slice podcast list based on current pagination state.
   */
  const paginatedPodcasts = filteredPodcasts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <PodcastContext.Provider
      value={{
        podcasts: paginatedPodcasts,
        totalPodcasts: filteredPodcasts.length,
        search,
        setSearch,
        sort,
        setSort,
        filterGenre,
        setFilterGenre,
        currentPage,
        setCurrentPage,
        itemsPerPage,
      }}
    >
      {children}
    </PodcastContext.Provider>
  );
};
