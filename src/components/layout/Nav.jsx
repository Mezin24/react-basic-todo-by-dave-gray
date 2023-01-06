import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../../redux/PostSlice';
import { Link } from 'react-router-dom';

const Nav = () => {
  const { search } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  return (
    <nav className='Nav'>
      <form onSubmit={(e) => e.preventDefault()} className='searchForm'>
        <label htmlFor='search'>Search Posts</label>
        <input
          type='text'
          id='search'
          onChange={(e) => dispatch(setSearch(e.target.value))}
          value={search}
          placeholder='Search Posts'
        />
      </form>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/post'>New post</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
