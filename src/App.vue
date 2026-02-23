<template>
  <div class="ecw-dark ecw-app">
    <AppNavbar />
    <main class="ecw-main">
      <RouterView v-slot="{ Component }">
        <Transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
    <AppFooter />
    <Toast position="bottom-right" />
  </div>
</template>

<script setup>
import AppFooter from '@/components/AppFooter.vue';
import AppNavbar from '@/components/AppNavbar.vue';
</script>
