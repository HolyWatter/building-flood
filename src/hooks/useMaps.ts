import { KAKAO_MAP_LEVEL } from '@/const/mapLevel'
import { Building } from '@/models/building'
import markerPin from '@assets/images/marker.svg'
import { useEffect } from 'react'

interface Props {
  mapContainer: React.MutableRefObject<null | HTMLDivElement>
  center: [number, number]
  buildings?: Building[]
}

function useMaps({ mapContainer, center, buildings = [] }: Props) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&autoload=false`
    script.async = true

    document.head.appendChild(script)

    script.onload = () => {
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(...center)
        const firstOptions = {
          center: position,
          level: KAKAO_MAP_LEVEL,
        }

        const map = new window.kakao.maps.Map(
          mapContainer.current,
          firstOptions,
        )

        const imageSize = new window.kakao.maps.Size(24, 35)

        const markerImg = new window.kakao.maps.MarkerImage(
          markerPin,
          imageSize,
        )

        for (let building of buildings) {
          new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(
              building.latitude,
              building.longitude,
            ),
            title: building.buildingName,
            image: markerImg,
          })
        }
      })
    }
  }, [buildings, center, mapContainer])
}

export default useMaps
