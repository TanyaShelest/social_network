import React from "react";
import LogOutButton from "./LogOutButton";
import {userDataType} from "../../Content/ProfileInfo/ProfileInfoType";

function Profile({userData}) {
  return (
    <div className="profile">
      Profile {`${userData.firstName} ${userData.lastName}`}
      <LogOutButton/>
    </div>
  );
}

Profile.propTypes = {
  userData: userDataType,
};

export default Profile;
