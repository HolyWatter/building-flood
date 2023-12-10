import { searchLocationAtom } from '@/atoms/searchLocationAtom'
import useModal from '@/hooks/useModal'
import { DongInfo } from '@/models/building'
import classNames from 'classnames/bind'
import { useRecoilValue } from 'recoil'
import Text from '../../shared/Text'
import LocationChange from '../locationChange'
import styles from './LocationInfo.module.scss'

const cx = classNames.bind(styles)

interface Props {
  submitCode: (code: DongInfo, title: string) => void
}

function LocationInfo({ submitCode }: Props) {
  const buildingQuery = useRecoilValue(searchLocationAtom)
  const { openModal } = useModal()

  const onSubmit = (code: DongInfo, title: string) => {
    submitCode(code, title)
  }

  return (
    <div className={cx('location-info-container')}>
      <div className={cx('location-info')}>
        <Text typo="t2" classNames="--gray800">
          위치정보
        </Text>
        <div className={cx('size-box')} />
        <Text typo="t5" classNames="--gray800">
          · 서울특별시 서초구 {buildingQuery.title}
        </Text>
      </div>
      <button
        className={cx('location-change-btn')}
        onClick={() => openModal(<LocationChange onSubmit={onSubmit} />)}
      >
        <Text typo="t7" classNames="--gray800">
          위치변경
        </Text>
      </button>
    </div>
  )
}

export default LocationInfo
