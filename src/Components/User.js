import { useNamedState } from '../NamedStateHook'

export default function User() {
  const [userId] = useNamedState(false,'auth','user','uid')
  const [userName] = useNamedState('Guest','users',userId,'name')
  const [mailName] = useNamedState('N/A','users',userId,'mail')

  return (
    <p>
      <i>name</i>: {userName} <br/>
      <i>mail</i>: {mailName} 
      { userId && 
        <><br/> <i>userId</i>: {userId}</>
      }
    </p>
  )
}