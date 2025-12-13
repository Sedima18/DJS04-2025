/**
 * PodcastCard.jsx
 * Displays a single podcast preview.
 */

/**
 * @param {Object} props
 * @param {import("../context/PodcastContext").Podcast} props.podcast
 * @returns {JSX.Element}
 */
const PodcastCard = ({ podcast }) => {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <img
        src={podcast.image}
        alt={podcast.title}
        className="w-full h-40 object-cover rounded mb-2"
      />
      <h2 className="font-bold text-lg">{podcast.title}</h2>
      <p className="text-sm text-gray-500">
        Last updated: {new Date(podcast.updated).toLocaleDateString()}
      </p>
    </div>
  );
};

export default PodcastCard;