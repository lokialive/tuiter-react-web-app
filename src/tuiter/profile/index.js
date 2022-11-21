import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Profile = () => {
    const profile = useSelector(state => state.profile);

    return (
        <>
            <div className="ms- 0">
                <Link to="/tuiter/home">
                    <div className="float-start"><i className="bi bi-arrow-left-short fs-4 text-black"></i></div>
                </Link>

                <div className="ms-5">
                    <h4 className="fw-bold ms-2">{profile.firstName}</h4>
                    <p className="ms-2 text-secondary">1,000 Tuits</p>
                </div>
            </div>


            <div className="position-relative mt-2">
                <img className="w-100" src="../../images/pancake.jpg" alt="..."/>
                <img className="position-absolute rounded-circle"
                     style={{"left": "3%", "bottom": "-5%", "height": "40%", "width": "25%"}}
                     src="../../images/astronaut.jpeg" alt="..."/>
            </div>

            <Link to="/tuiter/edit-profile">
                <button className="btn btn-outline-secondary fw-bold rounded-pill float-end mt-3 border-1">
                    Edit Profile
                </button>
            </Link>

            <div className="mt-4">
                <h3 className="m-0">{profile.firstName}</h3>
                <p className="text-secondary">@{profile.handle}</p>
                <p>{profile.bio}</p>
                <p>
                    <i className="bi bi-geo-alt"></i>{profile.location}
                    <i className="bi bi-balloon ms-2"></i>Born {profile.dateOfBirth}
                    <i className="bi bi-calendar ms-2"></i>Joined {profile.dateJoined}
                </p>
                <p className="text-secondary">
                    <span className="fw-bold">{profile.followingCount}</span> Following
                    <span className='fw-bold ms-3'>{profile.followersCount}</span> Follower
                </p>
            </div>

        </>
    )
}

export default Profile;