/**
 * PodcastContext.jsx
 * Centralised state management for podcasts.
 */

import { createContext, useEffect, useState } from "react";

export const PodcastContext = createContext();

export const PodcastProvider = ({ children }) => {
  const [allPodcasts, setAllPodcasts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");
  const [filterGenre, setFilterGenre] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;

  /**
   * Fetch podcasts once on load
   */
  useEffect(() => {
    fetch("https://podcast-api.netlify.app")
      .then((res) => res.json())
      .then((data) => setAllPodcasts(data))
      .catch((err) => console.error(err));
  }, []);

  /**
   * Filter + search
   */
  const filteredPodcasts = allPodcasts.filter((podcast) => {
    const matchesSearch = podcast.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGenre = filterGenre
      ? podcast.genres.includes(filterGenre)
      : true;

    return matchesSearch && matchesGenre;
  });

  /**
   * Sort
   */
  const sortedPodcasts = [...filteredPodcasts].sort((a, b) => {
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
   * Pagination slice
   */
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedPodcasts = sortedPodcasts.slice(
    startIndex,
    endIndex
  );

  return (
    <PodcastContext.Provider
      value={{
        podcasts: paginatedPodcasts,
        totalPodcasts: sortedPodcasts.length,
        currentPage,
        setCurrentPage,
        itemsPerPage,
        search,
        setSearch,
        sort,
        setSort,
        filterGenre,
        setFilterGenre,
      }}
    >
      {children}
    </PodcastContext.Provider>
  );
};