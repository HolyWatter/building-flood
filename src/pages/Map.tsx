import { cardDetailAtom } from '@/atoms/cardDetailAtom'
import KaKaoMap from '@/components/mapPage/KaKaoMap'
import { useRecoilValue } from 'recoil'

function MapPage() {
  const { isOpen, component } = useRecoilValue(cardDetailAtom)
  console.log(1)
  return (
    <>
      <KaKaoMap />
      {isOpen && component}
    </>
  )
}

export default MapPage
