import { useSelector } from 'react-redux';
import Feed from '../Feed';
import { useState, useEffect } from 'react';

const Home = () => {
  const { posts, search } = useSelector((state) => state.posts);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    setFilteredPosts(
      posts.filter(
        (p) =>
          p.title.toLowerCase().includes(search) ||
          p.body.toLowerCase().includes(search)
      )
    );
  }, [posts, search]);

  return (
    <main className='Home'>
      {filteredPosts.length ? (
        <Feed posts={filteredPosts} />
      ) : (
        <p style={{ margin: '2rem' }}>No posts display</p>
      )}
    </main>
  );
};

export default Home;
