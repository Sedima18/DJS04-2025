/**
 * PodcastGrid.jsx
 * Displays a responsive grid of podcast cards.
 */

import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";
import PodcastCard from "./PodcastCard";

/**
 * Podcast grid component.
 * @returns {JSX.Element}
 */
const PodcastGrid = () => {
  const { podcasts } = useContext(PodcastContext);

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast.id} podcast={podcast} />
      ))}
    </div>
  );
};

export default PodcastGrid;