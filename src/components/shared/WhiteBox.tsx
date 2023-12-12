import classNames from 'classnames/bind'
import styles from './WhiteBox.module.scss'

const cx = classNames.bind(styles)

interface Props {
  children: React.ReactNode
  className?: string
}

function WhiteBox({ children, className }: Props) {
  return <div className={`${cx('white-box')} ${className}`}>{children}</div>
}

export default WhiteBox
