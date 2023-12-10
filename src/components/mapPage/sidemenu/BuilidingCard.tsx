import classNames from 'classnames/bind'
import Text from '@shared/Text'
import WarningTag from '@shared/WarningTag'
import IconBuilding from '@components/svgs/IconBuilding'
import styles from './BuilidingCard.module.scss'
import DetailCard from '../detailCard'
import useModal from '@/hooks/useModal'
import { Building } from '@/models/building'

const cx = classNames.bind(styles)

interface Props {
  building: Building
}

function BuildingCard({ building }: Props) {
  const { openModal } = useModal()

  const { buildingName, address, safety } = building
  return (
    <div
      className={cx('card-container')}
      onClick={() => openModal(<DetailCard building={building} />)}
    >
      <Text typo="t1">{buildingName}</Text>
      <Text>{address}</Text>
      <div className={cx('card-tag-container')}>
        <WarningTag safety={safety} />
        <IconBuilding width={20} height={20} />
      </div>
    </div>
  )
}

export default BuildingCard
