import React from "react";
import WhatsHappening from "../WhatsHappening";
import TuitList from "../tuit-list";

const HomeComponent = () => {
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
export default HomeComponent;
