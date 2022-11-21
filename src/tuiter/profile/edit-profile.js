import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../reducers/profile-reducer";

const EditProfile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);


    const [name, setName] = useState(profile.firstName + ' ' + profile.lastName);
    const [bio, setBio] = useState(profile.bio);
    const birthdayData = profile.dateOfBirth.split('/')
    const [birthday, setBirthday] = useState(birthdayData[2] + "-" + birthdayData[0] + '-' + birthdayData[1]);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);

    const updateProfileHandler = () => {
        dispatch(updateProfile({name, bio, location, website, birthday}));
        navigate('/tuiter/profile');
    }
    return (
        <>
            <Link to="/tuiter/profile">
                <i className="bi bi-x fs-4 text-black"></i>
            </Link>

            <span className="text-black fw-bold fs-4 ms-5">Edit Profile</span>
            <button className="btn btn-dark rounded-pill float-end" style={{"width" : "15%"}} onClick={updateProfileHandler}>
                Save
            </button>
            <div className="position-relative mb-5 mt-2">
                <img className="w-100" style={{"opacity": "0.5"}} src="../../images/pancake.jpg" alt="..."/>
                <i className="position-absolute bi bi-camera fs-4 ps-2 pe-2 pt-1 pb-1 rounded-pill text-white"
                   style={{"left": "40%", "bottom": "40%", "background": "black", "opacity": "0.6"}}></i>
                <i className="position-absolute bi bi-x fs-4 ps-2 pe-2 pt-1 pb-1 rounded-pill text-white"
                   style={{"left": "52%", "bottom": "40%", "background": "black", "opacity": "0.6"}}></i>

                <img className="position-absolute rounded-circle"
                     style={{"opacity": "0.5", "height": "40%", "width": "25%", "left": "3%", "bottom": "-5%"}}
                     src="../../images/astronaut.jpeg" alt="..."/>
                <i className="position-absolute bi bi-camera fs-4 ps-2 pe-2 pt-1 pb-1 rounded-pill text-white"
                   style={{ "background": "black", "opacity": "0.6","left": "11%", "bottom": "5%"}}></i>
            </div>


            <form>
                <div className="form-group pt-4">
                    <label htmlFor="inputName" className="text-secondary">Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Name"
                           value={name} onChange={(e) => {
                        setName(e.target.value)
                    }}/>
                </div>
                <div className="form-group pt-4">
                    <label htmlFor="inputBio" className="text-secondary">Bio</label>
                    <textarea className="form-control" id="inputBio" placeholder="Bio"
                              value={bio} onChange={(e) => setBio(e.target.value)}
                    />
                </div>
                <div className="form-group pt-4">
                    <label htmlFor="inputLocation" className="text-secondary">Location</label>
                    <input type="text" className="form-control" id="inputLocation" placeholder="Location"
                           value={location} onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div className="form-group pt-4">
                    <input type="text" className="form-control" id="inputWebsite" placeholder="Website"
                           value={website} onChange={(e) => setWebsite(e.target.value)}
                    />
                </div>
                <div className="form-group pt-4">
                    <label htmlFor="inputBirthday" className="text-secondary">Birth date - </label><Link>Edit</Link>
                    <input type="date" className="form-control" id="inputBirthday" placeholder="Location"
                           value={birthday} onChange={(e) => setBirthday(e.target.value)}
                    />
                </div>
            </form>

            <div className="mt-4">
                <i className="bi bi-arrow-right-short float-end fs-4"></i>
                <p>Switch to professional</p>
            </div>

        </>
    )
}

export default EditProfile;