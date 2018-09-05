import React from 'react';
import PropTypes from 'prop-types';

// Import Components
import PostListItem from './PostListItem/PostListItem';
import PostReducer from '../PostReducer';

function PostList(props) {
  return (
    <div className="listView">
      {
        props.posts.map(post => (
          <div>
            <PostListItem
              post={post}
              key={post.cuid}
              onDelete={() => props.handleDeletePost(post.cuid)}
              votes = {post.votes}
              onThumbUp={() => props.handleThumbUp(post.cuid, post)}
              onThumbDown={() => props.handleThumbDown(post.cuid, post)}
            />
          </div>
        ))
      }
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeletePost: PropTypes.func.isRequired,
};

export default PostList;
