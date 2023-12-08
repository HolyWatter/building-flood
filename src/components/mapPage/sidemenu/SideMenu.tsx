import classNames from 'classnames/bind'
import CardContainer from './CardContainer'
import DetailCard from '../detailCard'
import LocationInfo from './LocationInfo'
import SearchingBar from './SearchingBar'
import styles from './SideMenu.module.scss'

const cx = classNames.bind(styles)

function SideMenu() {
  return (
    <div className={cx('side-bg')}>
      <SearchingBar />
      <LocationInfo />
      <CardContainer />
      {/* <DetailCard /> */}
    </div>
  )
}

export default SideMenu
