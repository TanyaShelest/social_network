import React from 'react';
import PropTypes from 'prop-types';

function ProfileInfo({userName}) {
    
  return (
    <div>
       <h1>Welcome, {userName || 'anon'}</h1>
    </div>
  );
}

ProfileInfo.propTypes = {
  userName: PropTypes.string.isRequired
};

export default ProfileInfo;