import styles from './DefaultInfo.module.scss'

import Text from '@/components/shared/Text'
import WarningTag from '@/components/shared/WarningTag'
import classNames from 'classnames/bind'
import IconBuilding from '@/components/svgs/IconBuilding'
import { Building } from '@/models/building'

const cx = classNames.bind(styles)

interface Props {
  name: string
  address: string
  safety: Building['safety']
}

function DefaultInfo({ name, address, safety }: Props) {
  return (
    <div className={cx('info-container')}>
      <Text typo="t1" classNames="--gray800">
        {name}
      </Text>
      <div className={cx('address-container')}>
        <IconBuilding width={20} height={20} color="#539aff" />
        <Text>{address}</Text>
      </div>
      <WarningTag safety={safety} />
    </div>
  )
}

export default DefaultInfo
