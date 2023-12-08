import classNames from 'classnames/bind'
import styles from './WhiteBox.module.scss'

const cx = classNames.bind(styles)

interface Props {
  children: React.ReactNode
}

function WhiteBox({ children }: Props) {
  return <div className={cx('white-box')}>{children}</div>
}

export default WhiteBox
