import NavigationSidebar from "../../tuiter/NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import PostList from "../../tuiter/PostList/index.js";

function exploreComponent() {
    $('#wd-explore').append(`
      
         <div class="row mt-2">
   <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 pe-0">
    <!--<h3>Navigation Sidebar</h3>-->
    ${NavigationSidebar('home')}
   </div>
   <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 col-10 m-0 p-0">
<!--    <h3>ExploreComponent</h3>-->
    ${PostList()}
    Content
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
<!--    <h3>WhoToFollowList </h3>-->
    ${ExploreComponent()}
   </div>
  </div>

   `);
}

$(exploreComponent);