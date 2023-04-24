import { View, Text } from '@tarojs/components'
import { memo, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './index.module.scss'

const TabControl = memo(function(props) {
  const { titles, onTabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleTabClick = (index) => {
    setCurrentIndex(index)
    onTabClick && onTabClick(index)
  }

  return (
    <View className={styles['tab-control']}>
      {
        titles.map((item, index) => (
          <View 
            key={index} 
            className={classNames(styles['tab-item'], { [styles['active']]: currentIndex === index })}
            onClick={() => handleTabClick(index)}
          >
            { item }
          </View>
        ))
      }
    </View>
  )
})

TabControl.propTypes = {
  titles: PropTypes.array,
  onTabClick: PropTypes.func
}

export default TabControl