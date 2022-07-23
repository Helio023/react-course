import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const Pagination = ({
  firstItem,
  lastItem,
  handleNextPage,
  handlePreviousPage,
  countries,
}) => {
  return (
    <div className='pagination'>
      <button
        className='pagination__back'
        disabled={firstItem <= 0}
        onClick={handlePreviousPage}
      >
        <ChevronLeft />
      </button>

      <button
        className='pagination__next'
        disabled={lastItem >= countries.length - 1}
        onClick={handleNextPage}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
