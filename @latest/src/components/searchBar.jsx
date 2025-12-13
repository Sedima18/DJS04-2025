import React from "react";
import { usePodcastUI } from "../context/PodcastContext";

/**
 * SearchBar - controlled input that updates UI state
 */
export default function SearchBar() {
  const { ui, update } = usePodcastUI();
  return (
    <div className="searchbar">
      <input
        aria-label="Search podcasts"
        placeholder="Search podcasts..."
        value={ui.search}
        onChange={(e) => update({ search: e.target.value, page: 1 })}
      />
      <button onClick={() => update({ search: "", page: 1 })}>Clear</button>
    </div>
  );
}
