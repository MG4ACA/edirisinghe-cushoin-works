<template>
  <div>
    <!-- ══════════════  HERO  ══════════════ -->
    <section class="ecw-hero">
      <!-- Ken Burns slideshow background -->
      <div class="ecw-hero-slideshow">
        <div
          v-for="(slide, index) in heroSlides"
          :key="index"
          class="ecw-hero-slide"
          :class="{ active: activeSlide === index }"
          :style="{
            backgroundImage: `url(${slide})`,
            animationName: activeSlide === index ? `kenburns-${(index % 6) + 1}` : 'none',
          }"
        ></div>
      </div>
      <div class="ecw-hero-bg"></div>
      <div class="ecw-hero-grid-overlay"></div>

      <div class="ecw-hero-content">
        <!-- Group Badge -->
        <div class="ecw-group-badge mb-4">Member of Edirisingha Group</div>

        <!-- Eyebrow -->
        <p class="ecw-hero-eyebrow mb-4">Sri Lanka's Premier Automotive Interior Specialists</p>

        <!-- Headline -->
        <h1 class="ecw-hero-headline mb-5">
          Where Luxury Meets
          <br />
          <span class="ecw-gold-text ecw-hero-gold-span">Precision Craftsmanship</span>
        </h1>

        <!-- Gold rule -->
        <div class="ecw-hero-rule mb-5"></div>

        <!-- Sub-copy -->
        <p class="ecw-hero-sub mb-7">
          From Falkn Series premium interiors to full Limousine conversions for the Toyota KDH &amp;
          Hiace H300 — we redefine what luxury means on Sri Lankan roads.
        </p>

        <!-- CTA Row -->
        <div class="ecw-hero-cta-row">
          <RouterLink to="/services">
            <Button
              label="Explore Services"
              icon="pi pi-arrow-right"
              iconPos="right"
              class="ecw-btn-gold"
            />
          </RouterLink>
          <RouterLink to="/gallery">
            <Button label="View Portfolio" icon="pi pi-images" class="ecw-btn-ghost" />
          </RouterLink>
        </div>

        <!-- Scroll indicator -->
        <div class="ecw-scroll-indicator mt-6">
          <span class="ecw-label" style="font-size: 0.6rem">Scroll</span>
          <div class="ecw-scroll-line"></div>
        </div>
      </div>
    </section>

    <!-- ══════════════  STATS  ══════════════ -->
    <section
      class="py-5"
      style="
        background: var(--ecw-charcoal-mid);
        border-top: 1px solid var(--ecw-charcoal-border);
        border-bottom: 1px solid var(--ecw-charcoal-border);
      "
    >
      <div class="container px-4 mx-auto">
        <div class="grid">
          <div class="col-6 md:col-3" v-for="stat in stats" :key="stat.label">
            <div class="ecw-stat-block">
              <div class="ecw-stat-number">{{ stat.value }}</div>
              <p class="ecw-label mt-2" style="font-size: 0.62rem">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════  ABOUT INTRO  ══════════════ -->
    <section class="ecw-section">
      <div class="container px-4 mx-auto">
        <div class="grid align-items-center gap-4">
          <div class="col-12 md:col-5">
            <div class="ecw-about-photo-wrap">
              <img
                :src="siteImages.aboutCraft"
                alt="Master craftsman at work — leather stitching"
                class="ecw-about-photo"
                loading="lazy"
              />
              <div class="ecw-about-photo-accent">
                <p class="ecw-label" style="font-size: 0.6rem">The Art of</p>
                <p
                  style="
                    font-family: var(--ecw-font-display);
                    font-size: 1.1rem;
                    color: var(--ecw-text-primary);
                  "
                >
                  Handcrafted Luxury
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 md:col-6">
            <p class="ecw-label mb-3">About the House</p>
            <h2 class="ecw-title-lg mb-4">
              Artisans of the
              <br />
              <span class="ecw-gold-text">Finest Interiors</span>
            </h2>
            <div class="ecw-gold-divider mb-4"></div>
            <p style="color: var(--ecw-text-secondary); line-height: 2; margin-bottom: 1.5rem">
              Edirisinghe Cushion Works (Pvt) Ltd has been at the forefront of automotive interior
              design in Sri Lanka since 1995. As a proud member of the Edirisingha Group, our
              atelier blends traditional craftsmanship with cutting-edge materials sourced globally.
            </p>
            <p style="color: var(--ecw-text-secondary); line-height: 2">
              We are authorised specialists for
              <strong style="color: var(--ecw-text-primary)">Falkn Series</strong>
              premium interior conversions and certified for
              <strong style="color: var(--ecw-text-primary)">SRS-compliant</strong>
              custom seat covers — ensuring both beauty and safety in every stitch.
            </p>
            <div class="flex flex-wrap gap-2 mt-4">
              <Chip v-for="tag in tags" :key="tag" :label="tag" class="ecw-chip" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════  FEATURED SERVICES  ══════════════ -->
    <section class="ecw-section" style="background: var(--ecw-charcoal-mid)">
      <div class="container px-4 mx-auto">
        <div class="ecw-section-header text-center">
          <p class="ecw-label mb-3">What We Do</p>
          <h2 class="ecw-title-lg mb-3">
            Signature
            <span class="ecw-gold-text">Services</span>
          </h2>
          <div class="ecw-gold-divider ecw-gold-divider-center mb-4"></div>
          <p style="color: var(--ecw-text-secondary); max-width: 520px; margin: 0 auto">
            Every vehicle we touch is treated as a work of art.
          </p>
        </div>

        <div class="grid">
          <div
            v-for="(service, idx) in featuredServices"
            :key="service.id"
            class="col-12 sm:col-6 lg:col-3"
          >
            <div class="ecw-service-card h-full" :class="{ 'ecw-service-featured': idx === 0 }">
              <div class="ecw-service-accent"></div>
              <div class="ecw-service-number">{{ String(idx + 1).padStart(2, '0') }}</div>
              <div class="ecw-service-icon">
                <i :class="`pi ${service.icon}`"></i>
              </div>
              <h3 class="ecw-service-title mt-4 mb-3">{{ service.name }}</h3>
              <p class="ecw-service-brief">
                {{ service.brief }}
              </p>
              <div class="ecw-service-arrow">
                <i class="pi pi-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-8">
          <RouterLink to="/services">
            <Button
              label="Explore All Services"
              icon="pi pi-arrow-right"
              iconPos="right"
              class="ecw-btn-ghost"
            />
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ══════════════  KDH SPOTLIGHT  ══════════════ -->
    <section class="ecw-section">
      <div class="container px-4 mx-auto">
        <div class="grid align-items-center">
          <div class="col-12 lg:col-6 mb-4 lg:mb-0">
            <div class="ecw-spotlight-visual">
              <div class="ecw-spotlight-badge">
                <i class="pi pi-star-fill ecw-text-gold mr-2"></i>
                Flagship Service
              </div>
              <div class="ecw-spotlight-image-wrap">
                <img
                  :src="siteImages.kdhSpotlight"
                  alt="KDH H300 VIP Lounge luxury interior conversion"
                  class="ecw-spotlight-img"
                  loading="lazy"
                />
                <!-- Overlay caption -->
                <div class="ecw-spotlight-caption">
                  <p class="ecw-label" style="font-size: 0.6rem">Toyota KDH / Hiace H300</p>
                  <p
                    class="ecw-display mt-1"
                    style="font-size: 1.4rem; color: var(--ecw-text-primary)"
                  >
                    H300 VIP Lounge
                  </p>
                  <p class="ecw-display">
                    <span class="ecw-gold-text" style="font-size: 1.4rem">Conversion</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 lg:col-5 lg:col-offset-1">
            <p class="ecw-label mb-3">Limousine Conversions</p>
            <h2 class="ecw-title-lg mb-4">
              Executive VIP
              <br />
              <span class="ecw-gold-text">Limousine Fitouts</span>
            </h2>
            <div class="ecw-gold-divider mb-4"></div>
            <p style="color: var(--ecw-text-secondary); line-height: 2; margin-bottom: 1.5rem">
              Transform your Toyota KDH or Hiace H300 into a rolling VIP lounge. Our signature H300
              conversion package features diamond-stitch premium leather, ambient LED lighting, rear
              entertainment systems, and full executive partitioning.
            </p>
            <ul class="ecw-feature-list mb-5">
              <li v-for="f in kdhFeatures" :key="f">
                <i class="pi pi-check-circle ecw-text-gold mr-2"></i>
                {{ f }}
              </li>
            </ul>
            <RouterLink to="/contact">
              <Button label="Book a Consultation" icon="pi pi-calendar" class="ecw-btn-gold" />
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════  CTA BANNER  ══════════════ -->
    <section class="ecw-cta-banner">
      <div class="container px-4 mx-auto text-center">
        <p class="ecw-label mb-3">Ready to Elevate?</p>
        <h2 class="ecw-title-lg mb-4">
          Your Journey to
          <span class="ecw-gold-text">Luxury</span>
          Begins Here
        </h2>
        <p style="color: var(--ecw-text-secondary); max-width: 480px; margin: 0 auto 2.5rem">
          Book an appointment with our design consultants and let us craft the interior your vehicle
          deserves.
        </p>
        <RouterLink to="/contact">
          <Button
            label="Book an Appointment"
            icon="pi pi-calendar"
            size="large"
            class="ecw-btn-gold"
          />
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { heroSlides, siteImages } from '@/data/images.js';
import { onMounted, onUnmounted, ref } from 'vue';

