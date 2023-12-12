import classNames from 'classnames/bind'
import Text from '../shared/Text'
import styles from './DashBoard.module.scss'
import BuildingFlood from './graph/BuildingFlood'
import BuildingStep from './graph/BuildingStep'
import GraphContainer from './graph/GraphContainer'
import OldBuildingGraph from './graph/OldBuildingGraph'
import PreventionFacility from './graph/PreventionFacility'
import Notice from './notice'

const cx = classNames.bind(styles)

function DashBoard() {
  return (
    <div className={cx('dashboard-container')}>
      <Text typo="t0" classNames="--gray900">
        데이터 보기
      </Text>
      <div>
        <Text>현위치</Text>
        <Text>서울 특별시 서초구</Text>
      </div>
      <div className={cx('row')}>
        <BuildingStep />
        <BuildingFlood />
        <PreventionFacility />
      </div>
      <div className={cx('row')}>
        <OldBuildingGraph />
      </div>
      <Notice />
    </div>
  )
}

export default DashBoard
