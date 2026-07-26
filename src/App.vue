<script setup>
import BackToTop from '@/components/common/BackToTop.vue'
</script>

<template>
  <RouterView />
  <BackToTop />
</template>

<style scoped lang="scss">
:global(#app) { min-height: 100vh; background: #eff2f5; }
</style>
