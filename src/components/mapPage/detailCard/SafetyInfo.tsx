import Text from '@/components/shared/Text'
import classNames from 'classnames/bind'
import styles from './SafetyInfo.module.scss'

const cx = classNames.bind(styles)

function SafetyInfo() {
  return (
    <div className={cx('safety-container')}>
      <div className={cx('safety-table')}>
        <div className={cx('safety-title')}>
          <Text typo="t5" classNames="--gray800">
            차수벽
          </Text>
        </div>
        <div className={cx('safety-info')}>
          <Text typo="t1">O</Text>
        </div>
      </div>
      <div className={cx('safety-table')}>
        <div className={cx('safety-title')}>
          <Text typo="t5" classNames="--gray800">
            {`역류\n
           방지시설`}
          </Text>
        </div>
        <div className={cx('safety-info')}>
          <Text typo="t1">O</Text>
        </div>
      </div>
      <div className={cx('safety-table')}>
        <div className={cx('safety-title')}>
          <Text typo="t5" classNames="--gray800">
            수중펌프
          </Text>
        </div>
        <div className={cx('safety-info')}>
          <Text typo="t1">O</Text>
        </div>
      </div>
    </div>
  )
}

export default SafetyInfo
