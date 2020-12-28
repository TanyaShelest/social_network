import React, {useState} from 'react';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import Footer from '../components/Footer';
import {pages} from '../pages';

function UserPageContainer() {
  const [content, setContent] = useState(pages.articles);
  const [userName, setUserName] = useState('');

  const chooseContent = content => () => setContent(content);
    
  const handleSubmit = event => {
    event.preventDefault();
    setUserName(`${event.target[0].value} ${event.target[1].value}`);
  };

  return (
      <>
      <Header chooseContent={chooseContent} onSubmit={handleSubmit} userName={userName} />
      <Content displayedContent={content} userName={userName} />
      <Footer />
      </>
  );
}

export default UserPageContainer;
  