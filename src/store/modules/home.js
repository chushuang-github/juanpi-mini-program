import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getHomeInfoData, getHomeRecommendData, getHomeGoods } from '@/service/home'

// 异步action
export const fetchHomeInfoData = createAsyncThunk('home/info', async () => {
  const res = await getHomeInfoData()
  return res.data
})
export const fetchHomeRecommendData = createAsyncThunk('home/recommend', async () => {
  const res = await getHomeRecommendData()
  return res.data
})
export const fetchHomeGoodsData = createAsyncThunk('home/goods', async (payload) => {
  const { type, page } = payload
  const res = await getHomeGoods(type, page)
  return {
    goods: res.data.goods || [],
    type,
    page
  }
})

export const tabTypes = ['specific', 'single']
function getDefaultGoodsList() {
  const goodsListOrigin = {}
  tabTypes.forEach(item => {
    goodsListOrigin[item] = { page: 0, list: [] }
  })
  return goodsListOrigin
}

const homeSlick = createSlice({
  name: 'home',
  initialState: {
    banners: [],
    populars: [],
    recommend: null, 
    goodsList: getDefaultGoodsList(),
    currentTab: tabTypes[0]
  },
  reducers: {
    setCurrentTab(state, { payload }) {
      state.currentTab = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomeInfoData.fulfilled, (state, action) => {
      const { payload } = action
      state.banners = payload.adsInfo.slide_ads.config.slide || []
    }).addCase(fetchHomeRecommendData.fulfilled, (state, action) => {
      const { payload } = action
      state.populars = payload.populars || []
      state.recommend = payload.recommend || null
    }).addCase(fetchHomeGoodsData.fulfilled, (state, { payload }) => {
      const { goods, type, page } = payload
      state.goodsList[tabTypes[type]].list = [...state.goodsList[tabTypes[type]].list, ...goods]
      state.goodsList[tabTypes[type]].page = page
    })
  }
})

export const { setCurrentTab } = homeSlick.actions
export default homeSlick.reducer