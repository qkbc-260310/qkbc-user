import { serviceList } from '@/mock/merchant/service'

export const ServiceRepository = {
  async getList() { return { code: 0, msg: 'success', data: serviceList } },
  async getById(serviceId) { return { code: 0, msg: 'success', data: serviceList.find((item) => String(item.id) === String(serviceId)) || null } },
}
