import logo from './logo.svg';
import './App.css';
import { Button, Collapse } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import User from './Components/User'
import Group from './Components/Group'
import Roles from './Components/Roles'


const { Panel } = Collapse;

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Button icon={<GithubOutlined />}
            href="https://github.com/gcugli/react-namedstate" target="_blank">
            react-namedstate
          </Button>
        </p>
        <p>
          <Collapse>
            <Panel header="User info" key="1">
              <User/>
            </Panel>
            <Panel header="Group" key="2">
              <Group/>
            </Panel>
            <Panel header="Roles" key="3">
              <Roles/>
            </Panel>
          </Collapse>
        </p>
      </header>
    </div>
  );
}
