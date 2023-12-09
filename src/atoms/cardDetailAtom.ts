import { atom } from 'recoil'

export const cardDetailAtom = atom({
  key: 'cardDetail',
  default: {
    isOpen: false,
    buildingInfo: {},
  },
})
