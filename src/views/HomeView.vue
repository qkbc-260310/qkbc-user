<script setup>
import { onMounted, ref } from 'vue'
import { showToast } from 'vant'
import AppLogo from '@/components/common/AppLogo.vue'; import AppNotice from '@/components/common/AppNotice.vue'; import ServiceCard from '@/components/service/ServiceCard.vue'; import MerchantCard from '@/components/merchant/MerchantCard.vue'; import LoadingView from '@/components/common/LoadingView.vue'
import { useHome } from '@/composables/useHome'; import { useNavigator } from '@/composables/useNavigator'; import { useCart } from '@/composables/useCart'; import logo from '@/assets/svgs/logo/logo-home-top.svg'
const active = ref(0); const { home, loading, load } = useHome(); const { goService, goMerchant, goStart } = useNavigator(); const { add } = useCart(); const addCart = (service) => { add(service); showToast('已加入清单') }
onMounted(load)
</script>
<template><div><AppNotice :text="home.notice"/><header><AppLogo :src="logo"/><p>发现本地好物与优质服务</p><van-button plain round size="small" type="primary" @click="goStart()">切换区域</van-button></header><LoadingView v-if="loading"/><van-tabs v-else v-model:active="active" swipeable><van-tab title="精选推荐"><section class="page-content service-grid"><ServiceCard v-for="item in home.recommendations" :key="item.id" :service="item" layout="grid" @detail="goService(item.id)" @merchant="goMerchant(item.merchantId)" @add="addCart"/></section></van-tab><van-tab title="商户列表"><section class="page-content"><MerchantCard v-for="item in home.merchants" :key="item.id" :merchant="item" @enter="goMerchant(item.id)"/></section></van-tab></van-tabs></div></template>
<style scoped lang="scss">header{display:flex;flex-direction:column;align-items:center;gap:10px;padding:20px;background:#fff}header p{margin:0;color:#829089;font-size:13px}.service-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.service-grid :deep(.service){margin-bottom:0}</style>
