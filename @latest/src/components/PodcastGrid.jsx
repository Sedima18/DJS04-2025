import React from "react";
import PodcastCard from "./PodcastCard";

/**
 * PodcastGrid - displays a list of PodcastCard components
 * @param {{ podcasts: Array }} props
 */
export default function PodcastGrid({ podcasts }) {
  if (!podcasts.length) return <p>No results.</p>;

  return (
    <div className="podcast-grid">
      {podcasts.map(p => (
        <PodcastCard key={p.id} podcast={p} />
      ))}
    </div>
  );
}