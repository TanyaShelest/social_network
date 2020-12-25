import React from 'react';

function AddPostButton({onClick}) {
    return (
        <div className="add-article">
            <button onClick={onClick}>
                Add Article
            </button>
        </div>
        
    );
  }
  
export default AddPostButton;
  