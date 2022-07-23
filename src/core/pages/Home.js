import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Content from '../components/Content';
import Countries from '../components/countries/Countries';
import MobileSidebar from '../components/MobileSidebar';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <HelmetProvider>
      <Helmet>
        <title>WorldWide | Todos países do mundo</title>
      </Helmet>
      <div className='home'>
        <Sidebar />
        <MobileSidebar
          showMenu={showMenu}
          setShowMenu={() => setShowMenu(false)}
        />
        <Content>
          <Topbar setShowMenu={() => setShowMenu(true)} />

          <Countries />
        </Content>
      </div>
    </HelmetProvider>
  );
};

export default Home;
