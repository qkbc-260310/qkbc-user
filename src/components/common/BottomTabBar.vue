<script setup>
import { useRoute } from 'vue-router'
import { useNavigator } from '@/composables/useNavigator'
import home0 from '@/assets/svgs/navigation/icon-home-0.svg'; import home1 from '@/assets/svgs/navigation/icon-home-1.svg'
import category0 from '@/assets/svgs/navigation/icon-category-0.svg'; import category1 from '@/assets/svgs/navigation/icon-category-1.svg'
import list0 from '@/assets/svgs/navigation/icon-list-0.svg'; import list1 from '@/assets/svgs/navigation/icon-list-1.svg'
import user0 from '@/assets/svgs/navigation/icon-user-0.svg'; import user1 from '@/assets/svgs/navigation/icon-user-1.svg'
const route = useRoute(); const { goHome, goCategory, goCart, goUser } = useNavigator()
const items = [['首页', '/main/home', home0, home1, goHome], ['分类', '/main/category', category0, category1, goCategory], ['清单', '/main/cart', list0, list1, goCart], ['用户', '/main/user', user0, user1, goUser]]
</script>
<template><nav class="tabs"><button v-for="item in items" :key="item[1]" :class="{ active: route.path === item[1] }" @click="item[4]()"><img :src="route.path === item[1] ? item[3] : item[2]"><span>{{ item[0] }}</span></button></nav></template>
<style scoped lang="scss">.tabs{position:fixed;z-index:20;right:0;bottom:0;left:0;display:flex;max-width:640px;height:70px;margin:auto;background:#fff;border-top:1px solid #e7ece9}.tabs button{flex:1;display:grid;place-content:center;gap:3px;color:#829089;background:transparent;border:0}.tabs img{width:26px;height:26px;margin:auto}.tabs span{font-size:11px}.tabs .active{color:#18b566}</style>
