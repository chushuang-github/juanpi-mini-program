import { View } from '@tarojs/components'
import { useLoad, useReachBottom } from '@tarojs/taro'
import { memo, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { 
  fetchHomeInfoData, 
  fetchHomeRecommendData, 
  fetchHomeGoodsData, 
  setCurrentTab, 
  tabTypes 
} from '@/store/modules/home'
import HomeSearch from './cpns/home-search'
import HomeBanner from './cpns/home-banner'
import HomeRecommend from './cpns/home-recommend'
import HomePopular from './cpns/home-popular'
import TabControl from '@/components/tab-control'
import GridView from "@/components/grid-view"

const Home = memo(function() {
  const dispatch = useDispatch()
  const { banners, populars, recommend, goodsList, currentTab } = useSelector(state => ({
    banners: state.home.banners,
    populars: state.home.populars,
    recommend: state.home.recommend,
    goodsList: state.home.goodsList,
    currentTab: state.home.currentTab
  }), shallowEqual)

  useLoad(() => {
    dispatch(fetchHomeInfoData())
    dispatch(fetchHomeRecommendData())
    dispatch(fetchHomeGoodsData({type: 0, page: 1}))
    dispatch(fetchHomeGoodsData({type: 1, page: 1}))
  })

  // tab点击
  const [tabIndex, setTabIndex] = useState(0)
  const onTabClick = (index) => {
    setTabIndex(index)
    dispatch(setCurrentTab(tabTypes[index]))
  }

  // 滚动到底部
  useReachBottom(() => {
    const nextPage = goodsList[currentTab].page + 1
    dispatch(fetchHomeGoodsData({ type: tabIndex, page: nextPage }))
  })

  return (
    <View>
      <HomeSearch />
      <HomeBanner banners={banners} />
      <HomePopular populars={populars} />
      { recommend && <HomeRecommend recommend={recommend} /> }

      <TabControl titles={['精选专场', '精选单品']} onTabClick={onTabClick} />
      <GridView goods={goodsList[currentTab].list}></GridView>
    </View>
  )
})

export default Home