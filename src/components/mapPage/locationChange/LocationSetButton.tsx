import Text from '@/components/shared/Text'
import classNames from 'classnames/bind'
import { ButtonHTMLAttributes } from 'react'
import styles from './LocationSetButton.module.scss'

const cx = classNames.bind(styles)

function LocationSetButton({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cx('location-set-btn')} {...props}>
      <Text typo="t3">변경하기</Text>
    </button>
  )
}

export default LocationSetButton
