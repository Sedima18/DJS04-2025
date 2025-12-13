# React Podcast App (DSJ04)

**Project Folder:** `DSJ04-React-Podcast-App`  
**Description:** A React application to browse, search, filter, sort, and paginate podcasts.

---

## Overview

This app allows users to:

- Search podcasts by title.
- Filter podcasts by genre.
- Sort podcasts by newest first or alphabetically.
- View podcast details including title, number of seasons, genres, and last updated date.
- Navigate multiple pages of podcasts using pagination.

All podcast data is fetched from the public API: (https://podcast-api.netlify.app).  
Genre names are mapped locally from `data.js`.

---

## Features

- **Responsive grid layout** for podcasts (up to 4 cards per row on desktop).  
- **Podcast cards** show:
  - Title
  - Number of seasons (from API)
  - Genres (mapped from `data.js`)
  - Last updated date
- **Search, filter, and sort** controls are synchronized and responsive.  
- **Pagination** maintains current search/filter/sort state.  
- Clean and modular React components with JSDoc documentation.
