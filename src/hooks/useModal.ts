import { cardDetailAtom } from '@/atoms/cardDetailAtom'
import { useCallback } from 'react'
import { useSetRecoilState } from 'recoil'

function useModal() {
  const setCardDetail = useSetRecoilState(cardDetailAtom)

  const openModal = useCallback(
    (component: React.ReactNode) => {
      setCardDetail({
        isOpen: true,
        component: component,
      })
    },
    [setCardDetail],
  )

  const closeModal = useCallback(() => {
    setCardDetail({
      isOpen: false,
      component: null,
    })
  }, [setCardDetail])

  return { openModal, closeModal }
}

export default useModal
