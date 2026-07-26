<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import AppNavBar from '@/components/common/AppNavBar.vue'
import MerchantTabBar from '@/components/common/MerchantTabBar.vue'
import { useMerchant } from '@/composables/useMerchant'
import { useNavigator } from '@/composables/useNavigator'
import merchantLogo from '@/assets/svgs/logo/logo-merchant-top.svg'
const route = useRoute(); const { merchant, loadMerchant } = useMerchant(); const { goMerchantInfo } = useNavigator()
onMounted(() => loadMerchant(route.params.merchantId))
</script>
<template><main class="mobile-page merchant-layout"><AppNavBar :title="merchant?.name || '商户服务'"/><header class="merchant-hero" @click="goMerchantInfo(route.params.merchantId)"><img class="merchant-logo" :src="merchantLogo" alt="青科博春信息技术"><h1>{{ merchant?.name || '商户服务' }}</h1><p>{{ merchant?.description || '点击查看商户介绍' }}</p></header><section class="merchant-content"><RouterView/></section><MerchantTabBar/></main></template>
<style scoped lang="scss">.merchant-layout{padding-bottom:66px}.merchant-hero{padding:26px 20px;color:#fff;background:#337c5e;cursor:pointer}.merchant-logo{display:block;width:27vh;height:auto;object-fit:contain}.merchant-hero h1{margin:20px 0 6px;font-size:24px}.merchant-hero p{margin:0;opacity:.82;font-size:13px}.merchant-content{min-height:calc(100vh - 253px)}</style>
