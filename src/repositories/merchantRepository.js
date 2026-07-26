import { merchantList } from '@/mock/merchant/merchant'
import { serviceList } from '@/mock/merchant/service'

export const MerchantRepository = {
  async getById(merchantId) { return { code: 0, msg: 'success', data: merchantList.find((item) => String(item.id) === String(merchantId)) || null } },
  async getServices(merchantId) { return { code: 0, msg: 'success', data: serviceList.filter((item) => String(item.merchantId) === String(merchantId)) } },
}
