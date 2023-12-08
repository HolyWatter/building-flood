import styles from './DefaultInfo.module.scss'

import Text from '@/components/shared/Text'
import WarningTag from '@/components/shared/WarningTag'
import classNames from 'classnames/bind'
import IconBuilding from '@/components/svgs/IconBuilding'

const cx = classNames.bind(styles)

function DefaultInfo() {
  return (
    <div className={cx('info-container')}>
      <Text typo="t1" classNames="--gray800">
        서초동 오피스텔
      </Text>
      <div className={cx('address-container')}>
        <IconBuilding width={20} height={20} color="#539aff" />
        <Text>서울특별시 서초구 서초동 1316-29</Text>
      </div>
      <WarningTag />
    </div>
  )
}

export default DefaultInfo
