import { selectedBuildingAtom } from '@/atoms/selectedBuilding'
import { KAKAO_MAP_LEVEL } from '@/const/mapLevel'
import { Building } from '@/models/building'
import caution from '@assets/images/defaultCaution.png'
import safety from '@assets/images/defaultManage.png'
import warning from '@assets/images/defaultWarning.png'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'

import selectedWarning from '@assets/images/selectedWarning.png'
import selectedCaution from '@assets/images/selectedCaution.png'
import selectedManage from '@assets/images/selectedManage.png'

interface Props {
  mapContainer: React.MutableRefObject<null | HTMLDivElement>
  center: [number, number]
  buildings?: Building[]
  clickPin: (building: Building) => void
}

function useMaps({ mapContainer, center, buildings = [], clickPin }: Props) {
  let selectedMarker: any = null
  const selectedBuilding = useRecoilValue(selectedBuildingAtom)
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

        for (let building of buildings) {
          const isSelect = building.pk === selectedBuilding?.pk
          const imgsrc = isSelect
            ? IMG_INDEX_SELECT[building.safety.status]
            : IMG_INDEX[building.safety.status]

          const marker = new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(
              building.latitude,
              building.longitude,
            ),
            image: new window.kakao.maps.MarkerImage(
              imgsrc,
              new window.kakao.maps.Size(48, 64),
              {
                offset: new window.kakao.maps.Point(24, 64),
              },
            ),
          })

          window.kakao.maps.event.addListener(marker, 'click', function () {
            clickPin(building)

            if (!selectedMarker || selectedMarker !== marker) {
              !!selectedMarker &&
                selectedMarker.setImage(
                  new window.kakao.maps.MarkerImage(
                    imgsrc,
                    new window.kakao.maps.Size(48, 64),
                    {
                      offset: new window.kakao.maps.Point(24, 64),
                    },
                  ),
                )
            }

            marker.setImage(
              new window.kakao.maps.MarkerImage(
                IMG_INDEX_SELECT[building.safety.status],
                new window.kakao.maps.Size(48, 64),
                {
                  offset: new window.kakao.maps.Point(24, 64),
                },
              ),
            )

            selectedMarker = marker
          })
        }
      })
    }
  }, [buildings, selectedBuilding])
}

export default useMaps

const IMG_INDEX = {
  침수경고: warning,
  침수주의: caution,
  침수관리: safety,
}
const IMG_INDEX_SELECT = {
  침수경고: selectedWarning,
  침수주의: selectedCaution,
  침수관리: selectedManage,
}
