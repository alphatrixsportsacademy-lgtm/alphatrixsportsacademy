/**
 * Central image manifest.
 *
 * Every image used on the site lives here so the whole set can be swapped for
 * real Alphatrix photography in one place. Images are remote (Unsplash CDN /
 * Wikimedia Commons) and served with consistent crop params.
 *
 * NOTE: These are curated, reliable, publicly hotlinkable stock photos used as
 * placeholders. Replace each entry with the actual Alphatrix image URL when
 * real assets become available.
 */

const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

const commons = (path: string, w = 1000) =>
  `https://thumb.wikimedia.org/wikipedia/commons/thumb/${path}/${w}px-${path.split("/").pop()}`;

export const images = {
  /** Hero — energetic sports action */
  hero: u("photo-1547347298-4074fc3086f0", 1600),

  /** What is Alphatrix — split layout */
  aboutMain: u("photo-1517963879433-6ad2b056d712", 1100),
  aboutSecondary: u("photo-1552674605-db6ffd4facb5", 900),

  /** Welcome to Alphatrix — small side visual */
  welcome: u("photo-1509062522246-3755977927d7", 900),

  /** For You cards */
  forYouSchools: u("photo-1509062522246-3755977927d7", 800),
  forYouResidential: u("photo-1547347298-4074fc3086f0", 800),
  forYouCoaches: u("photo-1534438327276-14e5300c3a48", 800),
  forYouCorporates: u("photo-1571019613454-1cb2f99b2d8b", 800),

  /** Programs for children */
  childrenFitness: u("photo-1518611012118-696072aa579a", 900),
  childrenSports: u("photo-1517963879433-6ad2b056d712", 900),
  childrenMovement: commons(
    "f/f8/Kids_Yoga_%2819125038413%29.jpg",
    900,
  ),
  childrenGames: commons(
    "d/d9/2014-11-15_Relay_race_on_the_Sports_day_of_Haikou_Elementary_School_%28Zhunan%29.jpg",
    900,
  ),
  childrenStrength: u("photo-1599058917212-d750089bc07e", 900),
  childrenAthletics: u("photo-1552674605-db6ffd4facb5", 900),
  childrenSpecial: u("photo-1540497077202-7c8a3999166f", 900),

  /** Schools */
  schoolsMain: commons(
    "0/06/SPORTS_DAY_HOLYCROSS_SCHOOL_SALEM.jpg",
    1200,
  ),

  /** Corporate wellness */
  corporateMain: u("photo-1571019613454-1cb2f99b2d8b", 1200),
  corporateWellness: u("photo-1545558014-8692077e9b5c", 900),
  corporateStrength: u("photo-1540497077202-7c8a3999166f", 900),
  corporateAthletics: u("photo-1552674605-db6ffd4facb5", 900),

  /** KEA Campus */
  keaMain: u("photo-1534438327276-14e5300c3a48", 1200),
  keaSecondary: u("photo-1526506118085-60ce8714f8c5", 900),

  /** Virtual training */
  virtualMain: u("photo-1571019614242-c5c5dee9f50b", 1200),
} as const;

export type ImageKey = keyof typeof images;