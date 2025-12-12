import React from "react";
import { usePodcastUI } from "../context/PodcastUIContext";

export default function SortSelect() {
  const { ui, update } = usePodcastUI();
  return (
    <select
      value={ui.sortBy}
      onChange={(e) => update({ sortBy: e.target.value, page: 1 })}
      aria-label="Sort podcasts"
    >
      <option value="newest">Newest first</option>
      <option value="title-asc">Title A–Z</option>
      <option value="title-desc">Title Z–A</option>
    </select>
  );
}