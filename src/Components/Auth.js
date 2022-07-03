import { Select } from 'antd'
import { useNamedState } from '../NamedStateHook'

const { Option } = Select

export default function Auth() {
  const [auth, setAuth] = useNamedState(false,'auth')
  const [users] = useNamedState({},'users')

  const logIn = (userId) => {
    console.log('>>>>>>>>>>>>>>> logIn ',userId)
    setAuth( (userId)? { user: { 
        uid: userId,
        provider: 'random.com' 
      }} : null )
  }

  return (
    <Select
      onChange={logIn}
      defaultValue={auth&&auth.user&&auth.user.uid} 
      style={{width: 200}} allowClear >
      { Object.keys(users).map((userId,i) =>
          <Option key={i} value={userId} >{users[userId].name}</Option>
        ) 
      }  
    </Select>
  )
}