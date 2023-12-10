import IconClose from '@/components/svgs/IconClose'
import useModal from '@/hooks/useModal'
import { Building } from '@/models/building'
import classNames from 'classnames/bind'
import DefaultInfo from './DefaultInfo'
import styles from './DetailCard.module.scss'
import DetailInfo from './DetailInfo'

const cx = classNames.bind(styles)

interface Props {
  building: Building
}

function DetailCard({ building }: Props) {
  const {
    buildingName,
    address,
    safety,
    year,
    usage,
    floodHistoryYears,
    inspection,
  } = building
  const { closeModal } = useModal()
  return (
    <div className={cx('card-container')}>
      <button className={cx('close-btn')} onClick={closeModal}>
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
  )
}

export default DetailCard
