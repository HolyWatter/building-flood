import { Building } from '@/models/building'
import classNames from 'classnames/bind'
import IconCaution from '../svgs/IconCaution'
import IconChecked2 from '../svgs/IconChecked2'
import IconShield from '../svgs/IconManage'
import Text from './Text'
import styles from './WarningTag.module.scss'

const cx = classNames.bind(styles)

interface Props {
  safety: Building['safety']
}

function WarningTag({ safety }: Props) {
  return (
    <div className={cx('tag-container')}>
      {safety.status === '침수경고' && <IconChecked2 width={20} height={20} />}
      {safety.status === '침수주의' && <IconCaution />}
      {safety.status === '침수관리' && <IconShield />}
      <Text typo="t4">{safety.status}</Text>
      <Text typo="t4" classNames="--gray700">
        {safety.score}
      </Text>
    </div>
  )
}

export default WarningTag
