import {
  CurrencyExchangeOutlined,
  LocationOn,
  LocalPhone,
  ArrowForward,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Country = ({ country }) => {
  const navigate = useNavigate();

  const handleViewPage = () => {
    navigate(`/country/${country.isoCode}`);
  };

  return (
    <div className='country'>
      <div className='country__name'>
        <div className='country__flag'>
          <img
            alt={country.name}
            src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country.isoCode}.svg`}
          />
        </div>
        <h3>{country.name}</h3>
      </div>

      <div className='country__data'>
        <div className='country__data--item'>
          <LocalPhone /> <span>cod. telefónico: {country.phonecode}</span>
        </div>
        <div className='country__data--item'>
          <CurrencyExchangeOutlined /> <span>moeda: {country.currency}</span>
        </div>
        <div className='country__data--item'>
          <LocationOn /> <span>latitude: {country.latitude}</span>
        </div>
        <div className='country__data--item'>
          <LocationOn /> <span>longitude: {country.longitude}</span>
        </div>
      </div>

      <div className='country__btn'>
        <button onClick={handleViewPage}>
          Ver mais <ArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Country;
