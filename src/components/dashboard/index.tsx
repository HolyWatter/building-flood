import classNames from 'classnames/bind'
import Text from '../shared/Text'
import styles from './DashBoard.module.scss'
import OldBuildingGraph from './graph/OldBuildingGraph'
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
        <Text>서울 특별시 서초구 서초동</Text>
      </div>
      {/* <div className={cx('row')}>
        <GraphContainer
          title="단계별 건물분포"
          subTitle={
            <Text typo="t3" classNames="--gray700">
              N개건물
            </Text>
          }
          graph={
            <div className={cx('graph-container')}>
              <div className={cx('reference-container')}>
                <div>
                  <Text>62%</Text>
                  <Text>침수관리</Text>
                </div>
                <div>
                  <Text>23%</Text>
                  <Text>침수관리</Text>
                </div>
                <div>
                  <Text>13%</Text>
                  <Text>침수관리</Text>
                </div>
              </div>
              <img src={imgGraph} />
            </div>
          }
        />
        <GraphContainer
          title="단계별 건물분포"
          subTitle={
            <Text typo="t3" classNames="--gray700">
              N개건물
            </Text>
          }
          graph={<></>}
        />
        <GraphContainer
          title="단계별 건물분포"
          subTitle={
            <Text typo="t3" classNames="--gray700">
              N개건물
            </Text>
          }
          graph={<></>}
        />
      </div> */}
      <div className={cx('row')}>
        <OldBuildingGraph />
      </div>
      <Notice />
    </div>
  )
}

export default DashBoard
