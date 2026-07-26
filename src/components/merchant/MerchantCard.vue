<script setup>
import ProductSwiper from '@/components/product/ProductSwiper.vue';defineProps({merchant:{type:Object,required:true}});defineEmits(['enter'])</script>

<template><article class="merchant-card card-surface"><ProductSwiper :images="merchant.images"/><div class="merchant-info"><div><h3>{{merchant.name}}</h3><van-tag plain type="success">{{merchant.tag}}</van-tag></div><van-button round size="small" type="primary" @click="$emit('enter',merchant)">进入商户</van-button></div></article></template>

<style scoped lang="scss">.merchant-card { margin-bottom: 16px; }.merchant-info { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: 14px; }.merchant-info h3 { margin: 0 0 8px; font-size: 18px; }</style>
