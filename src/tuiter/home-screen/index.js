
import React from "react";
import WhatsHappening from "../WhatsHappening";
import TuitList from "../tuit-list";
import NavigationSidebar from "../NavigationSidebar";
import WhoToFollowList from "../who-to-follow-list";
import HomeComponent from "./HomeComponent";

const HomeScreen = () => {
    return(
        <>

          <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
              <NavigationSidebar active="home"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6">
              <HomeComponent/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
              <WhoToFollowList/>
            </div>
          </div>
        </>
    )
}
export default HomeScreen;
