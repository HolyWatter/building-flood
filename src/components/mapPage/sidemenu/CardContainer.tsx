import { Building } from '@/models/building'
import classNames from 'classnames/bind'
import BuildingCard from './BuilidingCard'
import styles from './CardContainer.module.scss'

const cx = classNames.bind(styles)

interface Props {
  buildings?: Building[]
}

function CardContainer({ buildings }: Props) {
  return (
    <div className={cx('card-list-container')}>
      {buildings?.map((building) => (
        <BuildingCard key={building.pk} building={building} />
      ))}
    </div>
  )
}

export default CardContainer
