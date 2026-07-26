<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppNavBar from '@/components/common/AppNavBar.vue'
import { merchantList } from '@/mock/merchant/merchant'

const route = useRoute()
const merchant = computed(() => merchantList.find((item) => String(item.id) === route.params.merchantId))
</script>

<template>
  <main class="mobile-page">
    <AppNavBar title="商户信息" />
    <section v-if="merchant" class="page-content">
      <article class="card-surface">
        <h1>{{ merchant.name }}</h1>
        <van-tag type="success">{{ merchant.tag }}</van-tag>
        <p>{{ merchant.description }}</p>
        <p class="merchant-contact">联系商户：18888888888</p>
      </article>
      <article class="card-surface certificates">
        <h2>经营资质</h2>
        <van-swipe :autoplay="3500" indicator-color="#18b566">
          <van-swipe-item v-for="certificate in merchant.certificates" :key="certificate.image">
            <p class="certificate-title">{{ certificate.text }}</p>
            <van-image width="100%" height="100%" fit="cover" :src="certificate.image" />
          </van-swipe-item>
        </van-swipe>
      </article>
    </section>
  </main>
</template>

<style scoped lang="scss">
h1 { margin: 0 0 10px; font-size: 23px; }
p { color: #6f7d76; line-height: 1.7; }
.merchant-contact { margin: 8px 0 0; color: #e0a800; font-weight: 700; }
.certificates { margin-top: 12px; }
.certificates h2 { margin: 0 0 12px; font-size: 18px; }
.certificates :deep(.van-swipe) { overflow: hidden; aspect-ratio: 5 / 3; border-radius: 10px; background: #eef1ef; }
.certificates :deep(.van-swipe__track), .certificates :deep(.van-swipe-item), .certificates :deep(.van-image) { height: 100% !important; }
.certificate-title { position: absolute; z-index: 2; top: 8px; left: 8px; margin: 0; padding: 4px 8px; color: #fff; background: rgba(0, 0, 0, .5); border-radius: 4px; font-size: 12px; line-height: 1.2; }
</style>