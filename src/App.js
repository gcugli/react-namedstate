import logo from './logo.svg'
import './App.css'
import { Button, Card, Col, Row, Divider } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import AuthSelect from './Components/Auth'
import UserCard from './Components/User'
import GroupCard from './Components/Group'
import RolesCard from './Components/Roles'
import StaticCard from './Components/StaticCard'


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Button icon={<GithubOutlined />}
            href="https://github.com/gcugli/react-namedstate" target="_blank">
            react-namedstate
          </Button>
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{marginBottom:'60px'}}>
          <AuthSelect/>
        </p>
        <div className="site-card-wrapper">
          <Row gutter={[16, 32]}>
            <Col span={12}>
              <UserCard/>
            </Col>
            <Col span={12}>
              <RolesCard/>
            </Col>
          </Row>
          <Divider></Divider>
          <Row gutter={[16, 32]}>
            <Col span={12}>
              <GroupCard/>
            </Col>
            <Col span={12}>
              <StaticCard/>
            </Col>
          </Row>
          <Divider></Divider>
        </div>
      </header>
    </div>
  )
}
