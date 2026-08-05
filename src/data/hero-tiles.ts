// No tiles ship with the template. Drop cropped images into
// public/hero-tiles/ and list them here (or regenerate this file from your
// own album) to populate the hero marquee.
export interface HeroTile {
  src: string;
  width: number;
  height: number;
}

export const heroTiles: HeroTile[] = [];
