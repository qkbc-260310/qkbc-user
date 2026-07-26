<script setup>
import ProductSwiper from '@/components/product/ProductSwiper.vue'
import { formatPrice } from '@/utils/formatter'
defineProps({ recommend: { type: Object, required: true } })
defineEmits(['detail', 'add'])
</script>

<template>
  <article class="recommend-card card-surface"><div class="tag-row"><van-tag round type="success">{{ recommend.tag }}</van-tag></div><ProductSwiper :images="recommend.images" /><p class="merchant">服务商 · {{ recommend.merchant }}</p><h3>{{ recommend.title }}</h3><p class="description">{{ recommend.description }}</p><div class="footer"><strong>{{ formatPrice(recommend.price) }}<small> 参考价</small></strong><div><van-button plain round size="small" type="primary" @click="$emit('detail', recommend)">查看详情</van-button><van-button round size="small" type="primary" @click="$emit('add', recommend)">加入清单</van-button></div></div></article>
</template>

<style scoped lang="scss">
.recommend-card { position: relative; margin-bottom: 16px; }.tag-row { position: absolute; z-index: 2; top: 26px; left: 26px; }.merchant { margin: 14px 0 5px; color: #337c5e; font-size: 12px; }h3 { margin: 0; font-size: 18px; }.description { margin: 8px 0 16px; color: #77827e; font-size: 13px; line-height: 1.6; }.footer { display: flex; align-items: center; justify-content: space-between; gap: 8px; }.footer strong { color: #e05c3d; font-size: 18px; }.footer small { color: #949d99; font-size: 11px; font-weight: 400; }.footer div { display: flex; gap: 8px; }
</style>
