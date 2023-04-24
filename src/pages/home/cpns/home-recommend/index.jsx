import { View, Image } from '@tarojs/components'
import { memo } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

const HomeRecommend = memo(function(props) {
  const { recommend } = props

  return (
    <View className={styles['recommend']}>
      <Image className={styles['ad-big-top-pic']} mode='widthFix' src={recommend.ad_big_top.pic} />
      <View className={styles['recommend-item']}>
        <Image className={styles['ad-left']} src={recommend.ad_left.pic} mode="widthFix" />
        <View className={styles['ad-right']}>
        <Image className={styles['ad-right-pic1']} src={recommend.ad_right1.pic} mode="widthFix" />
          <Image className={styles['ad-right-pic2']} src={recommend.ad_right2.pic} mode="widthFix" />
        </View>
      </View>
      <Image className={styles["ad-big-top-pic"]} src={recommend.ad_big_bottom.pic} mode="widthFix" />
      <Image className={styles["ad-big-top-pic"]} src={recommend.choiceness.pic} mode="widthFix" />
    </View>
  )
})

HomeRecommend.propTypes = {
  recommend: PropTypes.object
}

export default HomeRecommend