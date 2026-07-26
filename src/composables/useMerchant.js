import { ref } from 'vue'
import { MerchantService } from '@/services/merchantService'

export function useMerchant() {
  const merchant = ref(null)
  const services = ref([])
  const loadMerchant = async (merchantId) => { merchant.value = (await MerchantService.getById(merchantId)).data }
  const loadServices = async (merchantId) => { services.value = (await MerchantService.getServices(merchantId)).data }
  return { merchant, services, loadMerchant, loadServices }
}
