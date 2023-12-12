import { KAKAO_MAP_LEVEL } from '@/const/mapLevel'
import { Building } from '@/models/building'
import { useEffect } from 'react'
import warning from '@assets/images/warning.png'
import caution from '@assets/images/caution.png'
import safety from '@assets/images/safety.png'

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

        for (let building of buildings2) {
          const imgsrc =
            IMG_INDEX[building.safety.status as keyof typeof IMG_INDEX]
          const content = `<div class='pin-container select'>
          <div class='icon-container'>
            <img src=${imgsrc} />
          </div>
          <div class='pin-text-container'>
            <p class='building-name'>${building.buildingName}</p>
            <p class='score-text'>침수 위험점수 ${building.safety.score}점</p>
          </div>
          <svg
          class="pin-bottom"
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="11"
          viewBox="0 0 13 11"
          fill="none"
        >
          <path
            d="M7.36603 10.5C6.98112 11.1667 6.01888 11.1667 5.63397 10.5L0.437822 1.5C0.0529223 0.833333 0.534048 6.86406e-07 1.30385 7.53704e-07L11.6962 1.66223e-06C12.466 1.72953e-06 12.9471 0.833335 12.5622 1.5L7.36603 10.5Z"
            fill="white"
          />
        </svg>
        </div>`

          const a = new window.kakao.maps.CustomOverlay({
            map: map,
            position: new window.kakao.maps.LatLng(
              building.latitude,
              building.longitude,
            ),
            content: content,
            xAnchor: 0.3,
            yAnchor: 0.91,
          })
        }
      })
    }
  }, [buildings, center, mapContainer])

  console.log(1)
}

export default useMaps

const IMG_INDEX = {
  침수경고: warning,
  침수주의: caution,
  침수관리: safety,
}

const buildings2 = [
  {
    safety: {
      status: '침수경고',
      score: '5',
    },
    latitude: '37.498064',
    longitude: '127.030716',
    buildingName: '빌딩이름1',
  },
  {
    latitude: '37.499103',
    longitude: '127.029956',
    buildingName: '빌딩이름2',
    safety: {
      status: '침수주의',
      score: '5',
    },
  },
  {
    latitude: '37.498159',
    longitude: '127.025966',
    buildingName: '빌딩이름3',
    safety: {
      status: '침수관리',
      score: '5',
    },
  },
  {
    latitude: '37.496342',
    longitude: '127.025926',
    buildingName: '빌딩이름4',
    safety: {
      status: '침수경고',
      score: '5',
    },
  },
  {
    latitude: '37.496953',
    longitude: '127.025866',
    buildingName: '빌딩이름5',
    safety: {
      status: '침수경고',
      score: '5',
    },
  },
]
