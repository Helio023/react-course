import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <div className='logo'>
      <NavLink to='/' className='logo__link'>
        <h1>WorldWide</h1>
      </NavLink>
    </div>
  );
};

export default Logo;
