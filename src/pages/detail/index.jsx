import { View, WebView } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { memo, useState } from 'react'
import styles from './index.module.scss'

const Detail = memo(function() {
  const [link, setLink] = useState("")
  useLoad((option) => {
    setLink(option.link)
  })

  return (
    <View className={styles['detail']}>
      <WebView src={link}></WebView>
    </View>
  )
})

export default Detail