import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-11" style="width: 85%;height: 50px">
                    <div class="position-relative">
                        <input class="ps-5 form-control rounded-pill bg-white border-0 w-100" style="height: 40px" placeholder="Search Tuiter"/>
                        <div class="position-absolute wd-search-tuiter"><i class="fa-sharp fa-solid fa-magnifying-glass text-secondary"></i></div>
                    </div>
                </div>
                <span class="col-1" style="width: 15%;">
                    <i class="fa-solid fa-gear position-relative float-end mt-3 me-4" style="color: rgb(29,161,242);"></i>
<!--                    <span class="fa-stack position-relative float-end mt-3 me-4" style="vertical-align: top; transform: scale(0.5,0.5) translate(-15px,-7px);"><i class="fa-solid fa-gear text-white fa-stack-2x"></i><i class="fa-solid fa-gear fa-stack-1x text-black"></i></span>-->
                </span>
            </div>
            
           <ul class="nav nav-tabs mt-2 mb-2 border-0" style="transform: translate(-30px,0px)">
                <li class="nav-item border-0 px-3">
                    <a class="nav-link text-white" style="background-color: rgb(29,161,242);" href="#">For You</a>
                </li>
                <li class="nav-item border-0 px-3">
                    <a class="nav-link text-white" href="#">Trending</a>
                </li>
                <li class="nav-item border-0 px-3">
                    <a class="nav-link text-white" href="#">News</a>
                </li>
                <li class="nav-item border-0 px-3">
                    <a class="nav-link text-white" href="#" tabindex="-1">Sports</a>
                </li>
                <li class="nav-item selected d-xxl-inline d-xl-inline d-lg-inline d-md-inline d-sm-none d-none px-3">
                    <a class="nav-link text-white pb-3" href="#">Entertainment</a>
                </li>
            </ul>
            <div class="position-relative">
                <img src="../../images/starship.jpg" alt="starship" width="100%">
                <div class="position-absolute bottom-0 left-0 text-dark wd-font-arial ms-3">
                    <h6 class="m-0 p-0">Music . Last night</h6>
                    <div><h1>SpaceX's Starship <i class="fa-solid fa-earth-americas"></i></h1></div>
                </div>

            </div>
           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
