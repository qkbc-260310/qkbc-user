<script setup>
import { onMounted, watch } from 'vue'
import { showToast } from 'vant'
import { useRoute } from 'vue-router'; import ServiceCard from '@/components/service/ServiceCard.vue'; import EmptyView from '@/components/common/EmptyView.vue'; import { useMerchant } from '@/composables/useMerchant'; import { useNavigator } from '@/composables/useNavigator'; import { useCart } from '@/composables/useCart'
const route = useRoute(); const { services, loadServices } = useMerchant(); const { goService } = useNavigator(); const { add } = useCart(); const load = () => loadServices(route.params.merchantId); const addCart = (service) => { add(service); showToast('已加入清单') }; onMounted(load); watch(() => route.params.merchantId, load)
</script>
<template><section class="page-content service-grid"><ServiceCard v-for="item in services" :key="item.id" :service="item" :show-merchant="false" layout="grid" @detail="goService(item.id)" @add="addCart"/><EmptyView v-if="!services.length" description="该商户暂无服务"/></section></template>
<style scoped lang="scss">.service-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.service-grid :deep(.service){margin-bottom:0}</style>
