import React from 'react';
import Form from './Form';
import ProfileButton from './ProfileButton';

function Profile({onClick, onSubmit, userName}) {

  return (
    <div className="profile">
      <Form onSubmit={onSubmit} />
      <ProfileButton onClick={onClick} userName={userName}/>
    </div>
  );
}
  
export default Profile;
  