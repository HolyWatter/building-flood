import WhiteBox from '@shared/WhiteBox'
import Text from '@shared/Text'
import NoticeTable from './NoticeTable'
import Prepare from '@/components/shared/Prepare'
import styles from './Notice.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Notice() {
  return (
    <WhiteBox className={cx('container')}>
      <Text typo="t1">최근 점검일</Text>
      <NoticeTable>
        <NoticeTable.TableHead
          headList={['No.', '카테고리', '제목', '작성자', '작성일', '기능']}
        />
        <tbody>
          <NoticeTable.TableItem />
          <NoticeTable.TableItem />
          <NoticeTable.TableItem />
          <NoticeTable.TableItem />
          <NoticeTable.TableItem />
        </tbody>
      </NoticeTable>
      <Prepare />
    </WhiteBox>
  )
}

export default Notice
