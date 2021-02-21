import React from "react";

function Post({ post }) {
  const date = new Date(post.created_at).toDateString();
  return (
    <div>
      <div className="postList" key={post.id}>
        <h1>{post.title}</h1>
        <p>{date}</p>
        <p>{post.content}</p>
      </div>
    </div>
  );
}

export default Post;
