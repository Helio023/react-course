import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import { LanguageOutlined, TravelExploreOutlined } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__logo'>
        <Logo />
      </div>

      <div className='sidebar__menu'>
        <NavLink className='sidebar__link' to='/'>
          <LanguageOutlined /> Países
        </NavLink>

        <NavLink to='/states' className='sidebar__link'>
          <TravelExploreOutlined />
          Estados
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
