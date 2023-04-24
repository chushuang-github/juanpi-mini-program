import hyRequest from './index'

// 轮播图
export const getHomeInfoData = () => {
  return hyRequest.get('/homeinfo')
}

// 受欢迎度和推荐
export const getHomeRecommendData = () => {
  return hyRequest.get('/recommend')
}

// 列表
export const getHomeGoods = (type, page) => {
  return hyRequest.post('/goods', { type, page })
}