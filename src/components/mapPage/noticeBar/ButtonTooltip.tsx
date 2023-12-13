import Text from '@/components/shared/Text'
import classNames from 'classnames/bind'
import styles from './ButtonTooltip.module.scss'

const cx = classNames.bind(styles)

function ButtonTooltip() {
  return (
    <div className={cx('tooltip-container')}>
      <Text typo="t7">
        건물의 노후도, 지하층 여부, 과거 침수 여부 등에 따라 점수가 산정되어
        단계가 정해집니다.
        <br />
        <br /> 침수 관리: 0~3점
        <br /> 침수 주의: 4~6점
        <br /> 침수 경고: 7~10점
      </Text>
    </div>
  )
}

export default ButtonTooltip
