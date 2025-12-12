import { genres } from "../data.js";   // get genre data

export default function PodcastCard({ podcast }) {

  // Convert genre IDs to names using .find()
  const genreNames = podcast.genres
    ? podcast.genres
        .map((id) => {
          const g = genres.find((genre) => genre.id === id);
          return g ? g.title : "Unknown";
        })
        .join(", ")
    : "Unknown";

  const updatedDate = podcast.updated
    ? new Date(podcast.updated).toLocaleDateString()
    : "N/A";

  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      textAlign: "center"
    }}>
      <img
        src={podcast.image}
        alt={podcast.title}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3>{podcast.title}</h3>

      <p>Seasons: {podcast.seasons}</p>

      {/* ✔ NOW SHOWS REAL GENRE NAMES */}
      <p>Genres: {genreNames}</p>

      <p>Updated: {updatedDate}</p>
    </div>
  );