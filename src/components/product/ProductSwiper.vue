<script setup>
defineProps({ images: { type: Array, default: () => [] }, ratio: { type: String, default: '5 / 3' } })
</script>

<template>
  <van-swipe class="product-swiper" :autoplay="3500" lazy-render indicator-color="#337c5e">
    <van-swipe-item v-for="image in images" :key="image"><van-image width="100%" height="100%" fit="cover" :src="image" /></van-swipe-item>
  </van-swipe>
</template>

<style scoped lang="scss">.product-swiper{overflow:hidden;aspect-ratio:v-bind(ratio);border-radius:10px;background:#e8ecea}.product-swiper :deep(.van-swipe__track),.product-swiper :deep(.van-swipe-item),.product-swiper :deep(.van-image){height:100% !important}</style>
