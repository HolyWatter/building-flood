import { selectedBuildingAtom } from '@/atoms/selectedBuilding'
import IconClose from '@/components/svgs/IconClose'
import useModal from '@/hooks/useModal'
import { Building } from '@/models/building'
import classNames from 'classnames/bind'
import { useRecoilState, useRecoilValue } from 'recoil'
import DefaultInfo from './DefaultInfo'
import styles from './DetailCard.module.scss'
import DetailInfo from './DetailInfo'

const cx = classNames.bind(styles)

function DetailCard() {
  const [building, setSelectedBuilding] = useRecoilState(selectedBuildingAtom)

  const {
    buildingName,
    address,
    safety,
    year,
    usage,
    floodHistoryYears,
    inspection,
  } = building as Building
  const { closeModal } = useModal()

  const handleCloseCard = () => {
    closeModal()
    setSelectedBuilding(null)
  }
  return (
    <div className={cx('mobile-dimmed')}>
      <div className={cx('card-container')}>
        <button className={cx('close-btn')} onClick={handleCloseCard}>
          <IconClose />
        </button>
        <DefaultInfo name={buildingName} address={address} safety={safety} />
        <DetailInfo
          year={year}
          usage={usage}
          floodHistoryYears={floodHistoryYears}
          inspection={inspection}
        />
      </div>
    </div>
  )
}

export default DetailCard
