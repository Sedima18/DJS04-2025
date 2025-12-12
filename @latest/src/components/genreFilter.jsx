import React from "react";
import { usePodcastUI } from "../context/PodcastUIContext";
import { genres } from "../data/genres";

export default function GenreFilter() {
  const { ui, update } = usePodcastUI();

  const toggle = (id) => {
    const set = new Set(ui.selectedGenres);
    if (set.has(id)) set.delete(id);
    else set.add(id);
    update({ selectedGenres: [...set], page: 1 });
  };

  return (
    <div className="genre-filter">
      <label>Genres</label>
      <div className="genre-list">
        {genres.map(g => (
          <label key={g.id}>
            <input
              type="checkbox"
              checked={ui.selectedGenres.includes(g.id)}
              onChange={() => toggle(g.id)}
            />
            {g.title}
          </label>
        ))}
      </div>
    </div>
  );
}