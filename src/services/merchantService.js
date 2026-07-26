import { MerchantRepository } from '@/repositories/merchantRepository'
export const MerchantService = { getById: (merchantId) => MerchantRepository.getById(merchantId), getServices: (merchantId) => MerchantRepository.getServices(merchantId) }
