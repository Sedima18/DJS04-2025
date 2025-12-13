/**
 * App.jsx
 * Root component of the React Podcast App.
 * Wraps the application with PodcastProvider and renders core UI sections.
 */

import React from "react";
import { PodcastProvider } from "./context/PodcastContext";
import PodcastGrid from "./components/PodcastGrid";
import FilterDropdown from "./components/FilterDropdown";
import SortDropdown from "./components/SortDropdown";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import "./App.css";

/**
 * Main application component.
 * @returns {JSX.Element}
 */
const App = () => {
  const handleApply = () => {
    // Optional: trigger any action when clicking the Apply button
    // e.g., refresh search/filter/sort results
    console.log("Apply button clicked");
  };

  return (
    <PodcastProvider>
      <div className="min-h-screen bg-gray-100 p-6">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4"> Podcast App</h1>

          {/* Controls container */}
          <div className="controls">
            <SearchBar />
            <FilterDropdown />
            <SortDropdown />
          </div>
        </header>

        <main>
          <PodcastGrid />
          <Pagination />
        </main>
      </div>
    </PodcastProvider>
  );
};

export default App;