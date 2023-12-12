import { atom } from 'recoil'

export const filterValueAtom = atom<
  '침수경고' | '침수주의' | '침수관리' | null
>({
  key: 'filterValue',
  default: null,
})
