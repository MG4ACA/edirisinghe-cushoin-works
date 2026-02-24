<template>
  <div>
    <!-- ── Page Hero ── -->
    <section class="ecw-page-hero">
      <div class="container px-4 mx-auto text-center">
        <p class="ecw-label mb-3">Portfolio</p>
        <h1 class="ecw-title-lg mb-3">
          Work
          <span class="ecw-gold-text">Gallery</span>
        </h1>
        <div class="ecw-gold-divider ecw-gold-divider-center mb-4"></div>
        <p style="color: var(--ecw-text-secondary); max-width: 520px; margin: 0 auto">
          A curated selection of our finest transformations — each a testament to uncompromising
          craftsmanship.
        </p>
      </div>
    </section>

    <!-- ── Filter Bar ── -->
    <section style="padding: 2.5rem 0; border-bottom: 1px solid var(--ecw-charcoal-border)">
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap align-items-center justify-content-center gap-2">
          <button
            v-for="cat in categories"
            :key="cat.value"
            class="ecw-filter-btn"
            :class="{ active: activeCategory === cat.value }"
            @click="activeCategory = cat.value"
          >
            <i v-if="cat.icon" :class="`pi ${cat.icon} mr-2`" style="font-size: 0.75rem"></i>
            {{ cat.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- ── Gallery Grid ── -->
    <section class="ecw-section">
      <div class="container px-4 mx-auto">
        <!-- Count line -->
        <div class="flex align-items-center justify-content-between mb-4">
          <p style="color: var(--ecw-text-muted); font-size: 0.82rem">
            Showing
            <span class="ecw-text-gold">{{ filteredItems.length }}</span>
            works
          </p>
          <span class="ecw-label" style="font-size: 0.6rem">{{ activeLabel }}</span>
        </div>

        <!-- Grid -->
        <Transition name="fade-grid" mode="out-in">
          <div :key="activeCategory" class="grid">
            <div v-for="item in filteredItems" :key="item.id" class="col-12 sm:col-6 lg:col-4">
              <div class="ecw-gallery-item" @click="openItem(item)">
                <!-- Real photo -->
                <img
                  :src="galleryImages[item.id]"
                  :alt="item.title"
                  class="ecw-gallery-real-img"
                  loading="lazy"
                />
                <!-- Overlay -->
                <div class="ecw-gallery-overlay">
                  <span class="ecw-label" style="font-size: 0.58rem; color: var(--ecw-gold)">
                    {{ item.category }}
                  </span>
                  <p
                    style="
                      font-family: var(--ecw-font-display);
                      font-size: 1.05rem;
                      color: #fff;
                      margin-top: 0.25rem;
                    "
                  >
                    {{ item.title }}
                  </p>
                  <p
                    style="
                      font-size: 0.78rem;
                      color: rgba(255, 255, 255, 0.55);
                      margin-top: 0.15rem;
                    "
                  >
                    {{ item.subtitle }}
                  </p>
                </div>
                <!-- Category chip -->
                <div class="ecw-gallery-cat-chip">{{ item.category }}</div>
              </div>
            </div>
          </div>
        </Transition>

        <!-- Empty state -->
        <div v-if="filteredItems.length === 0" class="text-center py-6">
          <i class="pi pi-images" style="font-size: 3rem; color: var(--ecw-text-muted)"></i>
          <p class="ecw-text-muted mt-3">No items in this category.</p>
        </div>
      </div>
    </section>

    <!-- ── Lightbox overlay ── -->
    <Transition name="fade-grid">
      <div v-if="selectedItem" class="ecw-lightbox" @click.self="selectedItem = null">
        <div class="ecw-lightbox-panel">
          <button class="ecw-lightbox-close" @click="selectedItem = null">
            <i class="pi pi-times"></i>
          </button>
          <!-- Lightbox photo -->
          <div class="ecw-lightbox-img-wrap">
            <img
              :src="galleryImages[selectedItem.id]"
              :alt="selectedItem.title"
              class="ecw-lightbox-real-img"
            />
          </div>
          <div class="ecw-lightbox-info">
            <span class="ecw-label" style="font-size: 0.6rem">{{ selectedItem.category }}</span>
            <h3 class="ecw-title-md mt-2">{{ selectedItem.title }}</h3>
            <p
              style="
                color: var(--ecw-text-secondary);
                font-size: 0.85rem;
                margin-top: 0.75rem;
                line-height: 1.8;
              "
            >
              {{ selectedItem.detail }}
            </p>
            <div class="flex gap-2 mt-4 flex-wrap">
              <Chip v-for="tag in selectedItem.tags" :key="tag" :label="tag" class="ecw-chip" />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { galleryImages } from '@/data/images.js';
import { computed, ref } from 'vue';

const activeCategory = ref('all');
const selectedItem = ref(null);

const categories = [
  { value: 'all', label: 'All Works', icon: 'pi-th-large' },
  { value: 'kdh', label: 'KDH Modifications', icon: 'pi-car' },
  { value: 'sedan', label: 'Luxury Sedans', icon: 'pi-circle' },
  { value: 'exec-van', label: 'Executive Vans', icon: 'pi-star' },
];

const galleryItems = [
  {
    id: 1,
    category: 'KDH Modifications',
    categoryKey: 'kdh',
    title: 'H300 VIP Lounge',
    subtitle: 'Toyota Hiace H300 · Full Conversion',
    detail:
      'A complete VIP lounge transformation of a Toyota Hiace H300. Diamond-stitch ivory leather throughout, captain chairs, ambient LED lighting, and a full privacy partition.',
    tags: ['Diamond Stitch', 'H300', 'VIP Lounge', 'Full Conversion'],
    icon: 'pi-car',
    mockGradient: 'linear-gradient(135deg, #1a1408 0%, #2e2010 50%, #1a1408 100%)',
  },
  {
    id: 2,
    category: 'KDH Modifications',
    categoryKey: 'kdh',
    title: 'KDH Executive Edition',
    subtitle: 'Toyota KDH · Black Leather Package',
    detail:
      'Midnight black nappa leather with silver contrast stitching. Seven-seat executive configuration with console partition and USB charging stations.',
    tags: ['Nappa Leather', 'KDH', 'Executive', 'Silver Stitch'],
    icon: 'pi-car',
    mockGradient: 'linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #0d0d0d 100%)',
  },
  {
    id: 3,
    category: 'KDH Modifications',
    categoryKey: 'kdh',
    title: 'Royal Gold KDH',
    subtitle: 'Toyota KDH · Gold Accent Interior',
    detail:
      'Deep charcoal leather upholstery with premium gold piping and contrast stitching. Custom wood-grain dashboard finish with gold trim.',
    tags: ['Gold Accent', 'KDH', 'Royal Edition'],
    icon: 'pi-car',
    mockGradient: 'linear-gradient(135deg, #0a0a0a 0%, #1f1608 60%, #0a0a0a 100%)',
  },
  {
    id: 4,
    category: 'Luxury Sedans',
    categoryKey: 'sedan',
    title: 'Custom Diamond Stitch Seats',
    subtitle: 'Mercedes · E-Class Custom',
    detail:
      'Full diamond-stitch leather re-upholstery for a Mercedes-Benz E-Class. Crimson and black contrast, matching door panels and headliner.',
    tags: ['Diamond Stitch', 'Mercedes', 'Red & Black'],
    icon: 'pi-circle',
    mockGradient: 'linear-gradient(135deg, #12030a 0%, #230812 50%, #12030a 100%)',
  },
  {
    id: 5,
    category: 'Luxury Sedans',
    categoryKey: 'sedan',
    title: 'Falkn Alcantara Sport',
    subtitle: 'BMW · 3-Series Falkn Build',
    detail:
      'Full Falkn Series Alcantara sport seats with integrated lumbar support, carbon fibre door panel inserts, and racing harness-compatible mounts.',
    tags: ['Alcantara', 'Falkn Series', 'BMW', 'Sport'],
    icon: 'pi-circle',
    mockGradient: 'linear-gradient(135deg, #060a10 0%, #0d1520 50%, #060a10 100%)',
  },
  {
    id: 6,
    category: 'Luxury Sedans',
    categoryKey: 'sedan',
    title: 'Cream Nappa Luxury',
    subtitle: 'Lexus ES · Cream Interior',
    detail:
      'Cream nappa leather full interior for a Lexus ES300h. Includes re-upholstered door cards, dashboard leather wrap, and matching carpet.',
    tags: ['Cream Nappa', 'Lexus', 'Full Interior'],
    icon: 'pi-circle',
    mockGradient: 'linear-gradient(135deg, #1a1a10 0%, #2a2a18 50%, #1a1a10 100%)',
  },
  {
    id: 7,
    category: 'Executive Vans',
    categoryKey: 'exec-van',
    title: 'Corporate Shuttle Fitout',
    subtitle: 'Toyota HiAce · 12-Seat Executive',
    detail:
      'Corporate shuttle con conversion with uniform business-class seating, individual tray tables, reading lights, and branded headrest covers.',
    tags: ['Corporate', 'HiAce', 'Shuttle', '12-Seat'],
    icon: 'pi-star',
    mockGradient: 'linear-gradient(135deg, #080a0d 0%, #141820 50%, #080a0d 100%)',
  },
  {
    id: 8,
    category: 'Executive Vans',
    categoryKey: 'exec-van',
    title: 'H300 Presidential Suite',
    subtitle: 'Hiace H300 · VIP Presidential',
    detail:
      'Our most exclusive H300 build — a four-seat presidential-layout cabin with fold-away tables, refrigerator unit, roller blinds, and starlight headliner.',
    tags: ['Presidential', 'H300', 'Starlight', 'VIP'],
    icon: 'pi-star',
    mockGradient: 'linear-gradient(135deg, #0a0805 0%, #1a1508 60%, #0a0805 100%)',
  },
  {
    id: 9,
    category: 'Executive Vans',
    categoryKey: 'exec-van',
    title: 'Slate Conference Van',
    subtitle: 'Toyota Noah · 4-Seat Conference',
    detail:
      'Inward-facing conference layout with fold-out table, leather walls, noise deadening, and ambient strip lighting along the floor and ceiling rails.',
    tags: ['Conference', 'Noah', 'Leather Walls', 'Ambient'],
    icon: 'pi-star',
    mockGradient: 'linear-gradient(135deg, #0d0d12 0%, #16161e 50%, #0d0d12 100%)',
  },
];

const activeLabel = computed(
  () => categories.find((c) => c.value === activeCategory.value)?.label ?? '',
);

const filteredItems = computed(() =>
  activeCategory.value === 'all'
    ? galleryItems
    : galleryItems.filter((i) => i.categoryKey === activeCategory.value),
);

function openItem(item) {
  selectedItem.value = item;
}
</script>

<style scoped>
.ecw-page-hero {
  padding: 3rem 0 4rem;
  background:
    radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201, 168, 76, 0.05) 0%, transparent 70%),
    var(--ecw-charcoal-mid);
  border-bottom: 1px solid var(--ecw-charcoal-border);
}

