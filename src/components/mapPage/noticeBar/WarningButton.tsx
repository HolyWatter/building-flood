import Text from '@/components/shared/Text'
import classNames from 'classnames/bind'
import { ButtonHTMLAttributes } from 'react'
import styles from './WarningButton.module.scss'

const cx = classNames.bind(styles)

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
  children: string
  isSelected?: boolean
}

function WarningButton({ isSelected = false, icon, children }: Props) {
  return (
    <button className={cx('warning-btn', isSelected && 'selected')}>
      {icon}
      <Text typo="t4" classNames={isSelected ? '--blue2' : '--gray900'}>
        {children}
      </Text>
    </button>
  )
}

export default WarningButton
