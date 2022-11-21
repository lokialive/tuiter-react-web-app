import NavigationSidebar from "../../tuiter/NavigationSidebar/index.js";
import WhoToFollowList from "../../tuiter/WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";
function exploreComponent() {
    $('#wd-explore').append(`
      
         <div class="row mt-2">
   <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 pe-0">
    <!--<h3>Navigation Sidebar</h3>-->
    ${NavigationSidebar('explore')}
   </div>
   <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 col-10 m-0 p-0">
<!--    <h3>ExploreComponent</h3>-->
    ${ExploreComponent()}
   </div>
   <div class="col-xxl-4 col-xl-4 col-lg-4 d-xxl-inline d-xl-inline d-lg-inline d-md-none d-sm-none d-none ps-3">
<!--    <h3>WhoToFollowList </h3>-->
    ${WhoToFollowList()}
   </div>
  </div>

   `);
}

$(exploreComponent);