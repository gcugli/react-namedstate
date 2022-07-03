import { Card } from 'antd'
import { useNamedState } from '../NamedStateHook'

let renderCnt = 0

export default function RolesCard() {
  const [userId] = useNamedState(false,'auth','user','uid')
  const [groupId] = useNamedState(1,'users',userId,'groupId')
  const [roles] = useNamedState({NoRoles:[0]},'roles')

  renderCnt++;

  return (
    <Card title="Roles" bordered={true} >
      <ul style={{textAlign:'left'}}>
        { Object.keys(roles).map(
            (rol,i) => 
            <li key={i} >{roles[rol].includes(groupId)? (<i>{rol}</i>):(<del>{rol}</del>)}</li> )
        }
      </ul>
      <span class="renderCnt">render {renderCnt}</span>
    </Card>
  )
}
