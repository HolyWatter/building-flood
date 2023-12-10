import GraphContainer from './GraphContainer'
import { Bar } from 'react-chartjs-2'
import { DISTRIBUTION_OLD_BUILDINS } from '@/const/chart'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

function OldBuildingGraph() {
  const data = {
    labels: DISTRIBUTION_OLD_BUILDINS.map((el) => el.title),
    datasets: [
      {
        label: '',
        data: DISTRIBUTION_OLD_BUILDINS.map((el) => el.count),
        backgroundColor: DISTRIBUTION_OLD_BUILDINS.map((el) => el.bgColor),
        borderRadius: 12,
      },
    ],
  }
  return (
    <GraphContainer
      title="노후도별 건물 분포"
      subTitle="2023년도 기준"
      graph={
        <Bar
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
          data={data}
          height="65px"
        />
      }
    ></GraphContainer>
  )
}

export default OldBuildingGraph
