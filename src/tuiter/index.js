import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import {Routes, Route} from "react-router";
import TuiterExplore from "./explore";
import TuiterHome from "./home";



function Tuiter() {
  return (
      <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar active="explore"/>
        </div>
        <div className="col-10 col-md-10 col-lg-7 col-xl-6"
             style={{"position": "relative"}}>
          <Routes>
            <Route path="home"    element={<TuiterHome/>}/>
            <Route path="explore" element={<TuiterExplore/>}/>
          </Routes>
        </div>
      </div>
  );
}

export default Tuiter

