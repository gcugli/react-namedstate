import { Card } from 'antd'
import { useNamedState } from '../NamedStateHook'

let renderCnt = 0

export default function UserCard() {
  const [userId] = useNamedState(false,'auth','user','uid')
  const [userName] = useNamedState('Guest','users',userId,'name')
  const [mailName] = useNamedState('N/A','users',userId,'mail')

  renderCnt++;

  return (
    <Card title="User" bordered={true} >
      <b>{userName}</b><br/><i>{mailName}</i> 
      { userId && 
        <><br/> <i>@{userId}</i></>
      }
      <br/><br/>
      <span class="renderCnt">render {renderCnt}</span>
    </Card>
  )
}
