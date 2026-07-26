<script setup>
import { computed, ref } from 'vue'
import { useLocalUser } from '@/composables/useLocalUser'
import { useNavigator } from '@/composables/useNavigator'
import { orderList as source } from '@/mock/user/order'
import jobIcon from '@/assets/svgs/button/icon-job.svg'
import agreementIcon from '@/assets/svgs/button/icon-service-term.svg'

const { phone, addressLines } = useLocalUser()
const { goStart, goHome, goMerchant, goJobList, goAgreement } = useNavigator()
const filter = ref('全部')
const filters = ['全部', '最近三月', '最近一月', '最近七日']
const expanded = ref(true)
const currentDate = new Date('2026-07-26T00:00:00')
const filterDays = { '最近三月': 92, '最近一月': 31, '最近七日': 7 }
const filteredOrders = computed(() => {
  const days = filterDays[filter.value]
  if (!days) return source
  const threshold = new Date(currentDate)
  threshold.setDate(threshold.getDate() - days)
  return source.filter((order) => new Date(order.date.replaceAll('/', '-')) >= threshold)
})
const ordersByDate = computed(() => Object.entries(filteredOrders.value.reduce((groups, order) => { (groups[order.date] ||= []).push(order); return groups }, {})).sort(([first], [second]) => second.localeCompare(first)))
const total = computed(() => filteredOrders.value.reduce((sum, item) => sum + item.amount, 0))
</script>

<template>
  <section class="page-content">
    <header class="user-card card-surface"><div class="address-info"><small>当前服务区域</small><p class="address-region">{{addressLines.region}}</p><h2>{{addressLines.location}}</h2><p class="address-detail">{{addressLines.detail}}</p><p class="phone">{{phone}}</p></div><van-button round plain size="small" type="primary" @click="goStart('user')">重新设置</van-button></header>
    <section class="shortcuts card-surface"><button @click="goJobList()"><img :src="jobIcon">兼职信息</button><button @click="goAgreement()"><img :src="agreementIcon">服务条款</button></section>
    <section class="records"><h2>服务记录</h2><div class="filters"><button v-for="item in filters" :key="item" :class="{active:filter===item}" @click="filter=item">{{item}}</button></div><article v-if="ordersByDate.length" class="order-group card-surface"><header><button @click="goMerchant(1)">时令果仓</button><span>合计 ¥{{total.toFixed(2)}}</span><button @click="expanded=!expanded">{{expanded?'收起':'展开'}}</button></header><div v-show="expanded"><template v-for="[date, orders] in ordersByDate" :key="date"><van-divider>{{date}}</van-divider><article v-for="item in orders" :key="item.id" class="order"><h3>{{item.title}}</h3><div class="order-meta"><p>数量：{{item.quantity}}</p><strong>¥{{item.amount}}</strong></div></article></template></div></article><div v-else class="card-surface empty-orders"><p>当前筛选条件下暂无服务记录</p><van-button round type="primary" @click="goHome">去逛逛</van-button></div></section>
  </section>
</template>

<style scoped lang="scss">.user-card{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:16px}.address-info{min-width:0}.user-card h2{margin:5px 0;font-size:19px}.address-info small,.address-region,.address-detail,.phone,.order p{margin:0;color:#7b8882;font-size:12px}.address-region{margin-top:6px}.address-detail{margin-top:3px}.phone{margin-top:7px;color:#4f5c56}.shortcuts{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}.shortcuts button{display:flex;align-items:center;justify-content:center;gap:10px;padding:8px;color:#337c5e;background:#fff;border:0;font-size:14px}.shortcuts img{width:29px;height:29px}.records h2{margin:22px 0 12px;font-size:18px}.filters{display:flex;overflow:auto;gap:8px;margin-bottom:12px}.filters button{flex:none;padding:6px 12px;color:#718078;background:#fff;border:0;border-radius:14px;font-size:12px}.filters .active{color:#fff;background:#18b566}.order-group>header{display:flex;align-items:center;justify-content:space-between}.order-group>header button{padding:0;color:#27342f;background:none;border:0;font-weight:700}.order-group>header button:last-child{color:#18b566;font-weight:400}.order{padding:0 0 14px}.order h3{margin:0 0 8px;font-size:15px}.order-meta{display:flex;align-items:center;justify-content:space-between}.order-meta strong{color:#ee0a24}.order-group :deep(.van-divider){margin:16px 0 12px;color:#829089;font-size:12px}.empty-orders{text-align:center}.empty-orders p{color:#829089}</style>
