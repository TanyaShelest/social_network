import React, { useState, useEffect, createContext } from "react";
import PostsList from "../../components/Content/Posts/PostsList";
import { getPosts } from "./hooks/crud";

export const PostsContext = createContext([]);

function PostsListContainer() {
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    const { data } = await getPosts();
    console.log(data);
    setPosts(data);
  };

  useEffect(getData, []);

  return (
    <PostsContext.Provider value={posts}>
      <PostsList />
    </PostsContext.Provider>
  );
}

export default PostsListContainer;
