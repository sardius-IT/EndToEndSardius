// src/components/layout/Layout.jsx
import React from 'react';
import Navbar from '../layout/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="pt-16 px-4">{children}</main>
    </>
  );
};

export default Layout;
