const NavigationSidebar = (active) => {
    if(active == 'home'){
        return(`
           
            <div class="list-group">
                <div class="list-group-item bg-black text-white mb-2">
                    <i class="fa-solid fa-t"></i></div>
                <a href="../HomeScreen/index.html" class="list-group-item active list-group-item-action text-white my-2" style="background-color: rgb(29,161,242)">
                    <i class="fa-solid fa-house"></i> <span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Home</span></a>
                <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action active bg-black text-white border-0 my-2">
                    <i class="fa-solid fa-hashtag me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2"><b>Explore</b></span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-regular fa-bell me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size-18 ms-2">Notifications</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-regular fa-envelope  me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Messages</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-regular fa-bookmark me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Bookmarks</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-regular fa-rectangle-list me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Lists</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-regular fa-user me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Profile</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-regular fa-comment-dots me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">More</span></a>
            </div>
            <div style="width: 80%"><button class="btn btn-primary w-100 rounded-pill mt-2">Tuit</button></div>
  
 `);
    }else if(active == 'explore'){
        return(`
           
            <div class="list-group">
                <div class="list-group-item bg-black text-white mb-2">
                    <i class="fa-solid fa-t"></i></div>
                <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-solid fa-house"></i> <span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Home</span></a>
                <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action active text-white border-0 my-2" style="background-color: rgb(29,161,242)">
                    <i class="fa-solid fa-hashtag me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2"><b>Explore</b></span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-regular fa-bell me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size-18 ms-2">Notifications</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-regular fa-envelope  me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Messages</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-regular fa-bookmark me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Bookmarks</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-regular fa-rectangle-list me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Lists</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-regular fa-user me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Profile</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-regular fa-comment-dots me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">More</span></a>
            </div>
            <div style="width: 80%"><button class="btn btn-primary w-100 rounded-pill mt-2">Tuit</button></div>
  
 `);
    }else if(active == 'notifications'){
        return(`
           
            <div class="list-group">
                <div class="list-group-item bg-black text-white mb-2">
                    <i class="fa-solid fa-t"></i></div>
                <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-solid fa-house"></i> <span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Home</span></a>
                <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action bg-black text-white border-0 my-2">
                    <i class="fa-solid fa-hashtag me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2"><b>Explore</b></span></a>
                <a href="#" class="list-group-item active list-group-item-action text-white my-2"  style="background-color: rgb(29,161,242)">
                    <i class="fa-regular fa-bell me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size-18 ms-2">Notifications</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-regular fa-envelope  me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Messages</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-regular fa-bookmark me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Bookmarks</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-regular fa-rectangle-list me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Lists</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-regular fa-user me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Profile</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-regular fa-comment-dots me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">More</span></a>
            </div>
            <div style="width: 80%"><button class="btn btn-primary w-100 rounded-pill mt-2">Tuit</button></div>
  
 `);
    }else if(active == 'messages'){
        return(`
           
            <div class="list-group">
                <div class="list-group-item bg-black text-white mb-2">
                    <i class="fa-solid fa-t"></i></div>
                <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-solid fa-house"></i> <span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Home</span></a>
                <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action bg-black text-white border-0 my-2">
                    <i class="fa-solid fa-hashtag me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2"><b>Explore</b></span></a>
                <a href="#" class="list-group-item active list-group-item-action text-white my-2" >
                    <i class="fa-regular fa-bell me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size-18 ms-2">Notifications</span></a>
                <a href="#" class="list-group-item active list-group-item-action text-white my-2" style="background-color: rgb(29,161,242)">
                    <i class="fa-regular fa-envelope  me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Messages</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-regular fa-bookmark me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Bookmarks</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-regular fa-rectangle-list me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Lists</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-regular fa-user me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Profile</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-regular fa-comment-dots me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">More</span></a>
            </div>
            <div style="width: 80%"><button class="btn btn-primary w-100 rounded-pill mt-2">Tuit</button></div>
  
 `);
    }else if(active == 'bookmarks'){
        return(`
           
            <div class="list-group">
                <div class="list-group-item bg-black text-white mb-2">
                    <i class="fa-solid fa-t"></i></div>
                <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-solid fa-house"></i> <span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Home</span></a>
                <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action bg-black text-white border-0 my-2">
                    <i class="fa-solid fa-hashtag me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2"><b>Explore</b></span></a>
                <a href="#" class="list-group-item active list-group-item-action text-white my-2">
                    <i class="fa-regular fa-bell me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size-18 ms-2">Notifications</span></a>
                <a href="#" class="list-group-item active list-group-item-action text-white my-2">
                    <i class="fa-regular fa-envelope  me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Messages</span></a>
                <a href="#" class="list-group-item active list-group-item-action text-white my-2" style="background-color: rgb(29,161,242)">
                    <i class="fa-regular fa-bookmark me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Bookmarks</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-regular fa-rectangle-list me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Lists</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-regular fa-user me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Profile</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-regular fa-comment-dots me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">More</span></a>
            </div>
            <div style="width: 80%"><button class="btn btn-primary w-100 rounded-pill mt-2">Tuit</button></div>
  
 `);
    }else if(active == 'lists'){
        return(`
           
            <div class="list-group">
                <div class="list-group-item bg-black text-white mb-2">
                    <i class="fa-solid fa-t"></i></div>
                <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-solid fa-house"></i> <span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Home</span></a>
                <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action bg-black text-white border-0 my-2">
                    <i class="fa-solid fa-hashtag me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2"><b>Explore</b></span></a>
                <a href="#" class="list-group-item active list-group-item-action text-white my-2">
                    <i class="fa-regular fa-bell me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size-18 ms-2">Notifications</span></a>
                <a href="#" class="list-group-item active list-group-item-action text-white my-2">
                    <i class="fa-regular fa-envelope  me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Messages</span></a>
                <a href="#" class="list-group-item active list-group-item-action text-white my-2">
                    <i class="fa-regular fa-bookmark me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Bookmarks</span></a>
                <a href="#" class="list-group-item active list-group-item-action text-white my-2" style="background-color: rgb(29,161,242)">
                    <i class="fa-regular fa-rectangle-list me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Lists</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-regular fa-user me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Profile</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-regular fa-comment-dots me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">More</span></a>
            </div>
            <div style="width: 80%"><button class="btn btn-primary w-100 rounded-pill mt-2">Tuit</button></div>
  
 `);
    }else if(active == 'lists'){
        return(`
           
            <div class="list-group">
                <div class="list-group-item bg-black text-white mb-2">
                    <i class="fa-solid fa-t"></i></div>
                <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-solid fa-house"></i> <span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Home</span></a>
                <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action bg-black text-white border-0 my-2">
                    <i class="fa-solid fa-hashtag me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2"><b>Explore</b></span></a>
                <a href="#" class="list-group-item active list-group-item-action text-white my-2">
                    <i class="fa-regular fa-bell me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size-18 ms-2">Notifications</span></a>
                <a href="#" class="list-group-item active list-group-item-action text-white my-2">
                    <i class="fa-regular fa-envelope  me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Messages</span></a>
                <a href="#" class="list-group-item active list-group-item-action text-white my-2">
                    <i class="fa-regular fa-bookmark me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Bookmarks</span></a>
                <a href="#" class="list-group-item active list-group-item-action text-white my-2">
                    <i class="fa-regular fa-rectangle-list me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Lists</span></a>
                <a href="#" class="list-group-item active list-group-item-action text-white my-2" style="background-color: rgb(29,161,242)">
                    <i class="fa-regular fa-user me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Profile</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-regular fa-comment-dots me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">More</span></a>
            </div>
            <div style="width: 80%"><button class="btn btn-primary w-100 rounded-pill mt-2">Tuit</button></div>
  
 `);
    }else if(active == 'more'){
        return(`
           
            <div class="list-group">
                <div class="list-group-item bg-black text-white mb-2">
                    <i class="fa-solid fa-t"></i></div>
                <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action bg-black text-white my-2">
                    <i class="fa-solid fa-house"></i> <span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Home</span></a>
                <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action bg-black text-white border-0 my-2">
                    <i class="fa-solid fa-hashtag me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2"><b>Explore</b></span></a>
                <a href="#" class="list-group-item active list-group-item-action text-white my-2">
                    <i class="fa-regular fa-bell me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size-18 ms-2">Notifications</span></a>
                <a href="#" class="list-group-item active list-group-item-action text-white my-2">
                    <i class="fa-regular fa-envelope  me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Messages</span></a>
                <a href="#" class="list-group-item active list-group-item-action text-white my-2">
                    <i class="fa-regular fa-bookmark me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Bookmarks</span></a>
                <a href="#" class="list-group-item active list-group-item-action text-white my-2">
                    <i class="fa-regular fa-rectangle-list me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Lists</span></a>
                <a href="#" class="list-group-item active list-group-item-action text-white my-2">
                    <i class="fa-regular fa-user me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">Profile</span></a>
                <a href="#" class="list-group-item active list-group-item-action text-white my-2" style="background-color: rgb(29,161,242)">
                    <i class="fa-regular fa-comment-dots me-2"></i><span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none wd-text-size ms-2">More</span></a>
            </div>
            <div style="width: 80%"><button class="btn btn-primary w-100 rounded-pill mt-2">Tuit</button></div>
  
 `);
    }

}
export default NavigationSidebar;
//function clickA(){
//     document
// }
