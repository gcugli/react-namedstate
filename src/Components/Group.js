import { Card } from 'antd'
import { useNamedState } from '../NamedStateHook'

let renderCnt = 0

export default function GroupCard() {
  const [userId] = useNamedState(false,'auth','user','uid')
  const [groupId, setGroupId] = useNamedState(1,'users',userId,'groupId')
  const [groupDesc] = useNamedState('Unknown','groups',groupId,'desc')

  renderCnt++;

  return (
    <Card title="Group" bordered={true} >
      {groupDesc}
      <br/><i>(debug) userId:</i> {userId} <br/><br/>
      <span class="renderCnt">render {renderCnt}</span>
    </Card>
  )
}
