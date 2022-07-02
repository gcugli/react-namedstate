import { useNamedState } from '../NamedStateHook'

export default function Group() {
  const [userId] = useNamedState(false,'auth','user','uid')
  const [groupId, setGroupId] = useNamedState(0,'users',userId,'groupId')
  const [groupDesc] = useNamedState('Unknown','groups',groupId,'desc')

  return (
    <p>
      <i>name</i>: {groupDesc} <br/>
    </p>
  )
}
