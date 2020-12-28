import React from 'react';

function ProfileButton({userName, onClick}) {
    
  return (
    <button onClick={onClick}>Profile {userName}</button>
    );
}
  
export default ProfileButton;
  