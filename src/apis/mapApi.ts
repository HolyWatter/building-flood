import { BuildingQuery, BuildingRes } from '@/models/building'
import api from './axios'

const mapApi = {
  getBuildings: async (queryValues: BuildingQuery) => {
    const res = await api.post(
      '/map/view',
      {},
      {
        params: queryValues,
      },
    )
    return res.data.data as BuildingRes
  },
}

export default mapApi
