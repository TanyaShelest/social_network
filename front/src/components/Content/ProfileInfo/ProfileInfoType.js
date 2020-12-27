import PropTypes from 'prop-types';

const fileType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  path: PropTypes.string,
  size: PropTypes.number
});

const userType = PropTypes.shape({
  id: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number
});

const likeType = PropTypes.shape({
  userId: PropTypes.number,
    user: PropTypes.shape({
      id: PropTypes.number
    }),
    date: PropTypes.string
});

const postType = PropTypes.shape({
  title: PropTypes.string,
  text: PropTypes.string,
  images: PropTypes.arrayOf(fileType),
  createdAt: PropTypes.string,
  editedAt: PropTypes.string,
  likes: PropTypes.arrayOf(likeType)
});

export const userDataType = PropTypes.shape({
    user: userType,
    avatar: PropTypes.shape({
    fileId: PropTypes.number,
    file: fileType
    }),
    friends: PropTypes.arrayOf(userType),
    posts: PropTypes.arrayOf(postType)
});
