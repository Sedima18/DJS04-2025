/**
 * Pagination.jsx
 * Pagination controls component.
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
