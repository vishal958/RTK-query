import React from 'react';
import { useAddPostMutation } from '../../../services';

const AddTask = () => {
  const [addTask, result] = useAddPostMutation();
  console.log('ssss', result?.data);

  const handleAddPost = async (e) => {
    const post = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    await addTask(post)
      .unwrap()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <button onClick={handleAddPost}> Add post </button>
    </>
  );
};

export default AddTask;
