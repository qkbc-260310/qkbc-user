import { homeNotice } from '@/mock/home/notice'
import { recommendList } from '@/mock/home/recommend'
import { merchantList } from '@/mock/merchant/merchant'

export const HomeRepository = {
  async getHome() {
    return { code: 0, msg: 'success', data: { notice: homeNotice, recommendations: recommendList, merchants: merchantList } }
  },
}
