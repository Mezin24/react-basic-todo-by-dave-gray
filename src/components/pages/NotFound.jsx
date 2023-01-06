import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className='Missing'>
      <h2>Page Not Found</h2>
      <p>Well, that\'s dissapointing.</p>
      <p>
        <Link to='/'>Visit Our Homepage</Link>
      </p>
    </main>
  );
};

export default NotFound;
