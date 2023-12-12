import mapApi from '@/apis/mapApi'
import { filterValueAtom } from '@/atoms/filterValueAtom'
import { BuildingQuery, BuildingRes } from '@/models/building'
import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'

interface Props {
  buildingQuery: BuildingQuery
}

function useBuildings({ buildingQuery }: Props) {
  const filterValue = useRecoilValue(filterValueAtom)
  const { data } = useQuery(['buildings', JSON.stringify(buildingQuery)], () =>
    mapApi.getBuildings(buildingQuery),
  )

  const buildings = data?.buildings
  const notification = data?.notification

  return {
    data: {
      notification: notification ? notification : '',
      buildings: filterValue
        ? buildings?.filter(
            (building) => building.safety.status === filterValue,
          )
        : buildings,
    },
  }
}

export default useBuildings
