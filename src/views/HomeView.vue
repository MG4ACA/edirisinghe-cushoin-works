<template>
  <div>
    <!-- ══════════════  HERO  ══════════════ -->
    <section class="ecw-hero">
      <div class="ecw-hero-bg"></div>
      <div class="ecw-hero-grid-overlay"></div>

      <div class="container px-4 mx-auto" style="position: relative; z-index: 1">
        <div class="grid align-items-center">
          <div class="col-12 lg:col-7">
            <!-- Group Badge -->
            <div class="ecw-group-badge mb-5">Member of Edirisingha Group</div>

            <!-- Eyebrow -->
            <p class="ecw-label mb-3">Sri Lanka's Premier Automotive Interior Specialists</p>

            <!-- Headline -->
            <h1 class="ecw-title-xl mb-4">
              Where Luxury
              <br />
              <span class="ecw-gold-text">Meets Precision</span>
              <br />
              Craftsmanship
            </h1>

            <!-- Divider -->
            <div class="ecw-gold-divider mb-5"></div>

            <!-- Sub-copy -->
            <p
              class="mb-6"
              style="
                color: var(--ecw-text-secondary);
                font-size: 1.05rem;
                max-width: 520px;
                line-height: 1.9;
              "
            >
              From Falkn Series premium interiors to full Limousine conversions for the Toyota KDH
              &amp; Hiace H300 — we redefine what luxury means on Sri Lankan roads.
            </p>

            <!-- CTA Row -->
            <div class="flex flex-wrap gap-3">
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
          </div>

          <!-- Hero Visual -->
          <div class="col-12 lg:col-5 hidden lg:flex justify-content-end">
            <div class="ecw-hero-visual">
              <div class="ecw-hero-plate">
                <div class="ecw-hero-plate-inner">
                  <i class="pi pi-star-fill" style="color: var(--ecw-gold); font-size: 2rem"></i>
                  <p
                    class="ecw-display mt-3"
                    style="font-size: 1.1rem; color: var(--ecw-text-secondary)"
                  >
                    Since 1995
                  </p>
                  <p class="ecw-title-md ecw-gold-text mt-1">30+ Years</p>
                  <p class="ecw-label mt-2">of Luxury Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Scroll indicator -->
        <div class="ecw-scroll-indicator">
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
            <p class="ecw-label mb-3">About the House</p>
            <h2 class="ecw-title-lg mb-4">
              Artisans of the
              <br />
              <span class="ecw-gold-text">Finest Interiors</span>
            </h2>
            <div class="ecw-gold-divider mb-4"></div>
          </div>
          <div class="col-12 md:col-6 md:col-offset-1">
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
            v-for="service in featuredServices"
            :key="service.id"
            class="col-12 sm:col-6 lg:col-3"
          >
            <div class="ecw-feature-card h-full">
              <div class="ecw-feature-icon">
                <i :class="`pi ${service.icon}`"></i>
              </div>
              <h3 class="ecw-title-md mt-4 mb-2">{{ service.name }}</h3>
              <p style="color: var(--ecw-text-muted); font-size: 0.87rem; line-height: 1.8">
                {{ service.brief }}
              </p>
            </div>
          </div>
        </div>

        <div class="text-center mt-6">
          <RouterLink to="/services">
            <Button
              label="All Services"
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
              <div class="ecw-spotlight-image-mock">
                <div class="ecw-spotlight-content">
                  <p class="ecw-label">Toyota KDH / Hiace H300</p>
                  <p
                    class="ecw-display mt-2"
                    style="font-size: 1.8rem; color: var(--ecw-text-primary)"
                  >
                    H300 VIP Lounge
                  </p>
                  <p class="ecw-display" style="font-size: 1.8rem">
                    <span class="ecw-gold-text">Conversion</span>
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
/* Feature Cards */
.ecw-feature-card {
  padding: 2rem 1.5rem;
  border: 1px solid var(--ecw-charcoal-border);
  border-radius: var(--ecw-radius-lg);
  background: var(--ecw-charcoal-soft);
  transition:
    border-color 0.3s,
    transform 0.3s;
  cursor: default;
}
.ecw-feature-card:hover {
  border-color: var(--ecw-gold-dark);
  transform: translateY(-4px);
}

.ecw-feature-icon {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(201, 168, 76, 0.3);
  border-radius: var(--ecw-radius-md);
  background: rgba(201, 168, 76, 0.05);
  color: var(--ecw-gold);
  font-size: 1.3rem;
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

/* Hero visual */
.ecw-hero-visual {
  display: flex;
  align-items: center;
  justify-content: center;
}
.ecw-hero-plate {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 30%, rgba(201, 168, 76, 0.08), transparent 70%);
  border: 1px solid rgba(201, 168, 76, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
}
.ecw-hero-plate-inner {
  text-align: center;
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
.ecw-spotlight-image-mock {
  aspect-ratio: 16/10;
  border-radius: var(--ecw-radius-lg);
  background:
    linear-gradient(135deg, rgba(201, 168, 76, 0.06) 0%, transparent 60%), var(--ecw-charcoal-soft);
  border: 1px solid var(--ecw-charcoal-border);
  display: flex;
  align-items: flex-end;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}
.ecw-spotlight-image-mock::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 60%;
  background: radial-gradient(circle at 80% 20%, rgba(201, 168, 76, 0.08), transparent 70%);
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
