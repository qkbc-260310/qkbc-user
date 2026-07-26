<script setup>
defineProps({ text: { type: String, default: '加载中...' } })
</script>

<template><div class="loading-view"><van-loading color="#337c5e" vertical>{{ text }}</van-loading></div></template>

<style scoped lang="scss">.loading-view { display: grid; min-height: 180px; place-items: center; }</style>
