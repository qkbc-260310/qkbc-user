<script setup>
import ProductSwiper from './ProductSwiper.vue'
import { formatPrice } from '@/utils/formatter'
defineProps({ product: { type: Object, required: true } })
defineEmits(['detail', 'add'])
</script>

<template>
  <article class="product-card card-surface"><ProductSwiper :images="product.images" /><div class="heading"><h3>{{ product.title }}</h3><strong>{{ formatPrice(product.price) }}</strong></div><p>{{ product.description }}</p><div class="actions"><van-button plain round size="small" type="primary" @click="$emit('detail', product)">查看详情</van-button><van-button round size="small" type="primary" @click="$emit('add', product)">加入清单</van-button></div></article>
</template>

<style scoped lang="scss">
.product-card { margin-bottom: 16px; }.heading { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-top: 14px; }.heading h3 { margin: 0; font-size: 17px; }.heading strong { flex: none; color: #e05c3d; }p { margin: 8px 0 16px; color: #77827e; font-size: 13px; line-height: 1.6; }.actions { display: flex; justify-content: flex-end; gap: 10px; }
</style>
