import classNames from 'classnames/bind'
import Text from '../../shared/Text'
import styles from './LocationInfo.module.scss'

const cx = classNames.bind(styles)

function LocationInfo() {
  return (
    <div className={cx('location-info-container')}>
      <div className={cx('location-info')}>
        <Text typo="t2" classNames="--gray800">
          위치정보
        </Text>
        <div className={cx('size-box')} />
        <Text typo="t5" classNames="--gray800">
          · 서울특별시 서초구 서초동
        </Text>
      </div>
      <button className={cx('location-change-btn')}>
        <Text typo="t7" classNames="--gray800">
          위치변경
        </Text>
      </button>
    </div>
  )
}

export default LocationInfo
