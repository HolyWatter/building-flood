import Text from '@/components/shared/Text'
import classNames from 'classnames/bind'
import styles from './NoticeTable.module.scss'

const cx = classNames.bind(styles)

interface Props {
  children: React.ReactNode
}

function NoticeTable({ children }: Props) {
  return <table className={cx('notice-table')}>{children}</table>
}

interface HeadProps {
  headList: string[]
}

function TableHead({ headList }: HeadProps) {
  return (
    <thead>
      <tr>
        {headList.map((head) => (
          <th key={head}>
            <Text typo="t2" classNames="--gray800">
              {head}
            </Text>
          </th>
        ))}
      </tr>
    </thead>
  )
}

function TableItem() {
  return (
    <tr>
      <td>
        <Text classNames="--gray800" typo="t6">
          Text
        </Text>
      </td>
      <td>
        <Text classNames="--gray800" typo="t6">
          Text
        </Text>
      </td>
      <td>
        <Text classNames="--gray800" typo="t6">
          Text
        </Text>
      </td>
      <td>
        <Text classNames="--gray800" typo="t6">
          Text
        </Text>
      </td>
      <td>
        <Text classNames="--gray800" typo="t6">
          Text
        </Text>
      </td>
      <td>
        <Text classNames="--gray800" typo="t6">
          Text
        </Text>
      </td>
    </tr>
  )
}

NoticeTable.TableHead = TableHead
NoticeTable.TableItem = TableItem

export default NoticeTable
