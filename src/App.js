import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import Nav from "./nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./Tuiter/home/home-screen"
import ExploreScreen from "./Tuiter/ExploreScreen/ExploreScreen";
import ProfileScreen from "./Tuiter/ProfileScreen/ProfileScreen";
import EditProfile from "./Tuiter/EditProfile/EditProfile";
import React from "react";
import Assignment6 from "./labs/a6";

import Assignment7 from "./labs/a7";
import {combineReducers} from "redux";
import tuitsReducer from "./Tuiter/reducers/tuits-reducer";
import whoReducer from "./Tuiter/reducers/who-reducer";
import profileDataReducer from "./Tuiter/reducers/profileData-reducer";
import {Provider} from "react-redux";
import { legacy_createStore as createStore} from 'redux'
const reducer = combineReducers({tuits: tuitsReducer, who: whoReducer, profileData: profileDataReducer});
const store = createStore(reducer);
function App() {
    return (
        <Provider store={store}>
        <BrowserRouter>
           <Nav/>
            <Routes>
                <Route index
                       element={<Assignment6/>}/>
                <Route path="a7"
                       element={<Assignment7/>}/>

                <Route path="tuiter/home"
                       element={<HomeScreen/>}/>
                <Route path="tuiter/explore"
                       element={<ExploreScreen/>}/>
                <Route path="tuiter/profile"
                       element={<ProfileScreen/>}/>
                <Route path="tuiter/edit-profile"
                       element={<EditProfile/>}/>
            </Routes>
        </BrowserRouter>
      </Provider>
    );
}

export default App;


