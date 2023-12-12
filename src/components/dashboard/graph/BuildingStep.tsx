import Text from '@/components/shared/Text'
import GraphContainer from './GraphContainer'
import styles from '../DashBoard.module.scss'
import classNames from 'classnames/bind'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

const cx = classNames.bind(styles)

ChartJS.register(ArcElement, Tooltip, Legend)

function BuildingStep() {
  const data = {
    labels: ['침수경고', '침수주의', '침수관리'],
    datasets: [
      {
        data: [1040, 2263, 198],
        backgroundColor: ['#FC4B54', '#FFC33B', '#36F'],
        borderColor: ['#fff', '#fff', '#fff'],
        padding: 10,
        borderWidth: 5,
        borderRadius: 12,
        backgroundCorlor: '#fff',
      },
    ],
  }

  return (
    <GraphContainer
      title="단계별 건물분포"
      subTitle={
        <Text typo="t3" classNames="--gray700">
          3501개 건물
        </Text>
      }
      graph={
        <div className={cx('graph-container')}>
          {/* <div className={cx('reference-container')}>
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
          </div> */}
          <Doughnut
            options={{
              layout: {
                padding: {
                  top: 0,
                  bottom: 0,
                },
              },
              plugins: {
                legend: {
                  display: true,
                  position: 'left',
                },
              },
            }}
            data={data}
            height={200}
          />
        </div>
      }
    />
  )
}

export default BuildingStep