// ── Ken Burns slideshow ──────────────────────────────────────
const activeSlide = ref(0);
let slideshowInterval = null;

onMounted(() => {
  slideshowInterval = setInterval(() => {
    activeSlide.value = (activeSlide.value + 1) % heroSlides.length;
  }, 6000);
});

onUnmounted(() => {
  clearInterval(slideshowInterval);
});

const stats = [
  { value: '30+', label: 'Years of Expertise' },
  { value: '5K+', label: 'Vehicles Transformed' },
  { value: '100%', label: 'SRS Certified' },
  { value: '1', label: 'Group of Excellence' },
];

const featuredServices = [
  {
    id: 1,
    icon: 'pi-star',
    name: 'Falkn Series',
    brief:
      'Premium interior conversions using globally sourced Falkn Series materials with bespoke finishing.',
  },
  {
    id: 2,
    icon: 'pi-shield',
    name: 'SRS Seat Covers',
    brief: 'Safety-rated custom seat covers engineered to retain SRS airbag deployment integrity.',
  },
  {
    id: 3,
    icon: 'pi-circle',
    name: 'Dashboard & Wheel Wrap',
    brief:
      'Carbon fibre, suede, and leather wraps for dashboards and steering wheels with precision detailing.',
  },
  {
    id: 4,
    icon: 'pi-car',
    name: 'VIP Limousine',
    brief:
      'Full luxury conversions for Toyota KDH & H300 with executive partitioning and ambient lighting.',
  },
];

