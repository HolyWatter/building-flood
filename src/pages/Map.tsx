import { cardDetailAtom } from '@/atoms/cardDetailAtom'
import Map from '@/components/Map'
import DetailCard from '@/components/mapPage/detailCard'
import NoticeBar from '@/components/mapPage/noticeBar'
import SideMenu from '@/components/mapPage/sidemenu/SideMenu'
import { useRecoilValue } from 'recoil'

function MapPage() {
  const { isOpen } = useRecoilValue(cardDetailAtom)
  return (
    <>
      <SideMenu />
      <NoticeBar />
      <Map />
      {isOpen && <DetailCard />}
    </>
  )
}

export default MapPage
