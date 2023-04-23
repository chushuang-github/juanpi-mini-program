import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { memo } from 'react'
import styles from './index.module.scss'

const Profile = memo(function() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className={styles['profile']}>
      <Text>我的</Text>
    </View>
  )
})

export default Profile