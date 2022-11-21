import React from "react";
import {useSelector} from "react-redux";
import PostSummaryItem
    from "./post-summary-item";

const PostSummaryList = () => {
    const postsArray = useSelector(state => state.postsSummary)
    return(
        <ul className="list-group">
            {
                postsArray&&postsArray.map(post =>
                    <PostSummaryItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default PostSummaryList;