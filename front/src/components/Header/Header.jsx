import React from 'react';
import Logo from './Logo';
import AddPostButton from './AddPostButton';
import PostListButton from './PostListButton';
import Profile from './Profile/Profile';
import {pages} from '../../pages';

function Header({chooseContent, onSubmit, userName}) {
    return (
      <div className="header">
        <Logo />
        <AddPostButton onClick={chooseContent(pages.addArticle)} />
        <PostListButton onClick={chooseContent(pages.articles)} />
        <Profile onClick={chooseContent(pages.profileInfo)} onSubmit={onSubmit} userName={userName} />
      </div>
    );
  }
  
export default Header;
  