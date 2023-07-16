import React from 'react';
import { useDispatch } from 'react-redux';
import { useAddPostMutation } from '../../../services';
import { setPost } from '../../../redux/reducer/posts';

const AddTask = () => {
  const dispatch = useDispatch();
  const [addTask, result] = useAddPostMutation();
  console.log('ssss', result?.data);

  const handleAddPost = async (e) => {
    e.preventDefault();
    const post = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    await addTask(post);
    dispatch(setPost(post));
  };

  return (
    <>
      <button onClick={handleAddPost}> Add post </button>
      {/* {result} */}
    </>
  );
};

export default AddTask;
