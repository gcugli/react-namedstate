import { useNamedState } from '../NamedStateHook'

export default function Roles() {
  const [userId] = useNamedState(false,'auth','user','uid')
  const [groupId] = useNamedState(1,'users',userId,'groupId')
  const [roles] = useNamedState({NoRoles:[0]},'roles')

  return (
    <ul style={{textAlign:'left'}}>
      { Object.keys(roles).map(
          (rol,i) => 
          <li key={i} >{roles[rol].includes(groupId)? (<i>{rol}</i>):(<del>{rol}</del>)}</li> )
      }
    </ul>
  )
}
