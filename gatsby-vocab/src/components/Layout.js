import React, { useState } from 'react';

import 'normalize.css';
import '../styles/index.css';
import layoutStyles from './layout.module.css';

import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <div className={layoutStyles.container}>
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        {children}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;