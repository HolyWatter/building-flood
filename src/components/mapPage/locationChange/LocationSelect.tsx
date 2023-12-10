import CheckBox from '@/components/shared/CheckBox'
import Text from '@/components/shared/Text'
import IconDown from '@/components/svgs/IconDown'
import { DONG_CODE_INDEX } from '@/const/dongCode'
import { Dong } from '@/models/dong'
import classNames from 'classnames/bind'
import { useCallback, useState } from 'react'
import styles from './LocationSelect.module.scss'

const cx = classNames.bind(styles)

interface Props {
  onSelect: (value: Dong) => void
  selectedDong: Dong
}

function LocationSelect({ onSelect, selectedDong }: Props) {
  const [isSelect, setIsSelect] = useState(false)

  const handleSelect = useCallback(() => {
    setIsSelect((prev) => !prev)
  }, [])

  return (
    <div className="">
      <button className={cx('location-select')} onClick={handleSelect}>
        <Text typo="t6" classNames="--gray700">
          {selectedDong.title}
        </Text>
        <IconDown />
      </button>
      {isSelect && (
        <div className={cx('select-list')}>
          {DONG_CODE_INDEX.map((dong) => (
            <button
              key={dong.id}
              className={cx('select')}
              onClick={() => {
                onSelect(dong)
                setIsSelect(false)
              }}
            >
              <CheckBox
                onClick={() => {}}
                checked={selectedDong.code === dong.code}
              />
              <Text typo="t5">{dong.title}</Text>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LocationSelect
