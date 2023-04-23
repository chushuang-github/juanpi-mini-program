import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { memo } from 'react'
import styles from './index.module.scss'

const Category = memo(function() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className={styles['category']}>
      <Text>分类</Text>
    </View>
  )
})

export default Category