const PostItem = (post) => {
    return(`
    
    <link href="../HomeScreen/index.css" rel="stylesheet">
    <li class="list-group-item  bg-black">
<div class=" wd-border-bottom">

            <img src=${post.icon}  align="top" style="display: inline-block" class="wd-avatar wd-margin-top wd-margin-left float-start"/>
            <div style="display: inline-block" class="wd-margin-left-12 wd-margin-top">

                <div>
                    <h3 style="display: inline-block" class="wd-font-size-15 text-white">${post.name}<span class="fa-stack" style="vertical-align: top; transform: scale(0.5,0.5) translate(-15px,-11px);"><i class="fa-solid fa-certificate fa-stack-2x"></i><i class="fa-solid fa-check fa-stack-1x text-black"></i></span></h3>
                    <p style="display: inline-block" class="text-secondary wd-font-size-15">${post.userName} ${post.time}</p>
<!--                    <a class="wd-color-gray" style=" margin-left: 100%;"> ... </a>-->
                </div>

                <div>
                    <p class="wd-content-width wd-margin-bottom-12 wd-margin-right-16 text-white">${post.topic}</p>
                </div>
                <img class="wd-content-img" src=${post.image}/>
                <div class="wd-article-content">
                    <h3 class=" text-white">${post.title}</h3>
                    <p class="text-secondary wd-font-size-20">${post.content}</p>
                    <p class="text-secondary">${post.website}</p>
                </div>
                <div class="wd-font-size-13 wd-icon-list " >
                    <a href="#" class="wd-color-lightgray text-secondary wd-font-size-15"><i class="fa-regular fa-comment"></i> ${post.comment}</a>
                    <a href="#" class="wd-color-lightgray text-secondary wd-font-size-15"><i class="fa-solid fa-repeat"></i> ${post.retweet}</a>
                    <a href="#" class="wd-color-lightgray text-secondary wd-font-size-15"><i class="fa-regular fa-heart"></i> ${post.like}</a>
                    <a href="#" class="wd-color-lightgray text-secondary wd-font-size-15"><i class="fa-solid fa-arrow-up-from-bracket"></i></a>
                </div>
                <br/>
<!--                <div class="wd-border-bottom"></div>-->
            </div>
        `
    );
}
export default PostItem;