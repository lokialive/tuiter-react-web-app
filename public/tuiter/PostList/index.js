import PostItem from "./PostItem.js";
import posts from "./posts.js"
import PostItemNoContent from "./PostItemNoContent.js";
import postNoContents from "./postNoContents.js"
const  PostList = () => {
    return (`
           <ul class="list-group">
           <!-- continue here -->
                ${
        posts.map(post => {
            return(PostItem(post));
        }).join('')
    }
                ${
        postNoContents.map(postNoContent => {
            return(PostItemNoContent(postNoContent));
        }).join('')
    }
           </ul>
`); }

export default  PostList;