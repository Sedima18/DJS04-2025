/**
 * FilterDropdown.jsx
 * Dropdown component for filtering podcasts by genre.
 */

import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";
import { genres } from "../data/genres";

/**
 * Genre filter dropdown.
 * @returns {JSX.Element}
 */
const FilterDropdown = () => {
  const { filterGenre, setFilterGenre, setCurrentPage } =
    useContext(PodcastContext);

  return (
    <select
      value={filterGenre || ""}
      onChange={(e) => {
        setFilterGenre(Number(e.target.value) || null);
        setCurrentPage(1);
      }}
      className="border p-2 rounded"
    >
      <option value="">All Genres</option>
      {genres.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.title}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdown;