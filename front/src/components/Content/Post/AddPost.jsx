import React from 'react';

function AddPost() {
    
  return (
    <form>
      <input name="title"/>
      <textarea name="text" placeholder="What do you think?"/>
      <button type="submit">Save</button>
    </form> 
  );
}

export default AddPost;