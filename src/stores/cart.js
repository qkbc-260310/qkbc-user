import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    deliveryAddress: { text: '南院01号学生宿舍', value: 'south-01' },
    shippingPhone: localStorage.getItem('user_phone') || '18888888888',
  }),
  getters: {
    count: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
    merchantGroups: (state) => Object.values(state.items.reduce((groups, item) => {
      const group = groups[item.merchantId] || (groups[item.merchantId] = { merchantId: item.merchantId, merchantName: item.merchantName, items: [], total: 0 })
      group.items.push(item); group.total += item.price * item.quantity
      return groups
    }, {})),
  },
  actions: {
    add(service) { const item = this.items.find((entry) => entry.id === service.id); if (item) item.quantity += 1; else this.items.push({ ...service, quantity: 1 }) },
    updateQuantity(serviceId, quantity) { const item = this.items.find((entry) => entry.id === serviceId); if (!item) return; if (quantity <= 0) this.remove(serviceId); else item.quantity = quantity },
    remove(serviceId) { this.items = this.items.filter((item) => item.id !== serviceId) },
    setDeliveryAddress(address) { this.deliveryAddress = address },
    setShippingPhone(phone) {
      this.shippingPhone = phone
      localStorage.setItem('user_phone', phone)
    },
  },
})
