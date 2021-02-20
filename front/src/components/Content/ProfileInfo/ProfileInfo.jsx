import React from "react";
import { userDataType } from "./ProfileInfoType";

function ProfileInfo({ userData }) {
  return (
    <div>
      <h1>Welcome, {userData.firstName}</h1>
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
  userData: userDataType,
};

export default ProfileInfo;
