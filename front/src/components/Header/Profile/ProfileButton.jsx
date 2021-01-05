import React from "react";
import PropTypes from "prop-types";

function ProfileButton({ userName, onClick }) {
  return <button onClick={onClick}>Profile {userName}</button>;
}

ProfileButton.propTypes = {
  userName: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

ProfileButton.defaultProps = {
  userName: "anon",
};

export default ProfileButton;
