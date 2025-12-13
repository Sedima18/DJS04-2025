/**
 * Pagination.jsx
 * 
 * Pagination controls component for the podcast app.
 * Displays numbered buttons based on the total number of podcasts and items per page.
 * Users can navigate between pages, and the active page is highlighted.
 * 
 * @component
 * @returns {JSX.Element | null} Pagination buttons or null if only one page
 */

import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";

const Pagination = () => {
  const {
    currentPage,
    setCurrentPage,
    totalPodcasts,
    itemsPerPage,
  } = useContext(PodcastContext);

  const totalPages = Math.ceil(totalPodcasts / itemsPerPage);

  if (totalPages <= 1) return null;

  return (
    <div className="pagination flex justify-center gap-2 mt-8">
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded border ${
              currentPage === page
                ? "bg-black text-white"
                : "bg-white"
            }`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;