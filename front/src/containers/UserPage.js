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

  const userData = {
    id: 1,
    firstName: 'Ivan',
    lastName: 'Ivanov',
    age: 25,
    avatar: {
        fileId: 1,
        file: {
            id: 1,
            name: 'photo.jpg',
            path: '/upload/photo.jpg',
            size: 1234
        }
    },
    friends: [{}, {}, {}], //array of users
    posts: [{
        title: 'Article 1',
        text: 'Some text',
        images: [{}, {}, {}], // array of files
        createdAt: '2020-12-17 19:00:00',
        editedAt: '2020-12-17 20:00:00',
        likes: [
            {userId: 2, user: {id: 2}, date: '2020-12-17 21:00:00'},
            {userId: 3, user: {id: 3}, date: '2020-12-17 22:00:00'}
        ]
    }]
  };

  return (
      <>
      <Header chooseContent={chooseContent} onSubmit={handleSubmit} userName={userName} />
      <Content displayedContent={content} userName={userName} userData={userData} />
      <Footer />
      </>
  );
}

export default UserPageContainer;
  