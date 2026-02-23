<template>
  <nav class="ecw-navbar" :class="{ scrolled: isScrolled }">
    <div class="flex align-items-center justify-content-between w-full">
      <!-- Logo -->
      <RouterLink to="/" class="ecw-nav-logo">
        <div class="ecw-nav-logo-text">Edirisinghe Cushion Works</div>
        <div class="ecw-nav-logo-sub">Pvt Ltd &nbsp;·&nbsp; Est. 1995</div>
      </RouterLink>

      <!-- Desktop Navigation -->
      <ul class="ecw-nav-links hidden md:flex">
        <li v-for="link in navLinks" :key="link.path">
          <RouterLink :to="link.path" class="ecw-nav-link" :exact="link.exact">
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>

      <!-- CTA -->
      <div class="hidden md:flex align-items-center gap-2">
        <RouterLink to="/contact">
          <Button label="Book Now" icon="pi pi-calendar" size="small" class="ecw-btn-gold" />
        </RouterLink>
      </div>

      <!-- Mobile Hamburger -->
      <Button
        class="md:hidden"
        :icon="mobileOpen ? 'pi pi-times' : 'pi pi-bars'"
        text
        style="color: var(--ecw-gold)"
        @click="mobileOpen = !mobileOpen"
        aria-label="Menu"
      />
    </div>

    <!-- Mobile Drawer -->
    <Transition name="slide-down">
      <div v-if="mobileOpen" class="ecw-mobile-menu">
        <ul>
          <li v-for="link in navLinks" :key="link.path">
            <RouterLink
              :to="link.path"
              class="ecw-nav-link ecw-mobile-link"
              @click="mobileOpen = false"
            >
              {{ link.label }}
            </RouterLink>
          </li>
          <li class="mt-3">
            <RouterLink to="/contact" @click="mobileOpen = false">
              <Button label="Book Appointment" icon="pi pi-calendar" class="ecw-btn-gold w-full" />
            </RouterLink>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const isScrolled = ref(false);
const mobileOpen = ref(false);

const navLinks = [
  { path: '/', label: 'Home', exact: true },
  { path: '/services', label: 'Services', exact: false },
  { path: '/gallery', label: 'Gallery', exact: false },
  { path: '/contact', label: 'Contact', exact: false },
];

function handleScroll() {
  isScrolled.value = window.scrollY > 40;
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<style scoped>
.ecw-mobile-menu {
  position: absolute;
  top: 72px;
  left: 0;
  right: 0;
  background: rgba(9, 9, 9, 0.98);
  border-bottom: 1px solid rgba(201, 168, 76, 0.15);
  padding: 1.5rem;
}

.ecw-mobile-link {
  display: block;
  font-size: 0.85rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--ecw-charcoal-border);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
