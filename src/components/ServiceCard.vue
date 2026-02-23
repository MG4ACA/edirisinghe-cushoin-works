<template>
  <Card class="ecw-luxury-card h-full">
    <!-- Icon / Header accent -->
    <template #header>
      <div class="ecw-service-card-header">
        <div class="ecw-service-icon-wrap">
          <i :class="`pi ${service.icon}`"></i>
        </div>
        <Tag v-if="service.badge" :value="service.badge" class="ecw-service-tag" />
      </div>
    </template>

    <!-- Title -->
    <template #title>
      {{ service.name }}
    </template>

    <!-- Subtitle -->
    <template #subtitle>
      <span class="ecw-label" style="font-size: 0.62rem; color: var(--ecw-gold)">
        {{ service.category }}
      </span>
    </template>

    <!-- Content -->
    <template #content>
      <p class="mb-4">{{ service.description }}</p>

      <!-- Features list -->
      <ul class="ecw-svc-feature-list">
        <li v-for="(feat, i) in service.features" :key="i">
          <i class="pi pi-angle-right ecw-text-gold mr-2" style="font-size: 0.75rem"></i>
          {{ feat }}
        </li>
      </ul>
    </template>

    <!-- Footer / CTA -->
    <template #footer>
      <div class="flex align-items-center justify-content-between mt-2">
        <span v-if="service.priceFrom" class="ecw-price-from">
          From
          <span class="ecw-text-gold">LKR {{ service.priceFrom }}</span>
        </span>
        <RouterLink to="/contact">
          <Button
            label="Inquire"
            icon="pi pi-arrow-right"
            iconPos="right"
            size="small"
            class="ecw-btn-ghost"
          />
        </RouterLink>
      </div>
    </template>
  </Card>
</template>

<script setup>
defineProps({
  service: {
    type: Object,
    required: true,
    // shape: { id, name, category, description, icon, badge?, features[], priceFrom? }
  },
});
</script>

<style scoped>
.ecw-service-card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.5rem 1.5rem 0;
}

.ecw-service-icon-wrap {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(201, 168, 76, 0.07);
  border: 1px solid rgba(201, 168, 76, 0.25);
  border-radius: 12px;
  font-size: 1.4rem;
  color: var(--ecw-gold);
  flex-shrink: 0;
}

.ecw-service-tag :deep(.p-tag) {
  background: rgba(201, 168, 76, 0.12) !important;
  color: var(--ecw-gold) !important;
  border: 1px solid rgba(201, 168, 76, 0.3) !important;
  font-size: 0.62rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.15em !important;
  text-transform: uppercase !important;
  border-radius: 2px !important;
}

.ecw-svc-feature-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.ecw-svc-feature-list li {
  display: flex;
  align-items: center;
  font-size: 0.84rem;
  color: var(--ecw-text-secondary);
}

.ecw-price-from {
  font-size: 0.8rem;
  color: var(--ecw-text-muted);
}
</style>
