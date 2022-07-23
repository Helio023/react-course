import { Country as CountryList } from 'country-state-city';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination';
import Searcher from '../Searcher';
import Country from './Country';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [firstItem, setFirstItem] = useState(0);
  const [lastItem, setLastItem] = useState(6);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsCounter = 6;

  useEffect(() => {
    setCountries(CountryList.getAllCountries());
  }, [firstItem, lastItem]);

  const handleNextPage = () => {
    if (lastItem < countries.length - 1) {
      setFirstItem((val) => val + itemsCounter);
      setLastItem((val) => val + itemsCounter);
    }
  };

  const handlePreviousPage = () => {
    if (firstItem > 0) {
      setFirstItem((val) => val - itemsCounter);
      setLastItem((val) => val - itemsCounter);
    }
  };

  return (
    <div className='countries'>
      <div className='countries__search'>
        <Searcher
          searchTerm={searchTerm}
          setSearchTerm={(e) => setSearchTerm(e.target.value)}
          placeholder='Escreve o nome de um país'
        />
      </div>

      <div className='countries__list'>
        {searchTerm
          ? countries
              .filter((country) =>
                country.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .sort()
              .map((country) => (
                <Country key={country.name} country={country} />
              ))
          : countries
              .sort()
              .slice(firstItem, lastItem)
              .map((country) => (
                <Country key={country.name} country={country} />
              ))}
      </div>

      <div className='countries__pagination'>
        {!searchTerm && (
          <Pagination
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            countries={countries}
            firstItem={firstItem}
            lastItem={lastItem}
          />
        )}
      </div>
    </div>
  );
};

export default Countries;
