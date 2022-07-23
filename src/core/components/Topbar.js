import {
  GitHub,
  Menu,
  YouTube,
  FacebookRounded,
  Instagram,
} from '@mui/icons-material';

const Topbar = ({ setShowMenu }) => {
  return (
    <div className='topbar'>
      <div className='topbar__hamburguer' onClick={setShowMenu}>
        <Menu />
      </div>
      <ul className='topbar__menu'>
        <li className='topbar__item'>
          <a
            href='https://github.com/helio023/'
            rel='noreferrer'
            target='_blank'
            className='topbar__link'
          >
            <GitHub />
          </a>
        </li>
        <li className='topbar__item'>
          <a
            href='https://www.youtube.com/c/CssDescomplicado'
            rel='noreferrer'
            target='_blank'
            className='topbar__link'
          >
            <YouTube />
          </a>
        </li>
        <li className='topbar__item'>
          <a
            href='https://www.facebook.com/cssdescomplicado'
            rel='noreferrer'
            target='_blank'
            className='topbar__link'
          >
            <FacebookRounded />
          </a>
        </li>
        <li className='topbar__item'>
          <a
            href='https://www.instagram.com/cssdescomplicado/'
            rel='noreferrer'
            target='_blank'
            className='topbar__link'
          >
            <Instagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Topbar;
