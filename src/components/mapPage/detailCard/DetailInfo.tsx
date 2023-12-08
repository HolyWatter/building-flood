import Text from '@/components/shared/Text'
import classNames from 'classnames/bind'
import styles from './DetailInfo.module.scss'

const cx = classNames.bind(styles)

function DetailInfo() {
  return (
    <div className={cx('detail-container')}>
      <div className={cx('detail-row')}>
        <div className={cx('detail-title')}>
          <Text typo="t4">점검일자</Text>
        </div>
        <div className={cx('detail-info')}>
          <Text typo="t6">info</Text>
        </div>
      </div>
      <div className={cx('detail-row')}>
        <div className={cx('detail-title')}>
          <Text typo="t4">노후년도</Text>
        </div>
        <div className={cx('detail-info')}>
          <Text typo="t6">info</Text>
        </div>
      </div>
      <div className={cx('detail-row')}>
        <div className={cx('detail-title')}>
          <Text typo="t4">주용도</Text>
        </div>
        <div className={cx('detail-info')}>
          <Text typo="t6">info</Text>
        </div>
      </div>
      <div className={cx('detail-row')}>
        <div className={cx('detail-title')}>
          <Text typo="t4">주용도</Text>
        </div>
        <div className={cx('detail-info-flood')}>
          <Text typo="t6">info</Text>
          <Text typo="t6">info</Text>
          <Text typo="t6">info</Text>
        </div>
      </div>
    </div>
  )
}

export default DetailInfo
