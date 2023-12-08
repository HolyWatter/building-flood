import classNames from 'classnames/bind'
import Text from '../../shared/Text'
import styles from './FilterButton.module.scss'

interface Props {
  children: React.ReactNode
  isSelected?: boolean
}

const cx = classNames.bind(styles)

function FilterButton({ children, isSelected = false }: Props) {
  return (
    <button className={cx('filter-button', isSelected && 'selected')}>
      <Text typo="t6" classNames="--gray800">
        {children}
      </Text>
    </button>
  )
}

export default FilterButton
