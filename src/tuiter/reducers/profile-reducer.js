import {createSlice} from "@reduxjs/toolkit";

const profile = {
    firstName: 'Tom',
    lastName: 'Hiddleston',
    handle: 'Tom',
    profilePicture: '../../images/astronaut.jpeg',
    bannerPicture: '../../images/pancake.jpg',
    bio: 'British actor',
    website: '',
    location: 'London, United Kingdom',
    dateOfBirth : '02/09/1981',
    dateJoined: '11/2012',
    followingCount: 18,
    followersCount: 98239
}

const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            const updatedProfile = action.payload;
            let [firstName, ...lastName] = updatedProfile.name.split('/');
            lastName = lastName.join(' ');
            const bio = updatedProfile.bio;
            const location = updatedProfile.location;
            const website = updatedProfile.website;
            const [year, month, day] = updatedProfile.birthday.split('-');
            const dateOfBirth = [month, day, year].join('/');
            return {...state, firstName, lastName, bio, location, website, dateOfBirth}
        }
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;