import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'

export function useCart() {
  const store = useCartStore()
  const merchantGroups = computed(() => store.merchantGroups)
  return { items: computed(() => store.items), merchantGroups, deliveryAddress: computed(() => store.deliveryAddress), shippingPhone: computed(() => store.shippingPhone), add: store.add, updateQuantity: store.updateQuantity, remove: store.remove, setDeliveryAddress: store.setDeliveryAddress, setShippingPhone: store.setShippingPhone }
}
