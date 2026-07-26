import { computed, ref } from 'vue'
import { useCartStore } from '@/stores/cart'

const address = ref(localStorage.getItem('user_address') || '')
export function useLocalUser() {
  const cartStore = useCartStore()
  const phone = computed({
    get: () => cartStore.shippingPhone,
    set: (value) => cartStore.setShippingPhone(value),
  })
  const ready = computed(() => Boolean(phone.value && address.value))
  const addressLines = computed(() => {
    const parts = address.value.split('/').filter(Boolean)
    return { region: parts.slice(0, 3).join('/') || '湖南省/岳阳市/岳阳楼区', location: parts[3] || '湖南理工大学', detail: cartStore.deliveryAddress.text }
  })
  const saveUser = (newPhone, newAddress) => {
    cartStore.setShippingPhone(newPhone)
    address.value = newAddress
    localStorage.setItem('user_address', newAddress)
  }
  return { phone, address, addressLines, ready, saveUser }
}
