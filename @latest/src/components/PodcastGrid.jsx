/**
 * PodcastGrid.jsx
 * Displays podcasts in a responsive grid layout.
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

  if (podcasts.length === 0) {
    return <p className="text-center mt-10">No podcasts found.</p>;
  }

  return (
    <div
      className="grid gap-6 
                 grid-cols-1 
                 sm:grid-cols-2 
                 md:grid-cols-3 
                 lg:grid-cols-4"
    >
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast.id} podcast={podcast} />
      ))}
    </div>
  );
};

export default PodcastGrid;
