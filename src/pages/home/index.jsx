import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { memo } from 'react'
import styles from './index.module.scss'

const Home = memo(function() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className={styles['home']}>
      <Text>首页</Text>
    </View>
  )
})

export default Home