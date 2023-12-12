import { Building } from '@/models/building'
import { atom } from 'recoil'

export const selectedBuildingAtom = atom<Building | null>({
  key: 'selectedBuilding',
  default: null,
})
