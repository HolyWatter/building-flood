import Text from './Text'
import styles from './Prepare.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Prepare() {
  return (
    <div className={cx('prepard-container')}>
      <Text typo="t2" classNames="--white">
        준비 중입니다.
      </Text>
    </div>
  )
}

export default Prepare
