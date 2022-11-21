import React from 'react';
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (
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
    return(

                    <div className="row mt-3">
                        <div className="col-3">
                            <i className="bi bi-chat"></i><span className="ms-2">{post.replies}</span>
                        </div>
                        <div className="col-3">
                            <i className="bi bi-repeat"></i><span className="ms-2">{post.retuits}</span>
                        </div>
                        <div className="col-3">
                            {post.liked ?
                                <i onClick={() => dispatch(updateTuitThunk({
                                    ...post,
                                    liked: false,
                                    likes: post.likes - 1
                                }))}
                                   className="bi bi-heart-fill text-danger"></i>
                                :
                                <i onClick={() => dispatch(updateTuitThunk({
                                    ...post,
                                    liked: true,
                                    likes: post.likes + 1
                                }))}
                                   className="bi bi-heart"></i>}
                            <span className="ms-2">{post.likes}</span>
                        </div>
                        <div className="col-3">
                            <i className="bi bi-upload"></i>
                        </div>
                    </div>

    )
}

export default TuitStats;