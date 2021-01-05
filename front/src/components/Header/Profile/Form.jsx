import React from 'react';
import PropTypes from 'prop-types';

function Form({onSubmit}) {
    
  return (
    <form onSubmit={onSubmit}>
      <input name="firstName" placeholder="Your name"/>
      <input name="lastName" placeholder="Your surname"/>
      <button type="submit">Save</button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Form;