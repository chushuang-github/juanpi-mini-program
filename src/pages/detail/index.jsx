import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { memo } from 'react'
import styles from './index.module.scss'

const Detail = memo(function() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className={styles['detail']}>
      <Text>详情</Text>
    </View>
  )
})

export default Detail