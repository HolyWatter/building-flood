import WhiteBox from '@shared/WhiteBox'
import Text from '@shared/Text'
import NoticeTable from './NoticeTable'

function Notice() {
  return (
    <WhiteBox>
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
    </WhiteBox>
  )
}

export default Notice
