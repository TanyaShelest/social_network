import React from 'react';

function ProfileInfo({userName}) {
    
  return (
    <div>
       <h1>Welcome, {userName || 'anon'}</h1>
    </div>
  );
}

export default ProfileInfo;