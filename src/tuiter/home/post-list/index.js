import posts from "./posts.json";
import PostListItem from "./post-list-item";
import React from "react";
const PostList = () => {
  return(
        <ul class="list-group">
          {
            posts.map(post =>
                <PostListItem key={post._id} post = {post}/>
            )
          }
        </ul>
    );
}
export default PostList;