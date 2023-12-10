import { atom } from 'recoil'

export const cardDetailAtom = atom<{
  isOpen: boolean
  component: React.ReactNode
}>({
  key: 'cardDetail',
  default: {
    isOpen: false,
    component: null,
  },
})
