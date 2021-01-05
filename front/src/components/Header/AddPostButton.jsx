import React from 'react';
import PropTypes from 'prop-types';

function AddPostButton({onClick}) {
    return (
        <div className="add-article">
            <button onClick={onClick}>
                Add Article
            </button>
        </div>
        
    );
  }

AddPostButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default AddPostButton;
  