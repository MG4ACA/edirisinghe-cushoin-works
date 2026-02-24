<template>
  <div>
    <!-- ── Page Hero ── -->
    <section class="ecw-page-hero">
      <div class="container px-4 mx-auto text-center">
        <p class="ecw-label mb-3">Our Craft</p>
        <h1 class="ecw-title-lg mb-3">
          Bespoke
          <span class="ecw-gold-text">Services</span>
        </h1>
        <div class="ecw-gold-divider ecw-gold-divider-center mb-4"></div>
        <p style="color: var(--ecw-text-secondary); max-width: 560px; margin: 0 auto">
          From a single seat wrap to a complete KDH palace on wheels — every project receives the
          same obsessive attention to detail.
        </p>
      </div>
    </section>

    <!-- ── Services Grid ── -->
    <section class="ecw-section">
      <div class="container px-4 mx-auto">
        <div class="grid">
          <div v-for="service in services" :key="service.id" class="col-12 md:col-6 xl:col-6">
            <ServiceCard :service="service" />
          </div>
        </div>
      </div>
    </section>

    <!-- ── Process Section ── -->
    <section class="ecw-section" style="background: var(--ecw-charcoal-mid)">
      <div class="container px-4 mx-auto">
        <div class="ecw-section-header text-center">
          <p class="ecw-label mb-3">How It Works</p>
          <h2 class="ecw-title-lg mb-3">
            Our
            <span class="ecw-gold-text">Process</span>
          </h2>
          <div class="ecw-gold-divider ecw-gold-divider-center"></div>
        </div>

        <div class="grid mt-5">
          <div v-for="(step, i) in process" :key="step.title" class="col-12 md:col-6 lg:col-3">
            <div class="ecw-process-step">
              <div class="ecw-process-num">{{ String(i + 1).padStart(2, '0') }}</div>
              <h3 class="ecw-title-md my-3">{{ step.title }}</h3>
              <p style="color: var(--ecw-text-muted); font-size: 0.87rem; line-height: 1.8">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA ── -->
    <section class="py-6" style="text-align: center; padding: 5rem 1rem">
      <p class="ecw-label mb-3">Take the Next Step</p>
      <h2 class="ecw-title-md mb-4 ecw-display">Ready to transform your vehicle?</h2>
      <RouterLink to="/contact">
        <Button label="Book a Free Consultation" icon="pi pi-calendar" class="ecw-btn-gold" />
      </RouterLink>
    </section>
  </div>
</template>

<script setup>
import ServiceCard from '@/components/ServiceCard.vue';

const services = [
  {
    id: 1,
    name: 'Falkn Series Premium Interiors',
    category: 'Signature Collection',
    icon: 'pi-star-fill',
    badge: 'Flagship',
    description:
      'The Falkn Series represents the pinnacle of our craft — using globally certified materials, hand-stitched leather panels, and bespoke design configurations tailored to your vision.',
    features: [
      'Falkn Series certified materials',
      'Hand-stitched leather upholstery',
      'Custom colour & texture matching',
      'Full interior panel replacements',
      'Headliner & pillar trim upgrade',
      'OEM fitment with warranty',
    ],
    priceFrom: '95,000',
  },
  {
    id: 2,
    name: 'SRS-Approved Custom Seat Covers',
    category: 'Safety & Style',
    icon: 'pi-shield',
    badge: 'SRS Certified',
    description:
      "Our SRS-approved seat covers are precision-engineered to preserve your vehicle's airbag system functionality while delivering a luxury aesthetic. Available in nappa leather, alcantara, and diamond-stitch variants.",
    features: [
      'Full SRS airbag compliance',
      'Nappa leather / Alcantara options',
      'Diamond-stitch pattern available',
      'Waterproof inner lining',
      'Heat-resistant stitching thread',
      'Fits all major vehicle models',
    ],
    priceFrom: '28,000',
  },
  {
    id: 3,
    name: 'Dashboard & Steering Wheel Wrapping',
    category: 'Accent Works',
    icon: 'pi-circle',
    description:
      'Elevate every touch point in your cabin. We wrap dashboards, centre consoles, and steering wheels using high-grade carbon fibre vinyl, real suede, or full-grain leather — all by hand.',
    features: [
      'Carbon fibre vinyl wrapping',
      'Real suede & leather options',
      'Steering wheel re-leather',
      'Centre console & trim wrap',
      'Anti-bubble precision application',
      '2-year surface warranty',
    ],
    priceFrom: '14,500',
  },
  {
    id: 4,
    name: 'Luxury Limousine Conversions',
    category: 'KDH / Hiace H300',
    icon: 'pi-car',
    badge: 'Premium',
    description:
      'The ultimate flagship offering. We convert Toyota KDH and Hiace H300 vans into executive VIP lounges with full luxury interior fitouts, privacy partitions, and theatre-style rear cabins.',
    features: [
      'Toyota KDH & H300 specialists',
      'Captain chair executive layouts',
      'Privacy glass partition',
      'Rear LED ambient lighting',
      'Entertainment system integration',
      'Diamond-stitch leather throughout',
    ],
    priceFrom: '380,000',
  },
];

const process = [
  {
    title: 'Consultation',
    description:
      'We begin with a detailed consultation to understand your vision, vehicle type, and budget requirements.',
  },
  {
    title: 'Design & Sampling',
    description:
      'Our designers present material samples, colour swatches, and 3D concept boards for your approval.',
  },
  {
    title: 'Precision Fitout',
    description:
      'Master craftsmen execute the fitout in our dedicated workshop with obsessive quality control at every stage.',
  },
  {
    title: 'Delivery & Handover',
    description:
      'Your vehicle is detailed, inspected, and handed over with a full service warranty and care guide.',
  },
];
</script>

<style scoped>
.ecw-page-hero {
  padding: 3rem 0 4rem;
  background:
    radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201, 168, 76, 0.05) 0%, transparent 70%),
    var(--ecw-charcoal-mid);
  border-bottom: 1px solid var(--ecw-charcoal-border);
}

.ecw-process-step {
  padding: 2rem 1.5rem;
  border: 1px solid var(--ecw-charcoal-border);
  border-radius: var(--ecw-radius-lg);
  height: 100%;
  transition: border-color 0.3s;
}
.ecw-process-step:hover {
  border-color: rgba(201, 168, 76, 0.3);
}

.ecw-process-num {
  font-family: var(--ecw-font-display);
  font-size: 3rem;
  font-weight: 300;
  line-height: 1;
  background: var(--ecw-gold-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
