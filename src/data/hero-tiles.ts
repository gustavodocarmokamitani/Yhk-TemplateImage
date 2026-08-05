// No tiles ship with the template. Drop cropped images into
// public/hero-tiles/ and list them here (or regenerate this file from your
// own album) to populate the hero marquee.
//
// The list below is seeded with generic stock photos (Unsplash) purely as a
// placeholder so the marquee isn't empty — swap them out for real photos
// from your own trip.
export interface HeroTile {
  src: string;
  width: number;
  height: number;
}

export const heroTiles: HeroTile[] = [
  {
    src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    width: 1600,
    height: 1067,
  },
  {
    src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
    width: 1067,
    height: 1600,
  },
  {
    src: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=80",
    width: 1600,
    height: 1067,
  },
  {
    src: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&q=80",
    width: 1067,
    height: 1600,
  },
  {
    src: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80",
    width: 1600,
    height: 1067,
  },
  {
    src: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&q=80",
    width: 1600,
    height: 1067,
  },
  {
    src: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80",
    width: 1067,
    height: 1600,
  },
  {
    src: "https://images.unsplash.com/photo-1490642914619-7955a3fd483c?w=800&q=80",
    width: 1600,
    height: 1067,
  },
  {
    src: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80",
    width: 1600,
    height: 1067,
  },
  {
    src: "https://images.unsplash.com/photo-1554797589-7241bb691973?w=800&q=80",
    width: 1067,
    height: 1600,
  },
  {
    src: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
    width: 1600,
    height: 1067,
  },
  {
    src: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800&q=80",
    width: 1067,
    height: 1600,
  },
];
