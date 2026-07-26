import { useRouter } from 'vue-router'

export function useNavigator() {
  const router = useRouter()
  const goHome = () => router.replace('/main/home')
  const goCategory = () => router.push('/main/category')
  const goCart = () => router.push('/main/cart')
  const goUser = () => router.push('/main/user')
  const goStart = (from) => router.push({ path: '/start', query: from ? { from } : {} })
  const goMerchant = (merchantId) => router.push(`/merchant/${merchantId}/recommend`)
  const goMerchantInfo = (merchantId) => router.push(`/merchant-info/${merchantId}`)
  const goService = (serviceId) => router.push(`/service/${serviceId}`)
  const goJobList = () => router.push('/job/list')
  const goJob = (jobId) => router.push(`/job/${jobId}`)
  const goAgreement = (agreementId) => router.push(
    agreementId === undefined || agreementId === null
      ? '/agreement/list'
      : `/agreement/${agreementId}`,
  )
  const goBack = () => (window.history.length > 1 ? router.back() : goHome())
  const leaveMerchant = () => goHome()
  return { goHome, goCategory, goCart, goUser, goStart, goMerchant, goMerchantInfo, goService, goJobList, goJob, goAgreement, goBack, leaveMerchant }
}
