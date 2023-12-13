import Text from '@/components/shared/Text'
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
      {buildings == null ||
        (buildings.length === 0 ? (
          <Text typo="t4">현재 반경에 검색된 건물이 없습니다.</Text>
        ) : (
          buildings.map((building) => (
            <BuildingCard key={building.pk} building={building} />
          ))
        ))}
    </div>
  )
}

export default CardContainer
