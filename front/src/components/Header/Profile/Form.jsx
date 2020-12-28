import React from 'react';

function Form({onSubmit}) {
    
  return (
    <form onSubmit={onSubmit}>
      <input name="firstName" placeholder="Your name"/>
      <input name="lastName" placeholder="Your surname"/>
      <button type="submit">Save</button>
    </form>
  );
}

export default Form;