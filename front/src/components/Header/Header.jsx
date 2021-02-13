import React from "react";
import Logo from "./Logo";
import Profile from "./Profile/Profile";
import {Link} from "react-router-dom";
import { userDataType } from "../Content/ProfileInfo/ProfileInfoType";

function Header({userData}) {
  return (
    <div className="header">
      <Link to="/">
        <Logo />
      </Link>
      <Link to="/add">
        Add Post
      </Link>
      <Link to="/profile">
        <Profile userData={userData}/>
      </Link>
    </div>
  );
}

Header.propTypes = {
  userData: userDataType,
};

export default Header;