const tags = [
  'Falkn Series',
  'SRS Certified',
  'KDH Specialists',
  'Diamond Stitch',
  'Leather Craft',
];

const kdhFeatures = [
  'Diamond-stitch premium leather upholstery',
  'Ambient LED atmosphere lighting',
  'Rear entertainment & privacy partition',
  'Customised captain chairs (2+3 layout)',
  'Noise-deadening acoustic insulation',
  'Full SRS compliance maintained',
];
</script>

<style scoped>
/* Service Cards */
.ecw-service-card {
  position: relative;
  padding: 2.5rem 1.75rem;
  border: 1px solid var(--ecw-charcoal-border);
  border-radius: var(--ecw-radius-lg);
  background: linear-gradient(135deg, rgba(30, 30, 30, 0.8) 0%, rgba(20, 20, 20, 0.6) 100%);
  transition:
    all 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    border-color 0.35s;
  cursor: pointer;
  overflow: hidden;
  border-left: 3px solid var(--ecw-charcoal-border);
}

.ecw-service-card:hover {
  border-color: var(--ecw-gold-dark);
  border-left-color: var(--ecw-gold);
  transform: translateY(-6px);
  background: linear-gradient(135deg, rgba(40, 40, 40, 0.9) 0%, rgba(25, 25, 25, 0.7) 100%);
  box-shadow: 0 20px 40px rgba(201, 168, 76, 0.15);
}

