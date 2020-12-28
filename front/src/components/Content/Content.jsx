import React from 'react';
import AddPost from './Post/AddPost';
import PostList from './Post/PostList';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {pages} from '../../pages';

function Content({displayedContent, userName}) {
    return (
      <div className="content">
        
        { (displayedContent === pages.articles) && <PostList /> } 
        { (displayedContent === pages.addArticle) && <AddPost /> } 
        { (displayedContent === pages.profileInfo) && <ProfileInfo userName={userName} /> } 
      </div>
    );
  }
  
export default Content;
  