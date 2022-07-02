import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

function App() {
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
      </header>
    </div>
  );
}

export default App;
