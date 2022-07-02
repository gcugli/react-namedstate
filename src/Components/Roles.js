import { Button, Collapse } from 'antd';

const roles = ['Administrator', 'Publisher', 'Editor', 'Designer', 'Viewer']

export default function Roles() {
  return (
    <ul style={{textAlign:'left'}}>
      { roles.map(rol=>(<li>{rol}</li>)) }
    </ul>
  );
}
