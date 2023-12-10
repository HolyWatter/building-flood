import { Building, DongInfo } from '@/models/building'
import classNames from 'classnames/bind'
import CardContainer from './CardContainer'
import LocationInfo from './LocationInfo'
import SearchingBar from './SearchingBar'
import styles from './SideMenu.module.scss'

const cx = classNames.bind(styles)

interface Props {
  submitCode: (code: DongInfo, title: string) => void
  buildings?: Building[]
}

function SideMenu({ submitCode, buildings }: Props) {
  return (
    <div className={cx('side-bg')}>
      <SearchingBar />
      <LocationInfo submitCode={submitCode} />
      <CardContainer buildings={buildings} />
    </div>
  )
}

export default SideMenu
