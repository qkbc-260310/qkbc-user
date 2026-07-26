import { ref } from 'vue'
import { HomeService } from '@/services/homeService'

export function useHome() {
  const home = ref({ notice: '', recommendations: [], merchants: [] })
  const loading = ref(false)
  const load = async () => { loading.value = true; try { home.value = (await HomeService.getHome()).data } finally { loading.value = false } }
  return { home, loading, load }
}
