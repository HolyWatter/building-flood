import classNames from 'classnames/bind'
import IconChecked2 from '../svgs/IconChecked2'
import Text from './Text'
import styles from './WarningTag.module.scss'

const cx = classNames.bind(styles)

function WarningTag() {
  return (
    <div className={cx('tag-container')}>
      <IconChecked2 width={20} height={20} />
      <Text typo="t4">침수경고</Text>
      <Text typo="t4" classNames="--gray700">
        7점
      </Text>
    </div>
  )
}

export default WarningTag
