import React from 'react';
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
    {
        post = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img className="rounded-circle" style={{"width": "45px"}} src={`/images/${post.image}`} alt="..."/>
                </div>
                <div className="col-11 ps-3">
                    <div className="row">
                        <div className="row pe-0">
                            <div className="col-11">
                                <span className="fw-bolder">{post.username}</span>
                                <i className="bi bi-patch-check-fill" style={{"color":"blue"}}></i>
                                <span className="text-secondary"> {post.handle} - {post.time}</span>
                            </div>
                            <div className="col-1 pe-0">
                                <i className="bi bi-x-lg float-end"
                                   onClick={() => deleteTuitHandler(post._id)}></i>
                            </div>
                        </div>
                    </div>
                    <div>{post.tuit}</div>


                    <div className="row mt-2">
                        <TuitStats post={post} />
                    </div>
                </div>

            </div>
        </li>
    )
}

export default TuitItem;