import { Swiper, SwiperItem, Image } from '@tarojs/components'
import { memo } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

const HomeBanner = memo(function(props) {
  const { banners } = props

  return (
    <Swiper 
      className={styles['home-banner']} 
      indicatorDots 
      indicatorColor='#999' 
      indicatorActiveColor='#ff4641' 
      autoplay
      circular
      interval={3000}
    >
      {
        banners.map(item => (
          <SwiperItem key={item.id}>
            <Image src={item.pic} className={styles['banner-img']} mode='widthFix' />
          </SwiperItem>
        ))
      }
    </Swiper>
  )
})

HomeBanner.propTypes = {
  banners: PropTypes.array
}

export default HomeBanner