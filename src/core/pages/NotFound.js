import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className='not-found'>
      <h1 className='not-found__header'>Página não encontrada!</h1>
      <Link className='not-found__link' to='/'>
        Voltar para página inicial
      </Link>
    </div>
  );
};

export default NotFound;
