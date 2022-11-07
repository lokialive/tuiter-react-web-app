import {Link} from "react-router-dom";
// import HomeComponent from "./HomeComponent";
import React from "react";
import WhatsHappening from "../WhatsHappening";
import TuitList from "../tuit-list";

const HomeScreen = () => {
    return(
        <>
            <div className="row mt-2">
                <div>
                  <h4>Home</h4>
                  <WhatsHappening/>
                    <TuitList/>
                </div>
            </div>
        </>
    )
}
export default HomeScreen;
