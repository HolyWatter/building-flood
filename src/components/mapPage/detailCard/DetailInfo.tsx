import Text from '@/components/shared/Text'
import { Building } from '@/models/building'
import classNames from 'classnames/bind'
import styles from './DetailInfo.module.scss'

const cx = classNames.bind(styles)

interface Props {
  usage: string
  year: string
  floodHistoryYears: number[]
  inspection: Building['inspection']
}

function DetailInfo({ usage, year, floodHistoryYears, inspection }: Props) {
  return (
    <div className={cx('detail-container')}>
      <div className={cx('detail-row')}>
        <div className={cx('detail-title')}>
          <Text typo="t4">노후년도</Text>
        </div>
        <div className={cx('detail-info')}>
          <Text typo="t6">{year}</Text>
        </div>
      </div>
      <div className={cx('detail-row')}>
        <div className={cx('detail-title')}>
          <Text typo="t4">주용도</Text>
        </div>
        <div className={cx('detail-info')}>
          <Text typo="t6">{usage}</Text>
        </div>
      </div>
      <div className={cx('detail-row')}>
        <div className={cx('detail-title')}>
          <Text typo="t4">침수년도</Text>
        </div>
        <div className={cx('detail-info-flood')}>
          {floodHistoryYears.length === 0 ? (
            <Text typo="t1" classNames="--point1">
              X
            </Text>
          ) : (
            floodHistoryYears.map((year) => (
              <Text key={year} typo="t6">
                {year}
              </Text>
            ))
          )}
        </div>
      </div>
      <div className={cx('detail-row')}>
        <div className={cx('detail-title')}>
          <Text typo="t4">방지시설</Text>
        </div>
        <div className={cx('detail-info-flood')}>
          {inspection.yn === 'n' && (
            <Text typo="t1" classNames="--point1">
              X
            </Text>
          )}
          {inspection.facilities.map((facility) => (
            <Text key={facility} typo="t6">
              {facility}
            </Text>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DetailInfo
