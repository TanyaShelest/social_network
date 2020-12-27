import React from 'react';
import AddPost from './Post/AddPost';
import PostList from './Post/PostList';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {pages} from '../../pages';
import PropTypes from 'prop-types';
import { userDataType } from './ProfileInfo/ProfileInfoType';

function Content({displayedContent, userName, userData}) {

  return (
    <div className="content">

      { (displayedContent === pages.articles) && <PostList /> } 
      { (displayedContent === pages.addArticle) && <AddPost /> } 
      { (displayedContent === pages.profileInfo) && <ProfileInfo userName={userName} userData={userData} /> } 
    </div>
  );
}
 
Content.propTypes = {
  displayedContent: PropTypes.string.isRequired,
  userName: PropTypes.string,
  userData: userDataType
};

export default Content;
  