import { Search } from '@mui/icons-material';

const Searcher = ({ placeholder, searchTerm, setSearchTerm }) => {
  return (
    <div className='searcher'>
      <div className='searcher__input'>
        <input
          onChange={setSearchTerm}
          value={searchTerm}
          type='text'
          placeholder={placeholder}
        />
        <Search className='searcher__icon' />
      </div>
    </div>
  );
};

export default Searcher;
