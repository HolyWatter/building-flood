export interface BuildingQuery {
  lat_n: string
  lat_s: string
  lng_n: string
  lng_s: string
  legalDongCode: string
  cityDistrictCode: string
}

export interface DongInfo {
  center: [number, number]
  legalDongCode: string
  cityDistrictCode: string
}

export interface BuildingRes {
  buildings: Building[]
  notification: string
}

export interface Building {
  pk: string
  buildingName: string
  address: string
  year: string
  usage: string
  belowFloorNum: number
  aboveFloorNum: number
  safety: {
    status: '침수경고' | '침수관리' | '침수주의'
    score: number
  }
  floodHistoryYears: number[]
  latitude: number
  longitude: number
  inspection: { facilities: string[]; yn: string }
}
