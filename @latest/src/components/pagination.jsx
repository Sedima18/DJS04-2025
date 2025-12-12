import React from "react";

/**
 * Pagination - simple numbered pagination
 */
export default function Pagination({ page, pageCount, onPageChange }) {
  if (pageCount <= 1) return null;
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  return (
    <nav className="pagination" aria-label="Pagination">
      <button disabled={page===1} onClick={() => onPageChange(page-1)}>Prev</button>
      {pages.map(p => (
        <button
          key={p}
          aria-current={p === page ? "page" : undefined}
          onClick={() => onPageChange(p)}
        >
          {p}
        </button>
      ))}
      <button disabled={page===pageCount} onClick={() => onPageChange(page+1)}>Next</button>
    </nav>
  );
}