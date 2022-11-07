import React from "react";
import tags from "./tags.json";
import PostSummaryList from "../PostSummaryList";
import NavTag from "./NavTag";

const ExploreComponent = ({active}) => {
    return(
        <>
            <div className="mb-3 row mt-2 explore-bar">
                <div className="p-0 col-10">
                    <i className="fas fa-magnifying-glass fa-fw explore-bar-pos"/>
                    <label style={{width: '100%'}} htmlFor="explore-content">
                        <input className="form-control" placeholder="Search Tuiter" type="text" id="explore-content"/>
                    </label>
                </div>

                <div className="display-inline col-2 p-0">
                    <a href="../tuiter/home"><span><i className="fa-solid fa-gear fa-2x gear-pos "/></span></a>
                </div>
            </div>


            <ul className="nav mb-2 nav-tabs">
                {tags.map(tag => {
                    return(<NavTag key={tag._id} tag={tag} active={active}/>)
                })}
                <li className="nav-item d-sm-none d-md-inline" key="001">
                    <a className="nav-link" href="../tuiter/home">
                        Entertainment
                    </a>
                </li>
            </ul>

            <div className="position-relative mb-2">
                <img src="../img/spacex-starship.jpg" className="card-img-top" alt="..."/>
                <div className="position-absolute card-title-pos">
                    <span className="card-title-font">SpaceX's Starship</span>
                </div>
            </div>
            <PostSummaryList/>
        </>
)
};
export default ExploreComponent;
