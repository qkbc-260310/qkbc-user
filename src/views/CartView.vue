<script setup>
import { computed, ref } from 'vue'
import { showToast } from 'vant'
import AppNotice from '@/components/common/AppNotice.vue'
import EmptyView from '@/components/common/EmptyView.vue'
import CartItemCard from '@/components/cart/CartItemCard.vue'
import { useCart } from '@/composables/useCart'
import { useNavigator } from '@/composables/useNavigator'
import { formatPrice } from '@/utils/formatter'
import arrowIcon from '@/assets/svgs/action/icon-arrow-right.svg'

const { merchantGroups, updateQuantity, remove, deliveryAddress, setDeliveryAddress, shippingPhone, setShippingPhone } = useCart()
const { goHome, goMerchant, goService } = useNavigator()
const addressOptions = ['南院01号学生宿舍', '南院02号学生宿舍', '南院03号学生宿舍', '南院04号学生宿舍', '南院05号学生宿舍'].map((text, index) => ({ text, value: `south-${String(index + 1).padStart(2, '0')}` }))
const showAddress = ref(false)
const showCheckout = ref(false)
const phoneValid = computed(() => /^1\d{10}$/.test(shippingPhone.value))
const confirmAddress = ({ selectedOptions }) => { setDeliveryAddress(selectedOptions[0]); showAddress.value = false }
const changePhone = (value) => { setShippingPhone(value); if (value && !/^1\d{10}$/.test(value)) showToast('请输入11位手机号') }
const checkout = () => { if (!phoneValid.value) showToast('手机号格式待确认'); showCheckout.value = true }
const confirmCheckout = () => { showCheckout.value = false; showToast('支付功能后续接入') }
</script>

<template>
  <section class="cart-page">
    <AppNotice text="每家店都是独立经营的小店，需要分别向商户付款哦～" />
    <main class="cart-content">
      <section class="cart-form">
        <van-field :model-value="shippingPhone" type="tel" maxlength="11" label="收货手机号" placeholder="请输入11位手机号" :error="Boolean(shippingPhone) && !phoneValid" :error-message="Boolean(shippingPhone) && !phoneValid ? '手机号格式不正确' : ''" @update:model-value="changePhone" />
        <button class="address-picker card-surface" @click="showAddress = true"><span>收货地址</span><b>{{ deliveryAddress.text }}</b><img :src="arrowIcon" alt="" /></button>
      </section>
      <header><h1>我的清单</h1><p>请按商户分别确认服务</p></header>
      <section class="cart-list">
        <EmptyView v-if="!merchantGroups.length" description="我的清单空空如也～"><van-button type="primary" round @click="goHome">去逛逛</van-button></EmptyView>
        <article v-for="group in merchantGroups" :key="group.merchantId" class="merchant-group card-surface"><div class="group-head"><button @click="goMerchant(group.merchantId)">{{ group.merchantName }}</button><strong>小计 {{ formatPrice(group.total) }}</strong></div><CartItemCard v-for="item in group.items" :key="item.id" :item="item" @detail="goService" @quantity-change="updateQuantity(item.id, $event)" @remove="remove" /><van-button block round type="primary" class="checkout" @click="checkout">去结算</van-button></article>
      </section>
    </main>
    <van-popup v-model:show="showAddress" round position="bottom"><van-picker title="选择收货地址" :columns="addressOptions" @cancel="showAddress = false" @confirm="confirmAddress" /></van-popup>
    <van-dialog v-model:show="showCheckout" title="核对收获地址和手机号" show-cancel-button cancel-button-text="修改" confirm-button-text="确认" @confirm="confirmCheckout">
      <div class="checkout-dialog"><p><span>手机号</span>{{ shippingPhone || '未填写' }}</p><p><span>收货地址</span>{{ deliveryAddress.text }}</p><p class="note">后续更改需要您致电商户，请仔细核对</p></div>
    </van-dialog>
  </section>
</template>

<style scoped lang="scss">
.cart-page { display: flex; height: calc(100vh - 70px); flex-direction: column; overflow: hidden; }
.cart-content { display: flex; min-height: 0; flex: 1; flex-direction: column; padding: 12px 16px 16px; overflow: hidden; }
.cart-form { flex: none; }.cart-form :deep(.van-cell) { margin-bottom: 10px; border-radius: 12px; }
.address-picker { display: grid; width: 100%; grid-template-columns: 70px 1fr 18px; align-items: center; margin-bottom: 12px; border: 0; text-align: left; }.address-picker span { color: #829089; font-size: 13px; }.address-picker b { font-size: 15px; }.address-picker img { width: 18px; height: 18px; }
header { flex: none; } header h1 { margin: 8px 0 4px; font-size: 23px; } header p { margin: 0 0 12px; color: #829089; font-size: 13px; }
.cart-list { min-height: 0; flex: 1; overflow-y: auto; overscroll-behavior: contain; -webkit-overflow-scrolling: touch; scrollbar-width: none; }.cart-list::-webkit-scrollbar { display: none; }
.merchant-group { margin-bottom: 16px; }.group-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }.group-head button { padding: 0; color: #27342f; background: none; border: 0; font-size: 16px; font-weight: 700; }.group-head strong { color: #ee0a24; font-size: 14px; }.merchant-group :deep(.cart-item) + :deep(.cart-item) { margin-top: 10px; }.checkout { margin-top: 14px; }.cart-page :deep(.empty-view) { display: flex; flex-direction: column; align-items: center; }.cart-page :deep(.empty-view .van-button) { min-width: 120px; }
.checkout-dialog { padding: 4px 24px 20px; }.checkout-dialog p { display: flex; justify-content: space-between; gap: 20px; color: #27342f; line-height: 1.7; }.checkout-dialog span { flex: none; color: #829089; }.checkout-dialog .note { display: block; margin: 14px 0 0; color: #e0a800; font-size: 12px; }
</style>
