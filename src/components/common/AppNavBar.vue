<script setup>
import { useRoute } from 'vue-router'
import { useNavigator } from '@/composables/useNavigator'
import back from '@/assets/svgs/navigation/icon-return.svg'; import home from '@/assets/svgs/navigation/icon-home-1.svg'; import list from '@/assets/svgs/navigation/icon-list-1.svg'; import user from '@/assets/svgs/navigation/icon-user-1.svg'
defineProps({ title: { type: String, required: true }, exitTo: { type: String, default: '' } })
const route = useRoute(); const { goBack, goHome, goCart, goUser, leaveMerchant } = useNavigator()
const handleBack = () => route.path.startsWith('/merchant/') ? leaveMerchant() : goBack()
</script>
<template><header class="nav"><button @click="handleBack"><img :src="back">返回</button><strong>{{ title }}</strong><div><button aria-label="首页" @click="goHome"><img :src="home"></button><button aria-label="清单" @click="goCart"><img :src="list"></button><button aria-label="用户" @click="goUser"><img :src="user"></button></div></header></template>
<style scoped lang="scss">.nav{position:sticky;z-index:10;top:0;display:grid;grid-template-columns:100px 1fr 110px;align-items:center;height:56px;padding:0 12px;background:#fff;border-bottom:1px solid #e7ece9}.nav>strong{overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap}.nav button{display:inline-flex;align-items:center;gap:4px;padding:5px;color:#18b566;background:none;border:0}.nav img{width:24px;height:24px}.nav>div{display:flex;justify-content:flex-end}</style>
