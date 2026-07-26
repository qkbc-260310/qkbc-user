<script setup>
import { onMounted, watch } from 'vue'
import { showToast } from 'vant'
import { useRoute } from 'vue-router'; import ServiceCard from '@/components/service/ServiceCard.vue'; import { useMerchant } from '@/composables/useMerchant'; import { useNavigator } from '@/composables/useNavigator'; import { useCart } from '@/composables/useCart'
const route = useRoute(); const { services, loadServices } = useMerchant(); const { goService } = useNavigator(); const { add } = useCart(); const load = () => loadServices(route.params.merchantId); const addCart = (service) => { add(service); showToast('已加入清单') }; onMounted(load); watch(() => route.params.merchantId, load)
</script>
<template><section class="page-content"><h2>全部服务</h2><ServiceCard v-for="item in services" :key="item.id" :service="item" :show-merchant="false" layout="list" @detail="goService(item.id)" @add="addCart"/></section></template>
<style scoped lang="scss">h2{margin:0 0 16px}</style>
