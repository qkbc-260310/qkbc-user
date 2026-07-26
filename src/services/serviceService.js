import { ServiceRepository } from '@/repositories/serviceRepository'
export const ServiceService = { getList: () => ServiceRepository.getList(), getById: (serviceId) => ServiceRepository.getById(serviceId) }
