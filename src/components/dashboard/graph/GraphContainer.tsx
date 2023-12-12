import Text from '@/components/shared/Text'
import WhiteBox from '@/components/shared/WhiteBox'

interface Props {
  title: string
  subTitle: React.ReactNode
  graph: React.ReactNode
}

function GraphContainer({ title, subTitle, graph }: Props) {
  return (
    <WhiteBox>
      <Text typo="t1" classNames="--gray900">
        {title}
      </Text>
      <Text typo="t6">{subTitle}</Text>
      {graph}
    </WhiteBox>
  )
}

export default GraphContainer
