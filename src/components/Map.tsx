import { useEffect, useRef } from 'react'
import classNames from 'classnames/bind'

import styles from './Map.module.scss'

declare global {
  interface Window {
    kakao: any
  }
}

const cx = classNames.bind(styles)

function Map() {
  const mapContainer = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&autoload=false&libraries=drawing`
    script.async = true

    document.head.appendChild(script)

    script.onload = () => {
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(
          37.496486063,
          127.028361548,
        )
        const firstOptions = {
          center: position,
          level: 3,
        }

        const imgSrc = '/images/marker.png'
        const imgSize = new window.kakao.maps.Size(100, 80)
        const imageOption = { offset: new window.kakao.maps.Point(0, 0) }

        // 마커 이미지 생성 부분
        const markerImage = new window.kakao.maps.MarkerImage(
          imgSrc,
          imgSize,
          imageOption,
        )
        // const marker = new window.kakao.maps.Marker({
        //   position,
        //   image: markerImage,
        // })

        const map = new window.kakao.maps.Map(
          mapContainer.current,
          firstOptions,
        )

        MARKER_LIST.forEach((el) => {
          new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(el.lat, el.lng),
            title: el.id,
            image: markerImage,
          })
        })

        // marker.setMap(map)
      })
    }
  }, [])
  return <div ref={mapContainer} className={cx('map')}></div>
}

export default Map

const MARKER_LIST = [
  {
    id: 0,
    lat: 37.497807,
    lng: 127.024501,
  },
  {
    id: 1,
    lat: 37.498692,
    lng: 127.02394,
  },
  {
    id: 2,
    lat: 37.496902,
    lng: 127.020322,
  },
  {
    id: 3,
    lat: 37.501612,
    lng: 127.036347,
  },
  {
    id: 4,
    lat: 37.496486063,
    lng: 127.028361548,
  },
]
