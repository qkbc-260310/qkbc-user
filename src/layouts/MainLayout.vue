<script setup>import BottomTabBar from '@/components/common/BottomTabBar.vue'</script>
<template><main class="mobile-page layout"><section class="layout-content"><RouterView /></section><BottomTabBar /></main></template>
<style scoped lang="scss">.layout { padding-bottom: 70px; }.layout-content { min-height: calc(100vh - 70px); }</style>
