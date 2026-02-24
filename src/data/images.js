/**
 * ════════════════════════════════════════════════════════════
 *  EDIRISINGHE CUSHION WORKS — Centralized Image Registry
 * ════════════════════════════════════════════════════════════
 *
 *  TO SWAP IN YOUR OWN PHOTOS:
 *  1. Copy your photos into /public/images/
 *  2. Replace any URL below with '/images/your-photo.jpg'
 *  3. That's it — every component updates automatically.
 *
 *  Current photos: free stock from Unsplash (unsplash.com)
 *  ─────────────────────────────────────────────────────────
 */

const UNS = 'https://images.unsplash.com/photo-';
const q = '?auto=format&fit=crop&q=80';

// ── Hero Ken Burns Slideshow ─────────────────────────────────
// 6 images loop in sequence with slow pan & zoom (Ken Burns effect).
// TO SWAP IN YOUR OWN ECW PHOTOS:
//   1. Copy photos to /public/images/
//   2. Replace any URL with '/images/hero-1.jpg' etc.
export const heroSlides = [
  `${UNS}1503376780353-7e6692767b70${q}&w=1920&h=1080`, // luxury car interior — dark cockpit
  `${UNS}1533473359331-0135ef1b58bf${q}&w=1920&h=1080`, // glowing dashboard, night atmosphere
  `${UNS}1547037054-3b5b24bb1c1b${q}&w=1920&h=1080`, // premium cream leather seats
  `${UNS}1492144534655-ae79c964c9d7${q}&w=1920&h=1080`, // dark exotic sports car cabin
  `${UNS}1558618666-fcd25c85cd64${q}&w=1920&h=1080`, // ivory quilted leather close-up
  `${UNS}1607853554439-0069ec0f29b6${q}&w=1920&h=1080`, // moody luxury SUV interior
];

// ── Site-wide UI images ──────────────────────────────────────
export const siteImages = {
  /**
   * HERO BACKGROUND (fallback / no longer used as single bg)
   * Kept for backwards compatibility.
   */
  heroBg: `${UNS}1552519507-da3b142c6e3d${q}&w=1920&h=1080`,

  /**
   * KDH SPOTLIGHT (Home page right column)
   * Ideal size: 900×560 landscape
   * Replace with: your best KDH/H300 interior photo
   */
  kdhSpotlight: `${UNS}1609521263047-f8f205293f24${q}&w=900&h=560`,

  /**
   * ABOUT SECTION (Home page left column)
   * Ideal size: 700×900 portrait
   * Replace with: a craftsmanship close-up (stitching, hands, leather)
   */
  aboutCraft: `${UNS}1616422285623-13ff0162193c${q}&w=700&h=900`,
};

// ── Gallery photos ───────────────────────────────────────────
// Each entry maps to a galleryItems entry by 'id'.
// Ideal size: 800×600 (4:3) — shown in grid + lightbox.
export const galleryImages = {
  /** KDH MODIFICATIONS */
  1: `${UNS}1607853554439-0069ec0f29b6${q}&w=800&h=600`, // H300 VIP Lounge
  2: `${UNS}1503376780353-7e6692767b70${q}&w=800&h=600`, // KDH Executive Edition
  3: `${UNS}1492144534655-ae79c964c9d7${q}&w=800&h=600`, // Royal Gold KDH

  /** LUXURY SEDANS */
  4: `${UNS}1544636331-e26879cd4d9b${q}&w=800&h=600`, // Diamond Stitch Seats
  5: `${UNS}1541899481282-d53bffe3c35d${q}&w=800&h=600`, // Falkn Alcantara Sport
  6: `${UNS}1449965408869-eaa3f722e40d${q}&w=800&h=600`, // Cream Nappa Luxury

  /** EXECUTIVE VANS */
  7: `${UNS}1558618666-fcd25c85cd64${q}&w=800&h=600`, // Corporate Shuttle
  8: `${UNS}1547744152-14d985cb937f${q}&w=800&h=600`, // H300 Presidential Suite
  9: `${UNS}1572374329760-b23f3ab8a1e3${q}&w=800&h=600`, // Slate Conference Van
};
