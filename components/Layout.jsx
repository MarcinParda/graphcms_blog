import React from 'react';
import Header from "/components/Header";

const Layout = ({ children }) => {
  return (
    <div className="dark">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
