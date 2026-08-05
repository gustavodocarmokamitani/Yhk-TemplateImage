// Generated from album-manifest.json, grouped by day (adjust the timezone in
// scripts/geocode-manifest.mjs) and merging consecutive days that share the
// dominant geocoded city/neighborhood. This is just a starting point: edit
// the text, adjust titles, and feel free to merge, split, or reorder
// chapters — this file is not regenerated automatically.
export interface StoryChapter {
  id: string;
  title: string;
  dateLabel?: string;
  text: string;
  photoIds: string[];
}

// Empty by default — the section that renders these hides itself when the
// list is empty. Run scripts/ingest-album.mjs and scripts/geocode-manifest.mjs
// against your own photos, then add chapters here referencing the resulting
// photoIds.
export const storyChapters: StoryChapter[] = [];
