import React from 'react';
import PropTypes from 'prop-types';

function PostListButton({onClick}) {
  return (
    <div className="articles">
      <button onClick={onClick}>
        Articles
      </button>
    </div>
  );
}

PostListButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default PostListButton;
  
