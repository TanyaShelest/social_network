import React, { useContext } from "react";
import { PostsContext } from "../../../containers/Posts/PostsList";
import Post from "./Post";

function PostsList() {
  const posts = useContext(PostsContext);

  return posts.map((post) => (
    <div className="postList" key={post.id}>
      <Post post={post} />
    </div>
  ));
}

export default PostsList;