.ecw-service-featured {
  border: 1.5px solid rgba(201, 168, 76, 0.4);
  background: linear-gradient(135deg, rgba(201, 168, 76, 0.08) 0%, rgba(30, 30, 30, 0.8) 100%);
}

.ecw-service-featured:hover {
  border: 1.5px solid var(--ecw-gold);
  background: linear-gradient(135deg, rgba(201, 168, 76, 0.12) 0%, rgba(35, 35, 35, 0.9) 100%);
}

.ecw-service-accent {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--ecw-gold-gradient);
  opacity: 0;
  transition: opacity 0.35s;
}

.ecw-service-card:hover .ecw-service-accent {
  opacity: 1;
}

.ecw-service-featured .ecw-service-accent {
  opacity: 1;
}

.ecw-service-number {
  position: absolute;
  top: 1.5rem;
  right: 1.75rem;
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.5rem;
  font-weight: 300;
  color: rgba(201, 168, 76, 0.15);
  pointer-events: none;
}

.ecw-service-card:hover .ecw-service-number {
  color: rgba(201, 168, 76, 0.25);
}

.ecw-service-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid rgba(201, 168, 76, 0.3);
  border-radius: var(--ecw-radius-md);
  background: rgba(201, 168, 76, 0.06);
  color: var(--ecw-gold);
  font-size: 1.4rem;
  transition: all 0.35s;
}

.ecw-service-card:hover .ecw-service-icon {
  border-color: rgba(201, 168, 76, 0.6);
  background: rgba(201, 168, 76, 0.12);
  box-shadow: 0 8px 24px rgba(201, 168, 76, 0.15);
}

.ecw-service-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--ecw-text-primary);
  letter-spacing: 0.02em;
}

.ecw-service-brief {
  color: var(--ecw-text-secondary);
  font-size: 0.88rem;
  line-height: 1.75;
  margin-bottom: 1rem;
}

.ecw-service-arrow {
  position: absolute;
  bottom: 1.75rem;
  right: 1.75rem;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(201, 168, 76, 0.2);
  border-radius: 50%;
  color: var(--ecw-gold);
  font-size: 0.9rem;
  transition: all 0.35s;
  opacity: 0.5;
}

.ecw-service-card:hover .ecw-service-arrow {
  opacity: 1;
  border-color: var(--ecw-gold);
  background: rgba(201, 168, 76, 0.1);
  transform: translateX(4px);
}

/* Feature list */
.ecw-feature-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.ecw-feature-list li {
  font-size: 0.87rem;
  color: var(--ecw-text-secondary);
  display: flex;
  align-items: center;
}

/* ── Hero Text Layout ─────────────────────────────────────── */
.ecw-hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 1.5rem;
  max-width: 860px;
  margin: 0 auto;
}
.ecw-hero-eyebrow {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(201, 168, 76, 0.85);
}
.ecw-hero-headline {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(3rem, 6vw, 5.5rem);
  font-weight: 500;
  line-height: 1.12;
  color: #fff;
  text-shadow: 0 4px 32px rgba(0, 0, 0, 0.6);
  margin: 0;
}
.ecw-hero-gold-span {
  white-space: nowrap;
}
.ecw-hero-rule {
  width: 60px;
  height: 2px;
  background: var(--ecw-gold-gradient);
  border-radius: 2px;
}
.ecw-hero-sub {
  font-size: 1rem;
  color: var(--ecw-text-secondary);
  line-height: 1.95;
  max-width: 600px;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
}
.ecw-hero-cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

