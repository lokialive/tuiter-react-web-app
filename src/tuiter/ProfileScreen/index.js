import {Link} from "react-router-dom";
import React from "react";
import Profile from "../Profile";
import NavigationSidebar from "../NavigationSidebar";
import HomeComponent from "../home-screen/HomeComponent";
import WhoToFollowList from "../who-to-follow-list";

const ProfileScreen = () => {
    return(
        <>
          <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
              <NavigationSidebar active="profile"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6">
              <Profile/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
              <WhoToFollowList/>
            </div>
          </div>
        </>
    )
}
export default ProfileScreen;
