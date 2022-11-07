import posts from "./posts.json";
import PostSummaryItem from "./PostSummaryItem";
const PostSummaryList = () => {
    return(
        <ul className="list-group">
            {posts.map(post => {
                return(<PostSummaryItem  key={post._id} post={post}/>);
            })}
        </ul>
    );
}
export default PostSummaryList;