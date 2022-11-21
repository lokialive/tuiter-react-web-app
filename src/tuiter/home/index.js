import React from "react";
import PostSummaryList from "../post-summary-list";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import TuitList from "../tuits/tuit-list";
import WhatsHappening from "./whats-happening";
import "./index.css";
const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>

            <TuitList />
        </>
    );
};
export default HomeComponent;