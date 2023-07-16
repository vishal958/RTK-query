import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useGetPostsQuery } from '../../services';

import { setPost } from '../../redux/reducer/posts';

const PostCard = ({ content }) => {
  return (
    <div className="col-lg-12 mb-3 " key={content.id}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{content.title}</h5>
          <p className="card-text">{content.body}</p>
        </div>
      </div>
    </div>
  );
};
function PostsList() {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log('sfff', state);
  let postContent;
  if (isLoading) {
    postContent = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else if (isSuccess) {
    // dispatch(setPost(posts.slice(0, 3)));
    postContent = posts
      .map((item) => {
        return <PostCard content={item} key={item.id} />;
      })
      .slice(0, 3);
  } else if (isError) {
    postContent = (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }
  return <div>{postContent}</div>;
}
export default PostsList;
