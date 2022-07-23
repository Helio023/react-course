import { ArrowBack } from '@mui/icons-material';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Country as CountryList, City, State } from 'country-state-city';
import { useNavigate, useParams } from 'react-router-dom';
import Topbar from '../components/Topbar';

const Country = () => {
  const { isoCode } = useParams();

  const navigate = useNavigate();
  const country = CountryList.getCountryByCode(isoCode);
  const states = State.getStatesOfCountry(isoCode);
  const cities = City.getCitiesOfCountry(isoCode);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{country.name} | detalhes do país</title>
      </Helmet>
      <Topbar />
      <div className='full-country'>
        <div className='full-country__details'>
          <div className='full-country__back' onClick={() => navigate('../')}>
            <ArrowBack />
          </div>
          <div className='full-country__flag'>
            <img
              alt={country.name}
              src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country.isoCode}.svg`}
            />
          </div>
          <h3 className='full-country__name'>{country.name}</h3>

          <div className='full-country__data'>
            <div className='full-country__states'>
              <h3 className='full-country__header'>{states.length} estados</h3>
              <ul className='full-country__list'>
                {states.sort().map((state) => (
                  <li key={state.name} className='full-country__item'>
                    {state.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className='full-country__states'>
              <h3 className='full-country__header'>{cities.length} cidades</h3>
              <ul className='full-country__list'>
                {cities.sort().map((city) => (
                  <li key={city.name} className='full-country__item'>
                    {city.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Country;
