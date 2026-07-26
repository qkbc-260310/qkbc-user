<script setup>
import noticeIcon from '@/assets/svgs/action/icon-notice.svg'
defineProps({ text: { type: String, required: true } })
</script>

<template><van-notice-bar :text="text" background="#e5f3ec" color="#286b51"><template #left-icon><img class="notice-icon" :src="noticeIcon" alt="" /></template></van-notice-bar></template>

<style scoped lang="scss">.notice-icon{display:block;width:18px;height:18px;margin-right:6px}</style>
