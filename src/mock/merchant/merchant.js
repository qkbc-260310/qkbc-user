import businessLicense from '@/assets/mock_image/merchant-licenses-1.jpg'
import healthCertificate from '@/assets/mock_image/merchant-licenses-2.png'
import advertise1 from '@/assets/mock_image/merchant-advertise-1.png'
import advertise2 from '@/assets/mock_image/merchant-advertise-2.png'
import advertise3 from '@/assets/mock_image/merchant-advertise-3.png'

export const merchantList = [{ id: 1, name: '时令果仓', tag: '水果生鲜', description: '专注岳阳本地当季水果与优质农产品。', images: [advertise1, advertise2, advertise3], certificates: [{ image: businessLicense, text: '营业执照' }, { image: healthCertificate, text: '健康证' }] }]
