import React from 'react';
import { Drawer, Button } from 'antd';

const MyDrawer = ({ visible, onClose }) => {
  return (
    <Drawer className='bg-red-200' title="My Drawer" placement="right" onClose={onClose} visible={visible}>
      <h1>assalomu aleykum ozbektilini tanlash uchun 1 bosin </h1>
          <input style={{lineHeight:"2",borderRadius:"6px"}} type="text" placeholder='enter your idea and anlarge it!' />
          <br />
          <br />
      <input style={{lineHeight:"2",borderRadius:"6px"}} type="text" placeholder='so...' />
    </Drawer>
  );
};

export default MyDrawer;
