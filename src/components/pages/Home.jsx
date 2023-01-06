import { useSelector } from 'react-redux';
import Feed from '../Feed';

const Home = () => {
  const { posts } = useSelector((state) => state.posts);
  return (
    <main className='Home'>
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ margin: '2rem' }}>No posts display</p>
      )}
    </main>
  );
};

export default Home;
