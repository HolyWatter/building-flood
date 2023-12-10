import { BuildingQuery } from '@/models/building'
import { Dong } from '@/models/dong'
import { atom } from 'recoil'

export const searchLocationAtom = atom<
  BuildingQuery & Pick<Dong, 'title' | 'center'>
>({
  key: 'searchLocation',
  default: {
    lat_n: '37.4919510730281',
    lat_s: '37.501011622160945',
    lng_n: '127.02076102610744',
    lng_s: '127.035725492765',
    legalDongCode: '10800',
    cityDistrictCode: '11650',
    title: '서초동',
    center: [37.496486063, 127.028361548],
  },
})
