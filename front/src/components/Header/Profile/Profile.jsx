import React from 'react';
import Form from './Form';
import ProfileButton from './ProfileButton';
import PropTypes from 'prop-types';

function Profile({onClick, onSubmit, userName}) {

  return (
    <div className="profile">
      <Form onSubmit={onSubmit} />
      <ProfileButton onClick={onClick} userName={userName}/>
    </div>
  );
}

Profile.propTypes = {
  onClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  userName: PropTypes.string
};

export default Profile;
  