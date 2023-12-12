import Text from '@/components/shared/Text'
import GraphContainer from './GraphContainer'
import styles from '../DashBoard.module.scss'
import classNames from 'classnames/bind'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

const cx = classNames.bind(styles)

ChartJS.register(ArcElement, Tooltip, Legend)

function PreventionFacility() {
  const data = {
    labels: ['설치', '미설치'],
    datasets: [
      {
        data: [11, 3490],
        backgroundColor: ['#36F', '#C7C7C7'],
        borderColor: ['#fff', '#fff'],
        padding: 10,
        borderWidth: 5,
        borderRadius: 12,
        backgroundCorlor: '#fff',
      },
    ],
  }

  return (
    <GraphContainer
      title="방지시설 설치여부"
      subTitle={
        <Text typo="t3" classNames="--gray700">
          3501개 건물
        </Text>
      }
      graph={
        <div className={cx('graph-container')}>
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

export default PreventionFacility