/* ── Ken Burns Hero Slideshow ─────────────────────────────── */
.ecw-hero-slideshow {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}
.ecw-hero-slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1.8s ease-in-out;
  filter: brightness(0.22) saturate(0.55);
}
.ecw-hero-slide.active {
  opacity: 1;
  animation-duration: 8s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

/* 6 varied Ken Burns keyframes — subtle pan + zoom */
@keyframes kenburns-1 {
  from {
    transform: scale(1) translate(0%, 0%);
  }
  to {
    transform: scale(1.12) translate(-1.5%, -1%);
  }
}
@keyframes kenburns-2 {
  from {
    transform: scale(1.05) translate(1%, 0.5%);
  }
  to {
    transform: scale(1.14) translate(-1%, -1.5%);
  }
}
@keyframes kenburns-3 {
  from {
    transform: scale(1) translate(-1%, 1%);
  }
  to {
    transform: scale(1.1) translate(1.5%, -0.5%);
  }
}
@keyframes kenburns-4 {
  from {
    transform: scale(1.08) translate(0%, -1%);
  }
  to {
    transform: scale(1.16) translate(-1.5%, 1%);
  }
}
@keyframes kenburns-5 {
  from {
    transform: scale(1) translate(1.5%, 0.5%);
  }
  to {
    transform: scale(1.12) translate(-0.5%, -1.5%);
  }
}
@keyframes kenburns-6 {
  from {
    transform: scale(1.04) translate(-1.5%, -0.5%);
  }
  to {
    transform: scale(1.14) translate(1%, 1.5%);
  }
}

/* Scroll indicator */
.ecw-scroll-indicator {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.ecw-scroll-line {
  width: 1px;
  height: 50px;
  background: linear-gradient(to bottom, var(--ecw-gold), transparent);
  animation: scroll-pulse 2s ease-in-out infinite;
}
@keyframes scroll-pulse {
  0%,
  100% {
    opacity: 0.3;
    transform: scaleY(1);
  }
  50% {
    opacity: 1;
    transform: scaleY(1.1);
  }
}

/* Spotlight */
.ecw-spotlight-visual {
  position: relative;
}
.ecw-spotlight-badge {
  display: inline-flex;
  align-items: center;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--ecw-gold);
  margin-bottom: 1rem;
}
.ecw-spotlight-image-wrap {
  position: relative;
  overflow: hidden;
  border-radius: var(--ecw-radius-lg);
  border: 1px solid var(--ecw-charcoal-border);
  aspect-ratio: 16/10;
}
.ecw-spotlight-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: brightness(0.72) saturate(0.7);
  transition:
    filter 0.5s,
    transform 0.5s;
}
.ecw-spotlight-image-wrap:hover .ecw-spotlight-img {
  filter: brightness(0.82) saturate(0.9);
  transform: scale(1.04);
}
.ecw-spotlight-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.85));
}

/* About photo */
.ecw-about-photo-wrap {
  position: relative;
  border-radius: var(--ecw-radius-lg);
  overflow: hidden;
  border: 1px solid var(--ecw-charcoal-border);
}
.ecw-about-photo {
  width: 100%;
  height: 480px;
  object-fit: cover;
  display: block;
  filter: brightness(0.7) saturate(0.6);
  transition:
    filter 0.5s,
    transform 0.5s;
}
.ecw-about-photo-wrap:hover .ecw-about-photo {
  filter: brightness(0.8) saturate(0.8);
  transform: scale(1.03);
}
.ecw-about-photo-accent {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  background: rgba(9, 9, 9, 0.82);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(201, 168, 76, 0.25);
  border-radius: var(--ecw-radius-md);
  padding: 0.875rem 1.25rem;
  text-align: right;
}

/* Chip */
.ecw-chip :deep(.p-chip) {
  background: rgba(201, 168, 76, 0.08) !important;
  border: 1px solid rgba(201, 168, 76, 0.25) !important;
  color: var(--ecw-gold) !important;
  font-size: 0.72rem !important;
  font-weight: 600 !important;
  letter-spacing: 0.1em !important;
}

/* CTA banner */
.ecw-cta-banner {
  padding: 6rem 0;
  background:
    radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201, 168, 76, 0.06) 0%, transparent 70%),
    var(--ecw-charcoal-mid);
  border-top: 1px solid var(--ecw-charcoal-border);
  border-bottom: 1px solid var(--ecw-charcoal-border);
}
</style>
