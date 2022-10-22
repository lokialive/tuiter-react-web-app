import homeposts from './homeposts.json'
import HomePostItem from "./HomePostItem";
const HomeComponent = () => {
  return(
      <ul className="list-group">
        {homeposts.map(post => {
          return(<HomePostItem post={post}/>);
        })}
      </ul>
  );
}
export default HomeComponent;