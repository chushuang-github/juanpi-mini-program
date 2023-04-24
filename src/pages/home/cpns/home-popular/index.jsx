import { View, Image } from '@tarojs/components'
import { memo } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

const HomePopular = memo(function(props) {
  const { populars } = props

  return (
    <View className={styles['home-popular']}>
      {
        populars.map(item => (
          <Image className={styles['popular-img']} src={item.pic} key={item.id} mode='widthFix' />
        ))
      }
    </View>
  )
})

HomePopular.propTypes = {
  populars: PropTypes.array
}

export default HomePopular