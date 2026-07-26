<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import merchantIcon from '@/assets/svgs/icon-marchant-1.svg'
import categoryIcon from '@/assets/svgs/navigation/icon-category-1.svg'
const route = useRoute(); const router = useRouter(); const merchantId = computed(() => route.params.merchantId)
</script>
<template><nav class="merchant-tabs"><button :class="{active:route.path.endsWith('/recommend')}" @click="router.push(`/merchant/${merchantId}/recommend`)"><img :src="merchantIcon">推荐</button><button :class="{active:route.path.endsWith('/category')}" @click="router.push(`/merchant/${merchantId}/category`)"><img :src="categoryIcon">分类</button></nav></template>
<style scoped lang="scss">.merchant-tabs{position:fixed;z-index:20;right:0;bottom:0;left:0;display:flex;max-width:640px;height:66px;margin:auto;background:#fff;border-top:1px solid #e7ece9}.merchant-tabs button{flex:1;display:flex;align-items:center;justify-content:center;gap:7px;color:#6d7b74;background:none;border:0;font-size:15px}.merchant-tabs img{width:25px;height:25px}.merchant-tabs .active{color:#18b566;font-weight:700}</style>
