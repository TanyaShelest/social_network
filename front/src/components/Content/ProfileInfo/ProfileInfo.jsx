import React from 'react';
import PropTypes from 'prop-types';
import {userDataType} from './ProfileInfoType';

function ProfileInfo({userName, userData}) {

  return (
    <div>
       <h1>Welcome, {userName || 'anon'}</h1>
      <ul>
        <li>{userData.id}</li>
        <li>{userData.age}</li>
        <li>{userData.avatar.file.name}</li>
        <li>{userData.posts[0].title}</li>
        <li>{userData.posts[0].createdAt}</li>
      </ul>
    </div>
  );
}

ProfileInfo.propTypes = {
  userName: PropTypes.string,
  userData: userDataType
};

export default ProfileInfo;