/* Real gallery image */
.ecw-gallery-real-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition:
    transform 0.5s ease,
    filter 0.4s ease;
  filter: brightness(0.75) saturate(0.7);
}
.ecw-gallery-item:hover .ecw-gallery-real-img {
  transform: scale(1.08);
  filter: brightness(0.88) saturate(0.9);
}

.ecw-gallery-cat-chip {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ecw-gold);
  background: rgba(9, 9, 9, 0.75);
  border: 1px solid rgba(201, 168, 76, 0.25);
  padding: 0.25rem 0.6rem;
  border-radius: 2px;
}

/* Lightbox */
.ecw-lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.88);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.ecw-lightbox-panel {
  background: var(--ecw-charcoal-mid);
  border: 1px solid var(--ecw-charcoal-border);
  border-radius: var(--ecw-radius-lg);
  max-width: 700px;
  width: 100%;
  overflow: hidden;
  position: relative;
}

.ecw-lightbox-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 36px;
  height: 36px;
  border: 1px solid var(--ecw-charcoal-border);
  border-radius: 50%;
  background: var(--ecw-charcoal-soft);
  color: var(--ecw-text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  z-index: 2;
  transition:
    color 0.2s,
    border-color 0.2s;
}
.ecw-lightbox-close:hover {
  color: var(--ecw-gold);
  border-color: var(--ecw-gold);
}

/* Lightbox real photo */
.ecw-lightbox-img-wrap {
  width: 100%;
  height: 320px;
  overflow: hidden;
}
.ecw-lightbox-real-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: brightness(0.85) saturate(0.8);
}

.ecw-lightbox-info {
  padding: 1.75rem;
}

.ecw-chip :deep(.p-chip) {
  background: rgba(201, 168, 76, 0.08) !important;
  border: 1px solid rgba(201, 168, 76, 0.25) !important;
  color: var(--ecw-gold) !important;
  font-size: 0.68rem !important;
  font-weight: 600 !important;
}

/* Transition */
.fade-grid-enter-active,
.fade-grid-leave-active {
  transition: opacity 0.3s ease;
}
.fade-grid-enter-from,
.fade-grid-leave-to {
  opacity: 0;
}
</style>
