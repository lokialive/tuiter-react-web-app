import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import '@fortawesome/fontawesome-free/css/all.min.css'


const NavigationSidebar = () => {

    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <div className="list-group">
            <li className="list-group-item">
                <i className= "fab fa-twitter" />
            </li>
            <Link to="/tuiter/home" className={`list-group-item ${active==='home' ? 'active' : ''}`}>
                <i className="fa fa-solid fa-home" />
                &nbsp;&nbsp;Home</Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <i className="fa fa-solid fa-hashtag" />
                &nbsp;&nbsp;Explore
            </Link>
            <li className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="fa fa-solid fa-bell" />
                &nbsp;&nbsp;Notifications
            </li>
            <li className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="fa fa-solid fa-envelope" />
                &nbsp;&nbsp;Messages
            </li>
            <li className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="fa fa-solid fa-bookmark" />
                &nbsp;&nbsp;Bookmarks
            </li>
            <li className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="fa fa-solid fa-list" />
                &nbsp;&nbsp;Lists
            </li>
          <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
            <i className="fa fas fa-user" />
            &nbsp;&nbsp;Profile
          </Link>

            <li className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <i className="fa-solid fa-ellipsis"/>
                &nbsp;&nbsp;More
            </li>
        </div>
    );
};
export default NavigationSidebar;
