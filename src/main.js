import { createApp } from 'vue'
import {
  Button, Cascader, Cell, Empty, Field, Image as VanImage, Loading, NoticeBar,
  Popup, Swipe, SwipeItem, Tab, Tabs, Tag, Divider, Picker, Stepper, Dialog,
} from 'vant'
import 'vant/lib/index.css'
import '@/assets/styles/main.scss'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(Button).use(Cascader).use(Cell).use(Empty).use(Field).use(VanImage).use(Loading)
app.use(NoticeBar).use(Popup).use(Swipe).use(SwipeItem).use(Tab).use(Tabs).use(Tag).use(Divider).use(Picker).use(Stepper).use(Dialog)
app.mount('#app')
