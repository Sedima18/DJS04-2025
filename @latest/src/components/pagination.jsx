/**
 * Pagination.jsx
 * Handles pagination controls for podcast results.
 */

import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";

/**
 * Pagination component.
 * @returns {JSX.Element}
 */
const Pagination = () => {
  const { currentPage, setCurrentPage, totalPodcasts, itemsPerPage } =
    useContext(PodcastContext);

  const totalPages = Math.ceil(totalPodcasts / itemsPerPage);

  return (
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`px-3 py-1 border rounded ${
            currentPage === index + 1 ? "bg-black text-white" : ""
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;