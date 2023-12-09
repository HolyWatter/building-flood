import useCard from '@/hooks/useCard'
import classNames from 'classnames/bind'
import Text from '@shared/Text'
import WarningTag from '@shared/WarningTag'
import IconBuilding from '@components/svgs/IconBuilding'
import styles from './BuilidingCard.module.scss'

const cx = classNames.bind(styles)

function BuildingCard() {
  const { openCard } = useCard()
  return (
    <div className={cx('card-container')} onClick={openCard}>
      <Text typo="t1">Name</Text>
      <Text>Descriptions</Text>
      <div className={cx('card-tag-container')}>
        <WarningTag />
        <IconBuilding width={20} height={20} />
      </div>
    </div>
  )
}

export default BuildingCard
