import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { memo } from 'react'
import styles from './index.module.scss'

const Cart = memo(function() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className={styles['cart']}>
      <Text>购物车</Text>
    </View>
  )
})

export default Cart