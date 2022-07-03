import { Card } from 'antd'
import { useNamedState } from '../NamedStateHook'

let renderCnt = 0

export default function StaticCard() {
  const [text] = useNamedState('loading...','test','static','text')
  renderCnt++;

  return (
    <Card title="Static" bordered={true} >
      { text.split('\n').map(line=> <>{line}<br/></> ) } <br/>
      <span class="renderCnt">render {renderCnt}</span>
    </Card>
  )
}
