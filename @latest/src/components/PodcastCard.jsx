/**
 * PodcastCard.jsx
 * 
 * Displays a single podcast preview card inside a responsive grid.
 * Each card contains an image, title, and last updated date.
 * 
 * @component
 * @param {Object} props - React props
 * @param {Object} props.podcast - Podcast object containing data
 * @param {string} props.podcast.image - URL of the podcast image
 * @param {string} props.podcast.title - Title of the podcast
 * @param {string} props.podcast.updated - ISO string of the last updated date
 * @returns {JSX.Element} A styled podcast card component
 */

const PodcastCard = ({ podcast }) => {
  return (
    <div className="podcast-card bg-white p-4 rounded-lg shadow transition-transform hover:-translate-y-1 hover:shadow-lg flex flex-col">
      
      {/* Image container */}
      <div className="podcast-image w-full h-36 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
        <img
          src={podcast.image}
          alt={podcast.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Podcast title */}
      <h2 className="mt-3 text-base font-semibold text-gray-900">
        {podcast.title}
      </h2>

      {/* Podcast date */}
      <p className="text-sm text-gray-500 mt-1">
        Last updated: {new Date(podcast.updated).toLocaleDateString()}
      </p>
    </div>
  );
};

export default PodcastCard;
