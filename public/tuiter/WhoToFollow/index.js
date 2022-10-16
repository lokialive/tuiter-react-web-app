import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
  return(`
            <div class="list-group row mb-3">
                <ul>
                    <li class="list-group-item list-group-item-action">
                        <p><strong>Who to follow</strong></p>
                    </li>
                    ${who.map(who => {
    return(WhoToFollowListItem(who));
  }).join('')}
                </ul>
            </div>

    `);
}
export default WhoToFollowList;