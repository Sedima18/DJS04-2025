/**
 * SortDropdown.jsx
 * Dropdown component for sorting podcasts.
 */

import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";

/**
 * Sorting control component.
 * @returns {JSX.Element}
 */
const SortDropdown = () => {
  const { sort, setSort, setCurrentPage } = useContext(PodcastContext);

  /**
   * Handle sort option change.
   * @param {React.ChangeEvent<HTMLSelectElement>} event
   */
  const handleChange = (event) => {
    setSort(event.target.value);
    setCurrentPage(1);
  };

  return (
    <select value={sort} onChange={handleChange} className="border p-2 rounded">
      <option value="newest">Newest First</option>
      <option value="title-asc">Title A–Z</option>
      <option value="title-desc">Title Z–A</option>
    </select>
  );
};

export default SortDropdown;