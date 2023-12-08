import classNames from 'classnames/bind'
import styles from './Text.module.scss'

interface Props {
  typo?: 't0' | 't1' | 't2' | 't3' | 't4' | 't5' | 't6' | 't7' | 't8'
  children: React.ReactNode
  classNames?: string
}

const cx = classNames.bind(styles)
function Text({ children, typo = 't5', classNames }: Props) {
  return <span className={`${cx(typo)} ${classNames}`}>{children}</span>
}

export default Text
