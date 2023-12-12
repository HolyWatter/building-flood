import classNames from 'classnames/bind'
import Text from '@shared/Text'
import WarningTag from '@shared/WarningTag'
import IconBuilding from '@components/svgs/IconBuilding'
import styles from './BuilidingCard.module.scss'
import DetailCard from '../detailCard'
import useModal from '@/hooks/useModal'
import { Building } from '@/models/building'
import { useSetRecoilState } from 'recoil'
import { selectedBuildingAtom } from '@/atoms/selectedBuilding'

const cx = classNames.bind(styles)

interface Props {
  building: Building
}

function BuildingCard({ building }: Props) {
  const setSelectedBuilding = useSetRecoilState(selectedBuildingAtom)
  const { openModal } = useModal()

  const { buildingName, address, safety } = building

  const handleOpenDetailCard = () => {
    openModal(<DetailCard />)
    setSelectedBuilding(building)
  }
  return (
    <div className={cx('card-container')} onClick={handleOpenDetailCard}>
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
