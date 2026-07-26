<script setup>
import { computed, onMounted, ref } from 'vue'
import { showToast } from 'vant'
import ServiceCard from '@/components/service/ServiceCard.vue'
import EmptyView from '@/components/common/EmptyView.vue'
import { useService } from '@/composables/useService'
import { useNavigator } from '@/composables/useNavigator'
import { useCart } from '@/composables/useCart'

const categories = ['全部服务', '水果生鲜', '生活服务', '新鲜好物']
const selectedCategory = ref('全部服务')
const { services, loadList } = useService()
const { goService, goMerchant } = useNavigator()
const { add } = useCart()
const visibleServices = computed(() => services.value.filter((service) => {
  if (selectedCategory.value === '全部服务') return true
  if (selectedCategory.value === '水果生鲜') return service.merchantName === '时令果仓'
  return false
}))
const addCart = (service) => { add(service); showToast('已加入清单') }
onMounted(loadList)
</script>

<template>
  <section class="category-page">
    <header class="category-title"><h1>服务分类</h1></header>
    <div class="category-layout">
      <aside class="category-sidebar">
        <button v-for="category in categories" :key="category" :class="{ active: selectedCategory === category }" @click="selectedCategory = category">{{ category }}</button>
      </aside>
      <main class="category-content">
        <ServiceCard v-for="item in visibleServices" :key="item.id" :service="item" layout="list" @detail="goService(item.id)" @merchant="goMerchant(item.merchantId)" @add="addCart" />
        <EmptyView v-if="!visibleServices.length" description="暂无服务" />
      </main>
    </div>
  </section>
</template>

<style scoped lang="scss">
.category-page { display: flex; height: calc(100vh - 70px); flex-direction: column; overflow: hidden; }
.category-title { flex: none; padding: 16px 16px 12px; background: #eff2f5; }
.category-title h1 { margin: 0; font-size: 23px; }
.category-layout { display: grid; min-height: 0; flex: 1; grid-template-columns: 86px minmax(0, 1fr); gap: 12px; padding: 0 16px 16px; overflow: hidden; }
.category-sidebar, .category-content { min-height: 0; overflow-y: auto; overscroll-behavior: contain; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
.category-sidebar::-webkit-scrollbar, .category-content::-webkit-scrollbar { display: none; }
.category-sidebar { display: flex; flex-direction: column; gap: 8px; }
.category-sidebar button { flex: none; padding: 10px 4px; color: #718078; background: #fff; border: 0; border-radius: 8px; font-size: 12px; }
.category-sidebar .active { color: #18b566; font-weight: 700; }
</style>
