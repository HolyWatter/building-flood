import IconCaution from '@/components/svgs/IconCaution'
import IconChecked2 from '@/components/svgs/IconChecked2'
import IconShield from '@/components/svgs/IconManage'
import classNames from 'classnames/bind'
import styles from './NoticeBar.module.scss'

import WarningButton from './WarningButton'

const cx = classNames.bind(styles)

function NoticeBar() {
  return (
    <div className={cx('notice-bar')}>
      <div className={cx('button-container')}>
        <WarningButton
          isSelected
          icon={<IconChecked2 width={20} height={20} />}
        >
          침수경고
        </WarningButton>
        <WarningButton icon={<IconCaution />}>침수경고</WarningButton>
        <WarningButton icon={<IconShield />}>침수경고</WarningButton>
      </div>
      <div className={cx('notification')}></div>
    </div>
  )
}
export default NoticeBar
