import { createRouter, createWebHistory } from 'vue-router'

const view = (name) => () => import(`@/views/${name}.vue`)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: () => (localStorage.getItem('user_phone') && localStorage.getItem('user_address') ? '/main/home' : '/start') },
    { path: '/start', name: 'Start', component: view('StartView'), meta: { title: '欢迎', keepAlive: false } },
    {
      path: '/main', component: () => import('@/layouts/MainLayout.vue'), children: [
        { path: '', redirect: '/main/home' },
        { path: 'home', name: 'Home', component: view('HomeView'), meta: { title: '首页', keepAlive: true } },
        { path: 'category', name: 'Category', component: view('CategoryView'), meta: { title: '分类', keepAlive: true } },
        { path: 'cart', name: 'Cart', component: view('CartView'), meta: { title: '我的清单', keepAlive: true } },
        { path: 'user', name: 'User', component: view('UserView'), meta: { title: '用户中心', keepAlive: true } },
      ],
    },
    {
      path: '/merchant/:merchantId', component: () => import('@/layouts/MerchantLayout.vue'), children: [
        { path: '', redirect: (to) => `/merchant/${to.params.merchantId}/recommend` },
        { path: 'recommend', name: 'MerchantRecommend', component: view('MerchantRecommendView'), meta: { title: '商户推荐', keepAlive: true } },
        { path: 'category', name: 'MerchantCategory', component: view('MerchantCategoryView'), meta: { title: '商户分类', keepAlive: true } },
      ],
    },
    { path: '/merchant-info/:merchantId', name: 'MerchantInfo', component: view('MerchantInfoView'), meta: { title: '商户信息', keepAlive: false } },
    { path: '/service/:serviceId', name: 'ServiceDetail', component: view('ServiceDetailView'), meta: { title: '服务详情', keepAlive: false } },
    { path: '/job/list', name: 'JobList', component: view('JobListView'), meta: { title: '兼职信息', keepAlive: false } },
    { path: '/job/:jobId', name: 'JobDetail', component: view('JobDetailView'), meta: { title: '兼职详情', keepAlive: false } },
    { path: '/agreement/list', name: 'AgreementList', component: view('AgreementListView'), meta: { title: '服务条款', keepAlive: false } },
    { path: '/agreement/:agreementId', name: 'AgreementDetail', component: view('AgreementDetailView'), meta: { title: '服务条款', keepAlive: false } },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

router.beforeEach((to) => {
  document.title = '青科博春-您的身边小集'
  if (to.name === 'Start') return true
  return localStorage.getItem('user_phone') && localStorage.getItem('user_address') ? true : '/start'
})

export default router
