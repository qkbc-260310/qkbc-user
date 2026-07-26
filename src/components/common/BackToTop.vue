<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const visible = ref(false)
const updateVisible = () => { visible.value = window.scrollY > 280 }
const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
onMounted(() => { window.addEventListener('scroll', updateVisible, { passive: true }); updateVisible() })
onBeforeUnmount(() => window.removeEventListener('scroll', updateVisible))
</script>
<template><button v-show="visible" class="back-to-top" aria-label="回到顶部" @click="goTop">↑<span>顶部</span></button></template>
<style scoped lang="scss">.back-to-top{position:fixed;z-index:30;right:max(16px,calc((100vw - 640px) / 2 + 16px));bottom:86px;display:grid;place-items:center;width:44px;height:44px;padding:0;color:#18b566;background:rgba(255,255,255,.95);border:1px solid #d9eee3;border-radius:50%;box-shadow:0 3px 12px rgba(24,181,102,.16);font-size:20px}.back-to-top span{margin-top:-5px;font-size:10px}</style>
