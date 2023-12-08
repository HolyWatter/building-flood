import classNames from 'classnames/bind'
import BuildingCard from './BuilidingCard'
import styles from './CardContainer.module.scss'

const cx = classNames.bind(styles)

function CardContainer() {
  return (
    <div className={cx('card-list-container')}>
      <BuildingCard />
      <BuildingCard />
      <BuildingCard />
      <BuildingCard />
      <BuildingCard />
      <BuildingCard />
    </div>
  )
}

export default CardContainer
