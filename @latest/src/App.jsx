import React, { useMemo } from "react";
import usePodcasts from "./api/fetchPodcasts";
import { PodcastUIProvider, usePodcastUI } from "./context/PodcastUIContext";
import SearchBar from "./components/searchBar";
import SortSelect from "./components/sortsSelects";
import GenreFilter from "./components/genreFilter";
import PodcastGrid from "./components/PodcastGrid";
import Pagination from "./components/pagination";
import { genreMap } from "./data";

/**
 * filterAndSortPodcasts - applies search, filters, and sorting
 * @param {Array} list
 * @param {Object} ui
 */
function filterAndSortPodcasts(list, ui) {
  const q = ui.search.trim().toLowerCase();

  // filter by search + genres
  let out = list.filter(p => {
    const titleMatches = p.title && p.title.toLowerCase().includes(q);
    const genreMatch =
      ui.selectedGenres.length === 0 ||
      (p.genres && p.genres.some(g => ui.selectedGenres.includes(g)));
    return titleMatches && genreMatch;
  });

  // sort
  if (ui.sortBy === "newest") {
    out.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
  } else if (ui.sortBy === "title-asc") {
    out.sort((a, b) => a.title.localeCompare(b.title));
  } else if (ui.sortBy === "title-desc") {
    out.sort((a, b) => b.title.localeCompare(a.title));
  }

  // map genre ids to titles for display convenience
  return out.map(p => ({ ...p, genreTitles: (p.genres || []).map(id => genreMap[id] || id) }));
}

function InnerApp() {
  const { loading, error, data } = usePodcasts();
  const { ui, update } = usePodcastUI();

  // compute filtered list
  const filtered = useMemo(() => filterAndSortPodcasts(data, ui), [data, ui]);

  // pagination
  const total = filtered.length;
  const pageCount = Math.max(1, Math.ceil(total / ui.pageSize));
  const currentPage = Math.min(ui.page, pageCount);
  const start = (currentPage - 1) * ui.pageSize;
  const pageItems = filtered.slice(start, start + ui.pageSize);

  // ensure page number stays valid if filters change
  if (ui.page !== currentPage) update({ page: currentPage });

  return (
    <div className="app-container">
      <header>
        <h1>Podcast Browser</h1>
      </header>

      <section className="controls">
        <SearchBar />
        <GenreFilter />
        <SortSelect />
      </section>

      <main>
        {loading && <p>Loading…</p>}
        {error && <p>Error loading podcasts</p>}
        {!loading && !error && (
          <>
            <PodcastGrid podcasts={pageItems} />
            <Pagination
              page={currentPage}
              pageCount={pageCount}
              onPageChange={(p) => update({ page: p })}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <PodcastUIProvider>
      <InnerApp />
    </PodcastUIProvider>
  );
}