// src/App.js
import React, { useState } from 'react';
import { Button } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import LoginForm from './components/LoginForm';
import MyDrawer from './components/MyDrawer';
import MyTable from './components/Mytable.jsx';

function App() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <div className="App">
      <h1>Ant Design Example</h1>
      <LoginForm /> <br />
      <Button type="primary" onClick={showDrawer}>
        Open Drawer
      </Button> <br />
      <br />
      <MyDrawer visible={drawerVisible} onClose={closeDrawer} />
      <MyTable />
    </div>
  );
}

export default App;
