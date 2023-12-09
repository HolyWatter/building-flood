import { cardDetailAtom } from '@/atoms/cardDetailAtom'
import { useCallback } from 'react'
import { useSetRecoilState } from 'recoil'

function useCard() {
  const setCardDetail = useSetRecoilState(cardDetailAtom)

  const openCard = useCallback(() => {
    setCardDetail({
      isOpen: true,
      buildingInfo: {},
    })
  }, [])

  const closeCard = useCallback(() => {
    setCardDetail({
      isOpen: false,
      buildingInfo: {},
    })
  }, [])

  return { openCard, closeCard }
}

export default useCard
