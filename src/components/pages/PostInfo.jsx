import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useHistory } from 'react-router-dom';
import { handleDelete } from '../../redux/PostSlice';

const PostInfo = () => {
  const { id } = useParams();
  const history = useHistory();
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const post = posts.find((p) => p.id.toString() === id);

  return (
    <main className='PostPage'>
      <article className='post'>
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.datetime}</p>
            <p className='postBody'>{post.body}</p>
            <button
              onClick={() => {
                dispatch(handleDelete(post.id));
                history.push('/');
              }}
            >
              Delete Post
            </button>
          </>
        )}
        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>Well, that\'s dissapointing</p>
            <p>
              <Link to='/'>Visit Our Homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostInfo;
