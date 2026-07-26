<script setup>
defineProps({ src: { type: String, required: true }, width: { type: String, default: '30vw' } })
</script>

<template><img class="app-logo" :src="src" alt="青科博春"></template>

<style scoped lang="scss">
.app-logo { display: block; width: v-bind(width); max-width: 180px; height: auto; object-fit: contain; }
</style>
