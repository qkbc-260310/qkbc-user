<script setup>
defineProps({ description: { type: String, default: '暂无内容' } })
</script>

<template><div class="empty-view"><van-empty :description="description"/><slot/></div></template>

<style scoped lang="scss">.empty-view { padding: 32px 0; }</style>
