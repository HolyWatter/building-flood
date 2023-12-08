import classNames from 'classnames/bind'
import DefaultInfo from './DefaultInfo'
import styles from './DetailCard.module.scss'
import DetailInfo from './DetailInfo'
import SafetyInfo from './SafetyInfo'

const cx = classNames.bind(styles)

function DetailCard() {
  return (
    <div className={cx('card-container')}>
      <DefaultInfo />
      <DetailInfo />
      <SafetyInfo />
    </div>
  )
}

export default DetailCard
