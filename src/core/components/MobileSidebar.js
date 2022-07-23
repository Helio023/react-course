import { NavLink } from 'react-router-dom';
import { LanguageOutlined, TravelExploreOutlined } from '@mui/icons-material';
import Logo from './Logo';

const MobileSidebar = ({ showMenu, setShowMenu }) => {
  return (
    <div
      onClick={setShowMenu}
      className={
        showMenu ? 'mobilesidebar__wrapper show' : 'mobilesidebar__wrapper'
      }
    >
      <div className={showMenu ? 'mobilesidebar show' : 'mobilesidebar'}>
        <div className='mobilesidebar__logo'>
          <Logo />
        </div>

        <div className='mobilesidebar__menu'>
          <NavLink className='mobilesidebar__link' to='/'>
            <LanguageOutlined /> Países
          </NavLink>

          <NavLink to='/states' className='mobilesidebar__link'>
            <TravelExploreOutlined />
            Estados
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
