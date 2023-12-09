import IconClose from '@/components/svgs/IconClose'
import useCard from '@/hooks/useCard'
import classNames from 'classnames/bind'
import DefaultInfo from './DefaultInfo'
import styles from './DetailCard.module.scss'
import DetailInfo from './DetailInfo'
import SafetyInfo from './SafetyInfo'

const cx = classNames.bind(styles)

function DetailCard() {
  const { closeCard } = useCard()
  return (
    <div className={cx('card-container')}>
      <button className={cx('close-btn')} onClick={closeCard}>
        <IconClose />
      </button>
      <DefaultInfo />
      <DetailInfo />
      <SafetyInfo />
    </div>
  )
}

export default DetailCard
