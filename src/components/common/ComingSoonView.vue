<script setup>
import { useRouter } from 'vue-router'
import EmptyView from './EmptyView.vue'
defineProps({ title: { type: String, required: true } })
const router = useRouter()
</script>
<template><main class="mobile-page coming-soon"><section class="card-surface"><h1>{{ title }}</h1><EmptyView description="该功能将在后续阶段开放" /><van-button block round type="primary" @click="router.push('/home')">返回首页</van-button></section></main></template>
<style scoped lang="scss">.coming-soon { padding: 24px 16px; }.coming-soon h1 { margin: 0; font-size: 22px; }</style>
