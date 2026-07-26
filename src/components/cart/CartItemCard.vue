<script setup>
import { formatPrice } from '@/utils/formatter'
defineProps({ item: { type: Object, required: true } })
defineEmits(['quantity-change', 'remove', 'detail'])
</script>
<template><article class="cart-item"><img :src="item.images?.[0]" :alt="item.title"><div class="cart-info"><h3 @click="$emit('detail', item.id)">{{ item.title }}</h3><p>{{ formatPrice(item.price) }} / 份</p><footer><van-stepper :model-value="item.quantity" min="1" @change="$emit('quantity-change', $event)"/><strong>{{ formatPrice(item.price * item.quantity) }}</strong></footer></div><button class="remove" aria-label="移除服务" @click="$emit('remove', item.id)">×</button></article></template>
<style scoped lang="scss">.cart-item{position:relative;display:grid;grid-template-columns:78px minmax(0,1fr);gap:12px;padding:12px;background:#fff;border-radius:12px}.cart-item>img{width:78px;height:78px;border-radius:10px;object-fit:cover}.cart-info h3{margin:2px 20px 7px 0;font-size:14px}.cart-info p{margin:0;color:#7b8882;font-size:12px}.cart-info footer{display:flex;align-items:center;justify-content:space-between;margin-top:12px}.cart-info strong{color:#ee0a24}.remove{position:absolute;top:8px;right:8px;color:#969799;background:none;border:0;font-size:20px}</style>
