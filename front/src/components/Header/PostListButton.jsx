import React from 'react';

function PostListButton({onClick}) {
    return (
        <div className="articles">
            <button onClick={onClick}>
                Articles
            </button>
        </div>
        
    );
  }
  
export default PostListButton;
  
