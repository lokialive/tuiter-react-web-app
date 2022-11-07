import React from "react";
import './home.css'
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import HomeComponent from "./HomeComponent.js";
import {Link} from "react-router-dom";

const HomeScreen = () => {
    return(
        <>
            <Link to="/labs">
                Labs
            </Link> |
            {/*<Link to="/tuiter">*/}
            {/*    Tuiter*/}
            {/*</Link> |*/}
            <Link to="/tuiter/explore">
                Explore
            </Link> |
            <Link to="/hello">
                Hello
            </Link>
            <div className="row mt-2">
                <div>
                    {HomeComponent()}
                </div>
                {/*<div className="col-2 col-md-2 col-lg-1 col-xl-2">*/}
                {/*    {NavigationSidebar("Home")}*/}
                {/*</div>*/}
                {/*<div className="col-2 col-md-10 col-lg-7 col-xl-6">*/}
                {/*    {HomeComponent()}*/}
                {/*</div>*/}
                {/*<div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">*/}
                {/*    {PostSummaryList()}*/}
                {/*</div>*/}
            </div>
        </>
    );
}
export default HomeScreen;
