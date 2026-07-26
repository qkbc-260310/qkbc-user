import { ref } from 'vue'
import { ServiceService } from '@/services/serviceService'

export function useService() {
  const services = ref([])
  const service = ref(null)
  const loadList = async () => { services.value = (await ServiceService.getList()).data }
  const loadDetail = async (serviceId) => { service.value = (await ServiceService.getById(serviceId)).data }
  return { services, service, loadList, loadDetail }
}
