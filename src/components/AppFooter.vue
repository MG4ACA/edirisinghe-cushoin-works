<template>
  <footer class="ecw-footer">
    <div class="container px-4 mx-auto">
      <!-- Top row -->
      <div class="grid">
        <!-- Brand -->
        <div class="col-12 md:col-4 mb-4">
          <div class="ecw-nav-logo-text mb-1">Edirisinghe Cushion Works</div>
          <div class="ecw-nav-logo-sub mb-3">(Pvt) Ltd — Est. 1995</div>
          <p
            class="text-sm"
            style="color: var(--ecw-text-muted); line-height: 1.9; max-width: 280px"
          >
            Sri Lanka's premier luxury automotive interior specialists, delivering world-class
            craftsmanship for over three decades.
          </p>
          <div class="ecw-group-badge mt-4">Member of Edirisingha Group</div>
        </div>

        <!-- Quick Links -->
        <div class="col-6 md:col-2 mb-4">
          <p class="ecw-label mb-3">Navigation</p>
          <ul style="list-style: none">
            <li v-for="link in footerLinks" :key="link.path" class="mb-2">
              <RouterLink :to="link.path" class="ecw-footer-link">{{ link.label }}</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div class="col-6 md:col-3 mb-4">
          <p class="ecw-label mb-3">Services</p>
          <ul style="list-style: none">
            <li v-for="s in serviceList" :key="s" class="mb-2">
              <span style="color: var(--ecw-text-muted); font-size: 0.85rem">{{ s }}</span>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="col-12 md:col-3 mb-4">
          <p class="ecw-label mb-3">Get in Touch</p>
          <div class="flex flex-column gap-2">
            <div
              class="flex align-items-center gap-2"
              style="color: var(--ecw-text-secondary); font-size: 0.85rem"
            >
              <i class="pi pi-map-marker ecw-text-gold text-xs"></i>
              Colombo, Sri Lanka
            </div>
            <div
              class="flex align-items-center gap-2"
              style="color: var(--ecw-text-secondary); font-size: 0.85rem"
            >
              <i class="pi pi-phone ecw-text-gold text-xs"></i>
              +94 XX XXX XXXX
            </div>
            <div
              class="flex align-items-center gap-2"
              style="color: var(--ecw-text-secondary); font-size: 0.85rem"
            >
              <i class="pi pi-envelope ecw-text-gold text-xs"></i>
              info@ecushionworks.lk
            </div>
          </div>
          <div class="flex gap-2 mt-4">
            <a
              v-for="social in socials"
              :key="social.icon"
              :href="social.href"
              target="_blank"
              rel="noopener"
              class="ecw-social-icon"
              :aria-label="social.label"
            >
              <i :class="`pi ${social.icon}`"></i>
            </a>
          </div>
        </div>
      </div>

      <Divider style="border-color: var(--ecw-charcoal-border)" />

      <!-- Bottom bar -->
      <div
        class="flex flex-column md:flex-row align-items-center justify-content-between gap-3 pb-2"
      >
        <p style="color: var(--ecw-text-muted); font-size: 0.72rem; letter-spacing: 0.05em">
          &copy; {{ year }} Edirisinghe Cushion Works (Pvt) Ltd. All rights reserved.
        </p>
        <p style="color: var(--ecw-text-muted); font-size: 0.72rem; letter-spacing: 0.05em">
          Crafted with precision &nbsp;·&nbsp; Member of
          <span class="ecw-text-gold">Edirisingha Group</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();

const footerLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact' },
];

const serviceList = [
  'Falkn Series Interiors',
  'SRS-Approved Seat Covers',
  'Dashboard Wrapping',
  'Steering Wheel Wrapping',
  'KDH Limousine Conversions',
  'Corporate Fleet Fitouts',
];

const socials = [
  { icon: 'pi-facebook', href: '#', label: 'Facebook' },
  { icon: 'pi-instagram', href: '#', label: 'Instagram' },
  { icon: 'pi-whatsapp', href: '#', label: 'WhatsApp' },
];
</script>

<style scoped>
.ecw-footer-link {
  color: var(--ecw-text-muted);
  font-size: 0.85rem;
  text-decoration: none;
  transition: color 0.2s;
}
.ecw-footer-link:hover {
  color: var(--ecw-gold);
}

.ecw-social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid var(--ecw-charcoal-border);
  border-radius: 50%;
  color: var(--ecw-text-muted);
  text-decoration: none;
  font-size: 0.85rem;
  transition: all 0.2s;
}
.ecw-social-icon:hover {
  border-color: var(--ecw-gold);
  color: var(--ecw-gold);
  background: rgba(201, 168, 76, 0.08);
}
</style>
