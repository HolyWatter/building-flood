import Map from '@/components/Map'
import DetailCard from '@/components/mapPage/detailCard'
import NoticeBar from '@/components/mapPage/noticeBar'
import SideMenu from '@/components/mapPage/sidemenu/SideMenu'

function MapPage() {
  return (
    <>
      <SideMenu />
      <NoticeBar />
      <Map />
      <DetailCard />
    </>
  )
}

export default MapPage
