import { useNamedState } from '../NamedStateHook'


export default function Roles() {
  const [userId] = useNamedState(false,'auth','user','uid')
  const [groupId] = useNamedState(0,'users',userId,'groupId')
  const [roles] = useNamedState({NoRoles:[0]},'roles')

console.log(roles) 

  return (
    <ul style={{textAlign:'left'}}>
      { Object.keys(roles).map(
          (rol,i) => 
          <li key={i} >{(groupId in roles[rol])? <i>{rol}</i> : <del>{rol}</del>}</li> )
      }
    </ul>
  )
}
