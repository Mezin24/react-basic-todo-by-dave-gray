import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
import { useState } from 'react';
import { addNewPost } from '../../redux/PostSlice';
import { useHistory } from 'react-router-dom';

const NewPost = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: uuidv4(),
      datetime: format(new Date(), 'MMMM dd, yyyy pp'),
      title,
      body,
    };
    dispatch(addNewPost(newPost));
    history.push('/');
  };

  return (
    <main className='NewPost'>
      <h2>New Post</h2>
      <form className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor='postTitle'>Title:</label>
        <input
          type='text'
          id='postTitle'
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor='postBody'>Post:</label>
        <textarea
          id='postBody'
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </main>
  );
};

export default NewPost;
