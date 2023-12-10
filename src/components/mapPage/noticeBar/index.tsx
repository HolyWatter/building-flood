import Text from '@/components/shared/Text'
import IconCaution from '@/components/svgs/IconCaution'
import IconChecked2 from '@/components/svgs/IconChecked2'
import IconShield from '@/components/svgs/IconManage'
import IconNotification from '@/components/svgs/IconNotification'
import classNames from 'classnames/bind'
import styles from './NoticeBar.module.scss'

import WarningButton from './WarningButton'

const cx = classNames.bind(styles)

interface Props {
  notification?: string
}

function NoticeBar({ notification }: Props) {
  return (
    <div className={cx('notice-bar')}>
      <div className={cx('button-container')}>
        <WarningButton
          isSelected
          icon={<IconChecked2 width={20} height={20} />}
        >
          침수경고
        </WarningButton>
        <WarningButton icon={<IconCaution />}>침수주의</WarningButton>
        <WarningButton icon={<IconShield />}>침수관리</WarningButton>
      </div>
      <div className={cx('notification')}>
        <IconNotification />
        <Text typo="t4" classNames="--white">
          {notification}
        </Text>
      </div>
    </div>
  )
}
export default NoticeBar
