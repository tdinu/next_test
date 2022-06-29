import React from 'react';
import NavBar from './NavBar';

function Layout({ children }) {
  return (
    <div className='w-full h-screen'>
      <NavBar />
      {children}
    </div>
  );
}

export default Layout;
