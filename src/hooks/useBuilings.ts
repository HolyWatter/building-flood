import mapApi from '@/apis/mapApi'
import { BuildingQuery } from '@/models/building'
import { useQuery } from 'react-query'

interface Props {
  buildingQuery: BuildingQuery
}

function useBuildings({ buildingQuery }: Props) {
  return useQuery(['buildings', JSON.stringify(buildingQuery)], () =>
    mapApi.getBuildings(buildingQuery),
  )
}

export default useBuildings
