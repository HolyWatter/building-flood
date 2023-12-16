import classNames from 'classnames/bind'
import { useCallback, useRef } from 'react'
import { searchLocationAtom } from '@/atoms/searchLocationAtom'
import { KAKAO_MAP_LEVEL } from '@/const/mapLevel'
import useBuildings from '@/hooks/useBuilings'
import useMaps from '@/hooks/useMaps'
import { Building, DongInfo } from '@/models/building'
import { useRecoilState } from 'recoil'
import styles from './KaKaoMap.module.scss'
import NoticeBar from './noticeBar'
import SideMenu from './sidemenu/SideMenu'
import warning from '@assets/images/warning.png'
import useModal from '@/hooks/useModal'
import { selectedBuildingAtom } from '@/atoms/selectedBuilding'
import DetailCard from './detailCard'

declare global {
  interface Window {
    kakao: any
  }
}

const cx = classNames.bind(styles)

function KaKaoMap() {
  const mapContainer = useRef(null)
  const { openModal } = useModal()
  const [selectedBuilding, setSelectedBuilding] =
    useRecoilState(selectedBuildingAtom)
  const [buildingQuery, setBuildinQuery] = useRecoilState(searchLocationAtom)

  const { data } = useBuildings({
    buildingQuery: {
      lat_n: buildingQuery.lat_n,
      lat_s: buildingQuery.lat_s,
      lng_n: buildingQuery.lng_n,
      lng_s: buildingQuery.lng_s,
      legalDongCode: buildingQuery.legalDongCode,
      cityDistrictCode: buildingQuery.cityDistrictCode,
    },
  })

  const buildings = data?.buildings

  const clickPin = (building: Building) => {
    setSelectedBuilding(building)
    openModal(<DetailCard />)
    setBuildinQuery((prevValues) => ({
      ...prevValues,
      center: [building.latitude, building.longitude],
    }))
  }

  useMaps({ mapContainer, center: buildingQuery.center, buildings, clickPin })

  const submitCode = useCallback(
    (code: DongInfo, title: string) => {
      const map = new window.kakao.maps.Map(mapContainer.current, {
        center: new window.kakao.maps.LatLng(...code.center),
        level: KAKAO_MAP_LEVEL,
      })

      const bounds = map.getBounds()
      const big = bounds.getNorthEast()
      const small = bounds.getSouthWest()

      setBuildinQuery({
        lat_n: small.Ma,
        lat_s: big.Ma,
        lng_n: small.La,
        lng_s: big.La,
        legalDongCode: code.legalDongCode,
        cityDistrictCode: code.cityDistrictCode,
        center: [...code.center],
        title: title,
      })
    },
    [setBuildinQuery],
  )

  return (
    <>
      <div ref={mapContainer} className={cx('map')}></div>
      <SideMenu submitCode={submitCode} buildings={buildings} />
      <NoticeBar notification={data?.notification} />
      <img src={warning} />
    </>
  )
}

export default KaKaoMap
