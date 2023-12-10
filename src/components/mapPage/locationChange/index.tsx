import { searchLocationAtom } from '@/atoms/searchLocationAtom'
import Text from '@/components/shared/Text'
import WhiteBox from '@/components/shared/WhiteBox'
import IconClose from '@/components/svgs/IconClose'
import useModal from '@/hooks/useModal'
import { DongInfo } from '@/models/building'
import { Dong } from '@/models/dong'
import classNames from 'classnames/bind'
import { useCallback, useState } from 'react'
import { useRecoilValue } from 'recoil'
import styles from './LocationChange.module.scss'
import LocationSelect from './LocationSelect'
import LocationSetButton from './LocationSetButton'

const cx = classNames.bind(styles)

interface Props {
  onSubmit: (dong: DongInfo, title: string) => void
}

function LocationChange({ onSubmit }: Props) {
  const buildingQuery = useRecoilValue(searchLocationAtom)
  const [selectedDong, setSelectedDong] = useState<Dong>({
    id: 0,
    title: buildingQuery.title,
    code: Number(buildingQuery.legalDongCode),
    center: buildingQuery.center,
  })
  const { closeModal } = useModal()

  const onSelect = useCallback(
    (value: Dong) => {
      setSelectedDong(value)
    },
    [setSelectedDong],
  )

  return (
    <div className={cx('dimmed-mobile')}>
      <div className={cx('location-change-container')}>
        <WhiteBox>
          <div className={cx('location-change-header')}>
            <Text typo="t3">위치정보 수정</Text>
            <button onClick={closeModal}>
              <IconClose />
            </button>
          </div>
          <div className={cx('select-container')}>
            <Text typo="t7" classNames="--gray800">
              동읍면
            </Text>
            <LocationSelect onSelect={onSelect} selectedDong={selectedDong} />
          </div>
          <LocationSetButton
            onClick={() => {
              onSubmit(
                {
                  legalDongCode: selectedDong.code.toString(),
                  cityDistrictCode: '11650',
                  center: selectedDong.center,
                },
                selectedDong.title,
              )
              closeModal()
            }}
          />
        </WhiteBox>
      </div>
    </div>
  )
}

export default LocationChange
